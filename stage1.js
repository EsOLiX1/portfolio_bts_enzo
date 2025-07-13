// Données de toutes les galeries
const galleriesData = {
  Accueil: [
    { src: 'imgstage1/Accueil Logiciel/FEN_Accueil.png', alt: 'FEN_Accueil', caption: 'Écran d’accueil de l’application Alizée SMS.' },
    { src: 'imgstage1/Accueil Logiciel/BTN_IMPORTATION_Accueil.png', alt: 'BTN_IMPORTATION_Accueil', caption: 'Ce code permet de passer en paramètre les filtres à la fenêtre tableau des SMS(date et nom du port).' },
    { src: 'imgstage1/Accueil Logiciel/BTN_PORT_Accueil.png', alt: 'BTN_PORT_Accueil', caption: 'Il s’agit juste de la fonction ouvre qui permet d’ouvrir la fenêtre de la liste des ports.' },
    { src: 'imgstage1/Accueil Logiciel/BTN_COMPTA_Accueil.png', alt: 'BTN_COMPTA_Accueil', caption: 'Encore une fois le bouton sert juste à ouvrir une fenêtre qui est celle de la comptabilité mais on y passe en paramètre tous qui servira de filtre.' },
    { src: 'imgstage1/Accueil Logiciel/BTN_SOLDE_Accueil.png', alt: 'BTN_SOLDE_Accueil', caption: 'Juste la fonction ouvre pour la fenêtre des soldes de chaques ports.' },
    { src: 'imgstage1/Accueil Logiciel/BTN_MODELE_MAIL_Accueil.png', alt: 'BTN_MODELE_MAIL_Accueil', caption: 'Juste la fonction ouvre pour la fenêtre des modèles de mail.' },
    { src: 'imgstage1/Accueil Logiciel/BTN_FERMER_Accueil.png', alt: 'BTN_FERMER_Accueil', caption: 'Le code du bouton "Ferme" possède juste la fonction ferme qui permet de fermer une fenêtre.' },

  ],
  TableauSMS: [
    { src: 'imgstage1/SMS Logiciel/FEN_SMS.png', alt: 'FEN_SMS', caption: 'Écran du tableau des SMS.' },
    { src: 'imgstage1/SMS Logiciel/SAI_RECHDEB_FIN.png', alt: 'SAI_RECHDEB_FIN', caption: 'Voici le code du filtre "période du" "au" il contient juste la fonction RempliTableSQL2 que nous verrons un peu plus tard.' },
    { src: 'imgstage1/SMS Logiciel/COMBO_PORT.png', alt: 'COMBO_PORT', caption: 'Nous avons là le code du menu déroulant permettant de sélectionner un nom de port pour filtrer.' },
    { src: 'imgstage1/SMS Logiciel/BTN_Ajouter.png', alt: 'BTN_Ajouter', caption: 'Le code du bouton ajouter permet juste d’ouvrir et de passer en paramètre le mot "Création" à une fenêtre que nous verrons par la suite qui est fenêtre "fiche des SMS".' },
    { src: 'imgstage1/SMS Logiciel/BTN_Modifier.png', alt: 'BTN_Modifier', caption: 'Le code du bouton du bouton modifier est assez similaire à celui d’ajouter sauf qui oblige l’utilisateur à sélectionner une seule ligne et que le paramètre est "Modif".' },
    { src: 'imgstage1/SMS Logiciel/BTN_Supprimer.png', alt: 'BTN_Supprimer', caption: 'Le code du bouton supprimer est assez simple il exige une seule ligne sélectionner puis il utilise la fonction Hlitrecherche et il Hsupprime.' },
    { src: 'imgstage1/SMS Logiciel/BTN_Importer.png', alt: 'BTN_Importer', caption: 'Le code du bouton importer fais juste un appel à ma fonction importer que nous allons voir dans les procédures globales.' },
    { src: 'imgstage1/SMS Logiciel/Déclaration(1).png', alt: 'Déclaration(1)', caption: 'Voici les déclaration de la fenêtre tableau des SMS.' },
    { src: 'imgstage1/SMS Logiciel/Déclaration(2).png', alt: 'Déclaration(2)', caption: 'Voici les déclaration de la fenêtre tableau des SMS nous avons là les fonction RempliTable.' },
    { src: 'imgstage1/SMS Logiciel/Déclaration(3).png', alt: 'Déclaration(3)', caption: 'Voici les déclaration de la fenêtre tableau des SMS nous avons là les fonction RempliTable.' },
    
  ],

  TableauPorts: [
    { src: 'imgstage1/Ports Logiciel/FEN_Ports.png', alt: 'FEN_Ports', caption: 'Écran du tableau des Ports.' },
    { src: 'imgstage1/Ports Logiciel/BTN_Ajouter.png', alt: 'BTN_Ajouter', caption: 'Le code du bouton ajouter permet juste d’ouvrir et de passer en paramètre le mot "Création" à une fenêtre que nous verrons par la suite qui est fenêtre "fiche des Ports".' },
    { src: 'imgstage1/Ports Logiciel/BTN_Modifier.png', alt: 'BTN_Modifier', caption: 'Le code du bouton du bouton modifier est assez similaire à celui d’ajouter sauf qui oblige l’utilisateur à sélectionner une seule ligne et que le paramètre est "Modif".' },
    { src: 'imgstage1/Ports Logiciel/BTN_Supprimer.png', alt: 'BTN_Supprimer', caption: 'Le code du bouton supprimer est assez simple il exige une seule ligne sélectionner puis il utilise la fonction Hlitrecherche et il Hsupprime.' },
    { src: 'imgstage1/Ports Logiciel/Déclaration.png', alt: 'Déclaration', caption: 'Voici les déclaration de la fenêtre tableau des Ports.' },
    
  ],
  
  TableauComptabilité: [
    { src: 'imgstage1/Comptabilité Logiciel/FEN_COMPTA.png', alt: 'FEN_COMPTA', caption: 'Écran du tableau de Comptabilité.' },
    { src: 'imgstage1/Comptabilité Logiciel/SAI_RECHDEB_FIN.png', alt: 'SAI_RECHDEB_FIN', caption: 'Voici le code du filtre "période du" "au" il contient juste la fonction RempliTableSQL2 que nous verrons un peu plus tard.' },
    { src: 'imgstage1/Comptabilité Logiciel/COMBO_PORT.png', alt: 'COMBO_PORT', caption: 'Nous avons là le code du menu déroulant permettant de sélectionner un nom de port pour filtrer.' },
    { src: 'imgstage1/Comptabilité Logiciel/BTN_Ajouter.png', alt: 'BTN_Ajouter', caption: 'Le code du bouton ajouter permet juste d’ouvrir et de passer en paramètre le mot "Création" à une fenêtre que nous verrons par la suite qui est fenêtre "fiche des Comptabilité".' },
    { src: 'imgstage1/Comptabilité Logiciel/BTN_Modifier.png', alt: 'BTN_Modifier', caption: 'Le code du bouton du bouton modifier est assez similaire à celui d’ajouter sauf qui oblige l’utilisateur à sélectionner une seule ligne et que le paramètre est "Modif".' },
    { src: 'imgstage1/Comptabilité Logiciel/BTN_Supprimer.png', alt: 'BTN_Supprimer', caption: 'Le code du bouton supprimer est assez simple il exige une seule ligne sélectionner puis il utilise la fonction Hlitrecherche et il Hsupprime.' },
    { src: 'imgstage1/Comptabilité Logiciel/BTN_Voir les SMS.png', alt: 'BTN_Voir les SMS', caption: 'Le code du bouton "Voir les SMS" permet d’ouvrir la fenêtre tableau des SMS avec les filtres désirés pour avoir juste les SMS d’un port à une date précise.' },
    { src: 'imgstage1/Comptabilité Logiciel/Déclaration(1).png', alt: 'Déclaration(1)', caption: 'Voici les déclaration de la fenêtre tableau des Comptabilité.' },
    { src: 'imgstage1/Comptabilité Logiciel/Déclaration(2).png', alt: 'Déclaration(2)', caption: 'Voici les déclaration de la fenêtre tableau des Comptabilité.' },
    
  ],

  TableauSoldes: [
    { src: 'imgstage1/Solde Logiciel/FEN_Solde_des_Ports.png', alt: 'FEN_Solde_des_Ports', caption: 'Écran du tableau des Soldes.' },
    { src: 'imgstage1/Solde Logiciel/BTN_COMPTA.png', alt: 'BTN_COMPTA', caption: 'Le code du bouton "Comptabilité" permet d’ouvrir la fenêtre tableau de Comptabilité avec en paramètre le code du port qui permet d’afficher uniquement le port sélectionné' },
    { src: 'imgstage1/Solde Logiciel/BTN_Mail(1).png', alt: 'BTN_Mail(1)', caption: 'Le code du bouton envoyer un mail récupère les emails les ports et informe l’utilisateur si le port ne possède pas de mail.' },
    { src: 'imgstage1/Solde Logiciel/BTN_Mail(2).png', alt: 'BTN_Mail(2)', caption: 'Mais il informe aussi l’utilisateur si les soldes ne sont pas les même' },
    { src: 'imgstage1/Solde Logiciel/Déclaration(1).png', alt: 'Déclaration(1)', caption: 'Voici les déclaration de la fenêtre tableau des Soldes.' },
    { src: 'imgstage1/Solde Logiciel/Déclaration(2).png', alt: 'Déclaration(2)', caption: 'Voici les déclaration de la fenêtre tableau des Soldes.' },

  ],

  ModèleMail: [
    { src: 'imgstage1/Modèle Email Logiciel/FEN_MODELEEMAIL.png', alt: 'FEN_MODELEEMAIL', caption: 'Écran du tableau des Modèles de Mail.' },
    { src: 'imgstage1/Modèle Email Logiciel/BTN_Ajouter.png', alt: 'BTN_Ajouter', caption: 'Le code du bouton ajouter permet juste d’ouvrir et de passer en paramètre le mot "Création" à une fenêtre que nous verrons par la suite qui est fenêtre "fiche des Modèles de Mail".' },
    { src: 'imgstage1/Modèle Email Logiciel/BTN_Modifier.png', alt: 'BTN_Modifier', caption: 'Le code du bouton du bouton modifier est assez similaire à celui d’ajouter sauf que le paramètre est "Modif".' },
    { src: 'imgstage1/Modèle Email Logiciel/BTN_Supprimer.png', alt: 'BTN_Supprimer', caption: 'Le code du bouton supprimer est assez simple il utilise la fonction Hlitrecherche et il Hsupprime.' },
    { src: 'imgstage1/Modèle Email Logiciel/Déclaration.png', alt: 'Déclaration', caption: 'Voici les déclaration de la fenêtre tableau des Modèles de Mail.' },

  ],

  Jauge: [
    { src: 'imgstage1/Jauge Logiciel/FEN_Jauge.png', alt: 'FEN_Jauge', caption: 'Voici la jauge de chargement lors de l’importation des données.' },
    { src: 'imgstage1/Jauge Logiciel/Déclaration.png', alt: 'Déclaration', caption: 'Le code de la Jauge est la suite du code de la fonction importation.' },
  
  ],

  FicheSMS: [
    { src: 'imgstage1/Fiche LISTSMS Logiciel/FEN_Fiche_LISTSMS.png', alt: 'FEN_Fiche_LISTSMS', caption: 'Écran de la fiche SMS.' },
    { src: 'imgstage1/Fiche LISTSMS Logiciel/BTN_Valider.png', alt: 'BTN_Valider', caption: 'Le code du bouton valider est juste la pour récupérer le mot "Création" ou "Modif" et donc soit ajouter soit modifier.' },
    { src: 'imgstage1/Fiche LISTSMS Logiciel/Déclaration.png', alt: 'Déclaration', caption: 'Le code de la fiche SMS récupère le mot "Création" ou "Modif" pour récupérer ou non les données suivant le mode.' },
  
  ],

  FichePorts: [
    { src: 'imgstage1/Fiche Port Logiciel/FEN_Fiche_PORT.png', alt: 'FEN_Fiche_PORT', caption: 'Écran de la fiche Port.' },
    { src: 'imgstage1/Fiche Port Logiciel/BTN_Valider.png', alt: 'BTN_Valider', caption: 'Le code du bouton valider est juste la pour récupérer le mot "Création" ou "Modif" et donc soit ajouter soit modifier.' },
    { src: 'imgstage1/Fiche Port Logiciel/Déclaration.png', alt: 'Déclaration', caption: 'Le code de la fiche SMS récupère le mot "Création" ou "Modif" pour récupérer ou non les données suivant le mode.' },
  
  ],

  FicheComptabilité: [
    { src: 'imgstage1/Fiche Compta Logiciel/FEN_Fiche_COMPTA.png', alt: 'FEN_Fiche_COMPTA', caption: 'Écran de la fiche Comptabilité.' },
    { src: 'imgstage1/Fiche Compta Logiciel/BTN_Valider.png', alt: 'BTN_Valider', caption: 'Le code du bouton valider est juste la pour récupérer le mot "Création" ou "Modif" et donc soit ajouter soit modifier.' },
    { src: 'imgstage1/Fiche Compta Logiciel/Déclaration.png', alt: 'Déclaration', caption: 'Le code de la fiche SMS récupère le mot "Création" ou "Modif" pour récupérer ou non les données suivant le mode.' },
  
  ],

  FicheModeleMail: [
    { src: 'imgstage1/Fiche modèle de Mail/FEN_Fiche_MODELEEMAIL.png', alt: 'FEN_Fiche_MODELEEMAIL', caption: 'Écran de la fiche Comptabilité.' },
    { src: 'imgstage1/Fiche modèle de Mail/BTN_Valider.png', alt: 'BTN_Valider', caption: 'Le code du bouton valider est juste la pour récupérer le mot "Création" ou "Modif" et donc soit ajouter soit modifier.' },
    { src: 'imgstage1/Fiche modèle de Mail/Déclaration.png', alt: 'Déclaration', caption: 'Le code de la fiche SMS récupère le mot "Création" ou "Modif" pour récupérer ou non les données suivant le mode.' },
  
  ],

  FicheNom: [
    { src: 'imgstage1/Fiche Ponom Logiciel/FEN_Fiche_PONOM.png', alt: 'FEN_Fiche_PONOM', caption: 'Écran de la fiche Nom.' },
    { src: 'imgstage1/Fiche Ponom Logiciel/BTN_Valider.png', alt: 'BTN_Valider', caption: 'Le code du bouton "Valider" cherche dans la table "PORTIGNORE" pour voir si le port en question n’a pas déjà été ignoré puis il cherche l’ID de l’enregistrement pour ajouter le nom à la bonne ligne de la table.' },
    { src: 'imgstage1/Fiche Ponom Logiciel/BTN_Ignorer.png', alt: 'BTN_Ignorer', caption: 'Le code du bouton "ignorer" cherche dans la table "PORTIGNORE" pour voir si le port en question n’a pas déjà été ignoré puis il ajoute le port à la table "PORTIGNORE".' },
    { src: 'imgstage1/Fiche Ponom Logiciel/Déclaration.png', alt: 'Déclaration', caption: 'Dans la déclaration de la fenêtre j’initialise juste le code du port.' },

  ],

  EnvoiMail: [
    { src: 'imgstage1/Envoi de Mail Logiciel/FEN_Envoi_de_Mail.png', alt: 'FEN_Envoi_de_Mail', caption: 'Écran de la fiche Comptabilité.' },
    { src: 'imgstage1/Envoi de Mail Logiciel/COMBO_MODELEEMAIL.png', alt: 'COMBO_MODELEEMAIL', caption: 'Le code de la combo permet juste d’avoir le nom associé à l’objet et au texte du mail un fois sélectionné celà rempli les autres cases.' },
    { src: 'imgstage1/Envoi de Mail Logiciel/BTN_Envoyer(1).png', alt: 'BTN_Envoyer(1)', caption: 'Le code du bouton "Envoyer" permet de se connecter au serveur SMTP de l’entreprise puis il récupère la date du dernier achat du port sélectionné ainsi que le mail du port.' },
    { src: 'imgstage1/Envoi de Mail Logiciel/BTN_Envoyer(2).png', alt: 'BTN_Envoyer(2)', caption: 'Toujours le bouton "Envoyer" transforme les mots avec un "#" en valeurs voulu dans le corps du mail et un fichier est généré avec les différents SMS envoyé par le port puis se dernier est ajouté en pièce jointe.' },
    { src: 'imgstage1/Envoi de Mail Logiciel/BTN_Envoyer(3).png', alt: 'BTN_Envoyer(3)', caption: 'Pour finir, un message est envoyé à l’utilisateur sur le statut de l’envoi du mail.' },
    { src: 'imgstage1/Envoi de Mail Logiciel/Déclaration(1).png', alt: 'Déclaration(1)', caption: 'La procédure ExporteHistoirique s’occupe de générer le ficher des SMS du port pour qu’ils aient un suivi des différents SMS envoyés.' },
    { src: 'imgstage1/Envoi de Mail Logiciel/Déclaration(2).png', alt: 'Déclaration(2)', caption: 'Puis ce dernier est ajouté en pièce jointe du Mail.' },

  ],

  Analyse: [
    { src: 'imgstage1/Analyse Logiciel/Analyse.png', alt: 'Analyse', caption: 'Écran de l’analyse.' },
    { src: 'imgstage1/Analyse Logiciel/Analyse LISTSMS.png', alt: 'Analyse LISTSMS', caption: 'Analyse LISTSMS' },
    { src: 'imgstage1/Analyse Logiciel/Analyse COMPTA.png', alt: 'Analyse COMPTA', caption: 'Analyse COMPTA' },
    { src: 'imgstage1/Analyse Logiciel/Analyse PORT.png', alt: 'Analyse PORT', caption: 'Analyse PORT' },
    { src: 'imgstage1/Analyse Logiciel/Analyse PORTIGNORE.png', alt: 'Analyse PORTIGNORE', caption: 'Analyse PORTIGNORE' },
    { src: 'imgstage1/Analyse Logiciel/Analyse MODELEEMAIL.png', alt: 'Analyse MODELEEMAIL', caption: 'Analyse MODELEEMAIL' },

  ],

  FonctionnementWindev: [
    { src: 'imgstage1/Fonctionnement Windev/Bandeau Supérieur Onglet Projet.png', alt: 'Bandeau Supérieur Onglet Projet', caption: 'Bandeau Supérieur Onglet Projet' },
    { src: 'imgstage1/Fonctionnement Windev/Bandeau Supérieur Onglet GDS.png', alt: 'Bandeau Supérieur Onglet GDS', caption: 'Bandeau Supérieur Onglet GDS' },
    { src: 'imgstage1/Fonctionnement Windev/Bandeau Supérieur Onglet Création.png', alt: 'Bandeau Supérieur Onglet Création', caption: 'Bandeau Supérieur Onglet Création' },
    { src: 'imgstage1/Fonctionnement Windev/Bandeau Supérieur Onglet Outils.png', alt: 'Bandeau Supérieur Onglet Outils', caption: 'Bandeau Supérieur Onglet Outils' },
  
  ],

  Global: [
    { src: 'imgstage1/Global  Principal/Ecran principal Windev.png', alt: 'Ecran principal Windev', caption: 'Écran principal Windev' },
    { src: 'imgstage1/Global  Principal/Varriables Globales.png', alt: 'Varriables Globales', caption: 'Varriables Globales : il s’agit des variables qui sont gloables au projet on peut les utiliser n’importe où.' },
  
  ],

  ProceduresGlobales: [
    { src: 'imgstage1/Procédures Globales Logiciel/Procédure Importation.png', alt: 'Procédure Importation', caption: 'La fonction "Importation" permet de récupérer les données d’un fichier excel pour ajouter les données aux différentes analyses.' },
    { src: 'imgstage1/Procédures Globales Logiciel/Procédure ActualiseListeDesPorts.png', alt: 'Procédure ActualiseListeDesPorts', caption: 'La fonction "Actualise la liste des ports" permet d’associer les codes et les ID aux noms des ports.' },
    { src: 'imgstage1/Procédures Globales Logiciel/Procédure ActualiseLaCompta.png', alt: 'Procédure ActualiseLaCompta', caption: 'La fonction "Actualise la Compta" permet de remplir l’analyse COMPTA à partir des données importées.' },
    { src: 'imgstage1/Procédures Globales Logiciel/Procédure CnxAlizSMS.png', alt: 'Procédure CnxAlizSMS', caption: 'La fonction "CnxAlizSMS" permet de se connecter au serveur pour y ajouter les données ou les utiliser.' },
    { src: 'imgstage1/Procédures Globales Logiciel/Procédure RecupAMDID(1).png', alt: 'Procédure RecupAMDID(1)', caption: 'La fonction "RecupAMDID" permet de se connecter au serveur de données de l’entreprise pour y récupérer des données notament les ID des ports ou encore les Mails des dirigéants des différents ports.' },
    { src: 'imgstage1/Procédures Globales Logiciel/Procédure RecupAMDID(2).png', alt: 'Procédure RecupAMDID(2)', caption: 'La fonction "RecupAMDID".' },
    { src: 'imgstage1/Procédures Globales Logiciel/Procédure RecupAMDID(3).png', alt: 'Procédure RecupAMDID(3)', caption: 'La fonction "RecupAMDID".' },
    { src: 'imgstage1/Procédures Globales Logiciel/Procédure RecupAMDID(4).png', alt: 'Procédure RecupAMDID(4)', caption: 'La fonction "RecupAMDID".' },
  
  ],
  // Ajoute d’autres galeries si besoin
};

