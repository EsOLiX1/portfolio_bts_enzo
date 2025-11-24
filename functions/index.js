const functions = require('firebase-functions');
const admin = require('firebase-admin');
const fetch = require('cross-fetch');

admin.initializeApp();
const RAINDROP_TOKEN = '6c53f873-1caa-4b7f-84a5-f145b428d9b6'; // ⚠ visible publiquement si repo public
const db = admin.firestore();

/**
 * Raindrop Sync Function
 * Expects query param: tag = 'cyber' | 'reseau'
 * Maps to Firestore collection: articles_cybersecurite / articles_reseaux
 */
exports.syncRaindrop = functions.https.onRequest(async (req, res) => {
  // Allow simple GET from browser (dev). In prod, restrict via auth or token.
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
  if (req.method === 'OPTIONS') return res.status(204).send('');

  try {
    const tag = (req.query.tag || '').toString().toLowerCase();
    if (!['cyber', 'reseau'].includes(tag)) {
      return res.status(400).json({ error: 'Param tag requis: cyber ou reseau' });
    }

    const raindropToken = RAINDROP_TOKEN;
    if (!raindropToken) {
      return res.status(500).json({ error: 'Token Raindrop non configuré' });
    }

    // Stratégie de recherche multi essais (certains comptes nécessitent format différent)
    const queries = [
      `tag:${tag}`,        // format principal
      `#${tag}`,           // format avec #
      tag                  // simple mot clé
    ];

    let items = [];
    let tried = [];
    for (const q of queries) {
      const encoded = encodeURIComponent(q);
      const url = `https://api.raindrop.io/rest/v1/raindrops/0?search=${encoded}&perpage=50&sort=-created`;
      tried.push(q);
      const r = await fetch(url, { headers: { Authorization: `Bearer ${raindropToken}` } });
      if (!r.ok) {
        const txt = await r.text();
        console.warn('Échec requête Raindrop', q, txt);
        continue; // essaie suivant
      }
      const data = await r.json();
      if (Array.isArray(data.items) && data.items.length) {
        items = data.items;
        break; // on arrête au premier résultat non vide
      }
    }
    console.log(`Requêtes testées: ${tried.join(' | ')} | items retenus: ${items.length}`);

    const collectionName = tag === 'cyber' ? 'articles_cybersecurite' : 'articles_reseaux';

    let importCount = 0;
    for (const it of items) {
      const urlCanonical = (it.link || it.url || '').trim();
      if (!urlCanonical) continue;

      // Vérifier doublon par URL (index simple)
      const existing = await db.collection(collectionName).where('url', '==', urlCanonical).limit(1).get();
      if (!existing.empty) continue; // déjà présent

      const created = new Date(it.created || it.lastUpdate || Date.now());
      const dateStr = `(${created.getMonth() + 1}/${created.getDate()}/${created.getFullYear()})`;

      const article = {
        imgSrc: it.cover || it.meta?.image || 'img/DeepSeek.png',
        imgAlt: it.title || 'Image article',
        url: urlCanonical,
        title: it.title || 'Titre non disponible',
        description: `${dateStr} – ${(it.excerpt || it.note || '').substring(0, 300)}`.trim()
      };

      await db.collection(collectionName).add(article);
      importCount++;
    }

    return res.json({
      status: 'ok',
      imported: importCount,
      totalFetched: items.length,
      triedQueries: tried
    });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: 'Exception', details: e.message });
  }
});
