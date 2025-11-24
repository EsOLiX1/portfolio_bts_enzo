// Initialisation Firebase avec compat (ne pas répéter dans plusieurs fichiers si possible)
const firebaseConfig = {
  apiKey: "AIzaSyACJfw0IB60qtgEY1fLNJL_SVFfePFL204",
  authDomain: "portfolio-enzo.firebaseapp.com",
  projectId: "portfolio-enzo",
  storageBucket: "portfolio-enzo.appspot.com",
  messagingSenderId: "532349695077",
  appId: "1:532349695077:web:def54289f03174d501428c"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
function ensureAuth(){
  return new Promise((resolve, reject)=>{
    if (auth.currentUser) return resolve(auth.currentUser);
    auth.signInAnonymously()
      .then(cred=>{ console.log('[Auth] Anonyme OK', cred.user.uid); resolve(cred.user); })
      .catch(err=>{ console.error('[Auth] Échec anonyme', err); reject(err); });
  });
}
const db = firebase.firestore();

const collectionName = "articles_reseaux";

// Fonction affichage article avec bouton "Modifier"
function afficherArticle(article, id) {
  const articlesContainer = document.getElementById("articlesList");
  const articleElem = document.createElement("article");
  articleElem.classList.add("article-flex");
  articleElem.innerHTML = `
    <img src="${article.imgSrc}" alt="${article.imgAlt}" />
    <div class="article-content">
      <h3><a href="${article.url}" target="_blank" rel="noopener">${article.title}</a></h3>
      <p>${article.description}</p>
      <button class="button-ajouter btn-modifier" data-id="${id}">✏️</button>
    </div>
  `;
  articlesContainer.appendChild(articleElem);
  articleElem.querySelector(".btn-modifier").addEventListener("click", () => { modifierArticle(id); });
}

// Charger tous les articles
async function chargerArticles() {
  try {
    const querySnapshot = await db.collection(collectionName).get();
    const items = [];
    querySnapshot.forEach(doc => {
      const data = doc.data();
      let sortKey = 0;
      if (data.createdAt && typeof data.createdAt.toMillis === 'function') {
        sortKey = data.createdAt.toMillis();
      } else if (data.description) {
        const m = data.description.match(/\((\d{1,2})\/(\d{1,2})\/(\d{4})\)/);
        if (m) {
          const month = parseInt(m[1],10)-1; const day = parseInt(m[2],10); const year = parseInt(m[3],10);
          sortKey = new Date(year, month, day).getTime();
        }
      }
      items.push({ id: doc.id, data, sortKey });
    });
    items.sort((a,b)=> a.sortKey - b.sortKey); // plus vieux -> récent
    // Inverse: plus récent -> plus vieux
    items.sort((a,b)=> b.sortKey - a.sortKey);
    const articlesContainer = document.getElementById('articlesList');
    if (articlesContainer) articlesContainer.innerHTML = '';
    items.forEach(it => afficherArticle(it.data, it.id));
  } catch (error) {
    console.error("Erreur chargement articles :", error);
  }
}

// Ajouter un article
async function ajouterArticle() {
  // Auth simple par prompt
  const login = prompt("Identifiant ?");
  if (login !== "AdminEnzo") {
    alert("Identifiant incorrect. Ajout annulé.");
    return;
  }
  const password = prompt("Mot de passe ?");
  if (password !== "Enzo040906!") {
    alert("Mot de passe incorrect. Ajout annulé.");
    return;
  }

  const url = prompt("Colle l'URL de l'article à ajouter :").trim();
  if (!url) return alert("URL vide, annulation.");

  const now = new Date();
  const dateStr = `(${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()})`;

  const apiURL = `https://api.microlink.io/?url=${encodeURIComponent(url)}`;

  try {
    const res = await fetch(apiURL);
    const data = await res.json();

    if (data.status !== "success") {
      alert("Impossible de récupérer les infos de l'article.");
      return;
    }

    const info = data.data;

    const nouvelArticle = {
      imgSrc: info.image?.url || "img/DeepSeek.png",
      imgAlt: info.title || "Image article",
      url: info.url,
      title: info.title || "Titre non disponible",
      description: `${dateStr} – ${info.description || "Description non disponible"}`
    };

    const docRef = await db.collection(collectionName).add(nouvelArticle);
    console.log("Article ajouté avec ID : ", docRef.id);

    afficherArticle(nouvelArticle, docRef.id);

  } catch (err) {
    console.error(err);
    alert("Erreur lors de la récupération ou ajout de l'article.");
  }
}

// Modifier un article spécifique
async function modifierArticle(id) {
  // Auth simple par prompt
  const login = prompt("Identifiant ?");
  if (login !== "AdminEnzo") {
    alert("Identifiant incorrect. Modification annulée.");
    return;
  }
  const password = prompt("Mot de passe ?");
  if (password !== "Enzo040906!") {
    alert("Mot de passe incorrect. Modification annulée.");
    return;
  }

  try {
    const docRef = db.collection(collectionName).doc(id);
    const docSnap = await docRef.get();

    if (!docSnap.exists) {
      alert("Article introuvable.");
      return;
    }

    const article = docSnap.data();

    // Demander modification de chaque champ
    const newTitle = prompt("Modifier le titre :", article.title) || article.title;
    const newDesc = prompt("Modifier la description :", article.description) || article.description;
    const newImg = prompt("Modifier l'URL de l'image :", article.imgSrc) || article.imgSrc;
    const newAlt = prompt("Modifier le texte alternatif de l'image :", article.imgAlt) || article.imgAlt;
    const newUrl = prompt("Modifier l'URL de l'article :", article.url) || article.url;

    await docRef.update({
      title: newTitle,
      description: newDesc,
      imgSrc: newImg,
      imgAlt: newAlt,
      url: newUrl
    });

    alert("Article mis à jour !");
    window.location.reload(); // recharge la page pour mettre à jour l'affichage
  } catch (error) {
    console.error("Erreur lors de la modification :", error);
  }
}

// Écouteurs d'événements
async function syncRaindrop(tag){
  try {
    const res = await fetch(`https://us-central1-portfolio-enzo.cloudfunctions.net/syncRaindrop?tag=${tag}`);
    const data = await res.json();
    console.log('Sync Raindrop', tag, data);
  } catch(e){
    console.warn('Sync Raindrop échouée', e);
  }
}

const RAINDROP_TOKEN = '6c53f873-1caa-4b7f-84a5-f145b428d9b6'; // ⚠ Visible si repo public

async function syncRaindropDirect(tag){
  try {
    console.log('[Raindrop] Début sync tag=', tag);
    const baseQueries = [`tag:${tag}`, `#${tag}`, tag];
    let items = [];
    for (const q of baseQueries){
      for (let page=0; page<3; page++){
        const skip = page * 50;
        const url = `https://api.raindrop.io/rest/v1/raindrops/0?search=${encodeURIComponent(q)}&perpage=50&sort=-created&skip=${skip}`;
        console.log('[Raindrop] Requête', q, 'page', page, url);
        const r = await fetch(url, { headers: { Authorization: `Bearer ${RAINDROP_TOKEN}` }}).catch(e=>{ console.error('Fetch error', e); return null; });
        if(!r) continue;
        if(!r.ok){ console.warn('[Raindrop] HTTP', r.status); continue; }
        const data = await r.json();
        const chunk = data.items || [];
        console.log('[Raindrop] Chunk', chunk.length);
        if (!chunk.length) break;
        items.push(...chunk);
        if (chunk.length < 50) break;
      }
      if (items.length) break;
    }
    if(!items.length){ console.log('[Raindrop] Aucun item trouvé'); return; }

    const existingSnapshot = await db.collection(collectionName).get();
    const existingUrls = new Set();
    existingSnapshot.forEach(d=> existingUrls.add(d.data().url));
    console.log('[Raindrop] URLs existantes:', existingUrls.size);

    const now = new Date();
    let added = 0;
    for (const it of items){
      const link = (it.link || it.url || '').trim();
      if(!link) continue;
      if(existingUrls.has(link)) continue; // anti-doublon

      const created = new Date(it.created || now);
      const dateStr = `(${created.getMonth()+1}/${created.getDate()}/${created.getFullYear()})`;
      let article = {
        imgSrc: it.cover || it.meta?.image || 'img/DeepSeek.png',
        imgAlt: it.title || 'Image article',
        url: link,
        title: it.title || 'Titre non disponible',
        description: `${dateStr} – ${(it.excerpt || it.note || '').substring(0,200)}`.trim(),
        source: 'raindrop',
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      };
      try {
        const micRes = await fetch(`https://api.microlink.io/?url=${encodeURIComponent(link)}`);
        const micData = await micRes.json();
        if (micData.status === 'success'){
          const info = micData.data;
          article.imgSrc = info.image?.url || article.imgSrc;
          article.title = info.title || article.title;
          article.description = `${dateStr} – ${info.description || article.description}`;
        }
      } catch(e){ console.warn('[Microlink] fail', e); }

      try {
        const docRef = await db.collection(collectionName).add(article);
        existingUrls.add(link);
        afficherArticle(article, docRef.id);
        added++;
      } catch(e){ console.error('[Firestore] Erreur ajout', e); }
    }
    console.log('[Raindrop] Sync terminée (anti-doublon), nouveaux ajoutés:', added);
  } catch(e){
    console.error('Erreur syncRaindropDirect', e);
  }
}

window.addEventListener("load", async () => {
  try { await ensureAuth(); } catch(e){ alert('Auth anonyme échouée'); return; }
  if (RAINDROP_TOKEN && RAINDROP_TOKEN !== 'TON_TOKEN_RAINDROP_ICI') {
    await syncRaindropDirect('reseau');
  }
  chargerArticles();
});

document.getElementById("addRssBtn").addEventListener("click", ajouterArticle);
