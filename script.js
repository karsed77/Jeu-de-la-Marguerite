const motsPendu = [
  "POMME",
  "BANANE",
  "ORANGE",
  "FRAISE",
  "CERISE",
  "ANANAS",
  "KIWI",
  "RAISIN",
  "PECHE",
  "MANGUE",
  "POIRE",
  "CITRON",
  "AVOCAT",
  "PASTEQUE",
  "BLEU",
  "ROUGE",
  "VERT",
  "JAUNE",
  "NOIR",
  "BLANC",
  "MARRON",
  "VIOLET",
  "OR",
  "ARGENT",
  "PLATANE",
  "OLIVIER",
  "TOMATE",
  "CAROTTE",
  "OIGNON",
  "COURGETTE",
  "AUBERGINE",
  "BROCOLI",
  "PATATE",
  "CONCOMBRE",
  "RADIS",
];
let resteElement = document.querySelector("h2");
let imagePendu = document.querySelector(".images");
let h1 = document.querySelector("h1");
let reste = 5;

resteElement.style.padding = "20px";

//******************************** */ Pour génerer un mot aleatoire dans le tableau de motsPendu
function genererMot(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//******************************** */ Pour initialiser le jeu et afficher le mot à deviner
let motCacher = document.querySelector(".motCacher");
let nombreAleatoire = 0;
let dernier = 0;
let motADeviner = motsPendu[genererMot(motsPendu.length)];
let motDecoupe = motADeviner.split("");
let motCache = "";
let motAffiche = "";
let restart = document.querySelector(".rejouer button");

function initialiserJeu() {
  console.log(motADeviner);
  console.log(motDecoupe);
  motDecoupe.forEach((lettre) => {
    let span = document.createElement("span");
    span.className = "letter_word";
    span.textContent = " _";
    motCacher.appendChild(span);
  });
  dernier = nombreAleatoire;
}
initialiserJeu();

// ******* detecter le click sur le bouton verifier
let verifier = document.querySelector("#verifier");
verifier.addEventListener("click", function () {
  verifier.style.backgroundColor = "red";
});

// ******* detecter le click sur une lettre du clavier virtuel et verifier si la lettre est dans le mot à deviner.
let boutonsClavier = document.querySelectorAll(".keyboard button");
let btn = document.querySelectorAll(".lettre");
let imagePendu1 = document.querySelector(".images");
let imagePendu2 = document.querySelector(".images");
let imagePendu3 = document.querySelector(".images");
let imagePendu4 = document.querySelector(".images");
let imagePendu5 = document.querySelector(".images");
let imagePendu6 = document.querySelector(".images");
let imagePendu7 = document.querySelector(".images");
let imageWin = document.querySelector(".images");
let pendu = document.querySelector(".pendu");

boutonsClavier.forEach(function (button) {
  button.addEventListener("click", function () {
    const letter = button.textContent;

    if (motDecoupe.includes(letter)) {
      // bonne lettre trouvé par le joueur (on affiche la lettre) et on desactive le bouton pour ne pas pouvoir cliquer dessus une deuxieme fois (on change la couleur du bouton) et on verifie si le joueur a gagné.
      button.enable = true;
      button.style.backgroundColor = "green";
      motDecoupe.forEach((lettre, index) => {
        if (lettre == letter) {
          motCacher.children[index].textContent = lettre;
        }
      });
    } else {
      // mauvaise lettre trouvé par le joueur (on desactive le bouton pour ne pas pouvoir cliquer dessus une deuxieme fois (on change la couleur du bouton) et on verifie si le joueur a perdu.
      button.disabled = true;
      button.style.backgroundColor = "gray";
      resteElement.textContent = reste;
      reste--;

      // Si le joueur perd on affiche le mot, on desactive les boutons du clavier et on affiche l'image.
      if (reste == -1) {
        h1.textContent = "Vous avez PERDU ! Le mot était " + motADeviner + " !";
        boutonsClavier.forEach((button) => {
          button.disabled = true;
        });
      }
      if (reste == 4) {
        imagePendu1.style.backgroundImage = "url('images/pendu0.png')";
        imagePendu1.style.backgroundRepeat = "no-repeat";
      } else if (reste == 3) {
        imagePendu2.style.backgroundImage = "url('images/pendu1.png')";
        imagePendu2.style.backgroundRepeat = "no-repeat";
      } else if (reste == 2) {
        imagePendu3.style.backgroundImage = "url('images/pendu2.png')";
        imagePendu3.style.backgroundRepeat = "no-repeat";
      } else if (reste == 1) {
        imagePendu4.style.backgroundImage = "url('images/pendu3.png')";
        imagePendu4.style.backgroundRepeat = "no-repeat";
      } else if (reste == 0) {
        imagePendu5.style.backgroundImage = "url('images/pendu4.png')";
        imagePendu5.style.backgroundRepeat = "no-repeat";
      } else if (reste == -1) {
        imagePendu6.style.backgroundImage = "url('images/pendu5.png')";
        imagePendu6.style.backgroundRepeat = "no-repeat";
      } else if (reste == -1) {
        confirm("Le mot est " + motADeviner + " Voulez-vous rejouer ?")
          ? location.reload()
          : alert("Bye !");
      }

      // Check si le joueur a gagné (si il ne reste plus de _ dans le mot caché).

      let gagne = true;

      for (let i = 0; i < motCacher.children.length; i++) {
        if (motCacher.children[i].textContent == " _") {
          gagne = false;
          break;
          //   verifier.disabled = false
          //   verifier.style.backgroundColor = "red";
        }
      }
      //   verifier.disabled = true
      if (gagne) {
        h1.textContent = "Vous avez gagné !";
        imageWin.style.backgroundImage = "url('images/penduWin.png')";
        imageWin.style.backgroundSize = "cover";
        imageWin.style.backgroundPosition = "center";

        // Si le joueur gagne on affiche un message de victoire et on lui demande s'il veut rejouer ou non. Si oui on recharge la page, si non on affiche un message d'au revoir.
        if (confirm("Vous avez gagné ! Voulez-vous rejouer ?")) {
          location.reload();
        } else {
          alert("Bye !");
        }
      }

      // ******* détecte le click sur le bouton rejouer pour relancer une partie avec un nouveau mot aleatoire.

      restart.addEventListener("click", () => {
        location.reload();
      });
    }
  });
});