// Pour chaque galerie sur la page
document.querySelectorAll('.stage-gallery').forEach(galleryEl => {
  const galleryId = galleryEl.dataset.galleryId;
  const images = galleriesData[galleryId];
  let currentIndex = 0;

  // Crée la lightbox dans le DOM si elle n'existe pas déjà
  let lightbox = document.getElementById(`lightbox-${galleryId}`);
  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.id = `lightbox-${galleryId}`;
    lightbox.className = 'stage-lightbox';
    lightbox.innerHTML = `
      <div class='stage-lightbox-content'>
        <button class='stage-lightbox-close' aria-label='Fermer la galerie'>&times;</button>
        <img class='stage-lightbox-image' src='' alt='' />
        <div class='stage-lightbox-caption'></div>
        <div class='stage-lightbox-controls'>
          <button class='prev-btn' aria-label='Image précédente'>Précédent</button>
          <button class='next-btn' aria-label='Image suivante'>Suivant</button>
        </div>
      </div>
    `;
    document.body.appendChild(lightbox);
  }

  const btn = galleryEl.querySelector('.stage-gallery-button');
  const imgEl = lightbox.querySelector('.stage-lightbox-image');
  const captionEl = lightbox.querySelector('.stage-lightbox-caption');
  const closeBtn = lightbox.querySelector('.stage-lightbox-close');
  const prevBtn = lightbox.querySelector('.prev-btn');
  const nextBtn = lightbox.querySelector('.next-btn');

  function showImage(index) {
    const img = images[index];
    imgEl.src = img.src;
    imgEl.alt = img.alt;
    captionEl.textContent = img.caption;
    currentIndex = index;
  }

  btn.addEventListener('click', () => {
    showImage(0);
    lightbox.classList.add('active');
  });

  closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('active');
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  });

  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) {
      lightbox.classList.remove('active');
    }
  });
});
