// Initialisation Firebase avec compat (idem, éviter de répéter si possible)
const firebaseConfig = {
  apiKey: "AIzaSyACJfw0IB60qtgEY1fLNJL_SVFfePFL204",
  authDomain: "portfolio-enzo.firebaseapp.com",
  projectId: "portfolio-enzo",
  storageBucket: "portfolio-enzo.appspot.com",
  messagingSenderId: "532349695077",
  appId: "1:532349695077:web:def54289d501428c",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const collectionName = "articles_reseaux";

function afficherArticle(article) {
  const articlesContainer = document.getElementById("articlesList");
  const articleElem = document.createElement("article");
  articleElem.classList.add("article-flex");

  articleElem.innerHTML = `
    <img src="${article.imgSrc}" alt="${article.imgAlt}" />
    <div class="article-content">
      <h3><a href="${article.url}" target="_blank" rel="noopener">${article.title}</a></h3>
      <p>${article.description}</p>
    </div>
  `;

  if (articlesContainer.firstChild) {
    articlesContainer.insertBefore(articleElem, articlesContainer.firstChild);
  } else {
    articlesContainer.appendChild(articleElem);
  }
}

async function chargerArticles() {
  try {
    const querySnapshot = await db.collection(collectionName).get();
    querySnapshot.forEach((doc) => {
      afficherArticle(doc.data());
    });
  } catch (error) {
    console.error("Erreur chargement articles :", error);
  }
}

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
      imgSrc: info.image?.url || "img/5G.png",
      imgAlt: info.title || "Image article",
      url: info.url,
      title: info.title || "Titre non disponible",
      description: `${dateStr} – ${info.description || "Description non disponible"}`
    };

    const docRef = await db.collection(collectionName).add(nouvelArticle);
    console.log("Article ajouté avec ID : ", docRef.id);

    afficherArticle(nouvelArticle);

  } catch (err) {
    console.error(err);
    alert("Erreur lors de la récupération ou ajout de l'article.");
  }
}

document.getElementById("addRssBtn").addEventListener("click", ajouterArticle);

window.addEventListener("load", () => {
  chargerArticles();
});
