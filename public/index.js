// Config Firebase
const firebaseConfig = {
  apiKey: "AIzaSyACJfw0IB60qtgEY1fLNJL_SVFfePFL204",
  authDomain: "portfolio-enzo.firebaseapp.com",
  projectId: "portfolio-enzo",
  storageBucket: "portfolio-enzo.appspot.com",
  messagingSenderId: "532349695077",
  appId: "1:532349695077:web:def54289f03174d501428c"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Collection de chaque catégorie
const collections = {
  reseaux: "articles_reseaux",
  cybersecurite: "articles_cybersecurite"
};

// Fonction pour afficher un article
function afficherArticle(article, categorie) {
  const articlesSection = document.getElementById("articles");

  const articleElem = document.createElement("article");
  articleElem.innerHTML = `
    <h3>${categorie === 'reseaux' ? 'Réseaux' : 'Cybersécurité'} : <a href="${article.url}" target="_blank">${article.title}</a></h3>
    <p>${article.description}</p>
  `;

  // Insérer au début
  articlesSection.appendChild(articleElem);
}

// Récupérer le dernier article d’une collection
async function chargerDernierArticle(categorie, collectionName) {
  try {
    const querySnapshot = await db
      .collection(collectionName)
      .orderBy(firebase.firestore.FieldPath.documentId(), "desc")
      .limit(1)
      .get();

    querySnapshot.forEach(doc => {
      afficherArticle(doc.data(), categorie);
    });
  } catch (error) {
    console.error(`Erreur lors du chargement du dernier article (${categorie}) :`, error);
  }
}

// Charger les derniers articles de toutes les catégories
function chargerDerniersArticles() {
  for (const [categorie, collectionName] of Object.entries(collections)) {
    chargerDernierArticle(categorie, collectionName);
  }
}

window.addEventListener("load", chargerDerniersArticles);
