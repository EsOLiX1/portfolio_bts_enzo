// Initialisation Firebase avec compat
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

const collectionName = "articles_cybersecurite";

// Affichage d'un article avec bouton "Modifier"
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

  if (articlesContainer.firstChild) {
    articlesContainer.insertBefore(articleElem, articlesContainer.firstChild);
  } else {
    articlesContainer.appendChild(articleElem);
  }

  // Événement sur le bouton "Modifier"
  articleElem.querySelector(".btn-modifier").addEventListener("click", () => {
    modifierArticle(id);
  });
}

// Charger tous les articles
async function chargerArticles() {
  try {
    const querySnapshot = await db.collection(collectionName).get();
    querySnapshot.forEach((doc) => {
      afficherArticle(doc.data(), doc.id);
    });
  } catch (error) {
    console.error("Erreur chargement articles :", error);
  }
}

// Ajouter un article
async function ajouterArticle() {
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

// Modifier un article
async function modifierArticle(id) {
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

    // Demander les nouvelles valeurs
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
    window.location.reload(); // Recharge la page pour mettre à jour l'affichage
  } catch (error) {
    console.error("Erreur lors de la modification :", error);
    alert("Erreur lors de la modification.");
  }
}

// Événements
document.getElementById("addRssBtn").addEventListener("click", ajouterArticle);
window.addEventListener("load", () => {
  chargerArticles();
});
