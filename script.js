let resteElement = document.querySelector("h2");
let imagePendu = document.querySelector(".images");
let h1 = document.querySelector("h1");
let reste = 5;

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
  "marron",
  "violet",
  "or",
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

//******************************** */ Pour gnerer un mot aleatoire
function genererMot(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//******************************** */ Pour initialiser le jeu
let motCacher = document.querySelector(".motCacher");
let nombreAleatoire = 0;
let dernier = 0;
let motADeviner = "";
let motCache = "";
let motAffiche = "";
let restart = document.querySelector(".rejouer button");

function initialiserJeu() {
  restart.addEventListener("click", () => {
    do {
      nombreAleatoire = genererMot(motsPendu.length);
    } while (nombreAleatoire == dernier);

    motAffiche = motADeviner.replace(/[A-Z]/g, "_");
    motCacher.textContent = motsPendu[nombreAleatoire];

    // motCache.replace("_");
    dernier = nombreAleatoire;
  });
}

initialiserJeu();

// ******* detecter le click sur une lettre

let boutonsClavier = document.querySelectorAll(".keyboard button");
let btn = document.querySelectorAll(".lettre");

boutonsClavier.forEach(function (button) {
  button.addEventListener("click", function () {
    button.style.backgroundColor = "pink";

    const letter = motCacher;
    if (motCache.includes(letter) && !motCache.includes(letter)) {
      // Enable the button
      button.disabled = true;
      button.style.backgroundColor = "red";
    } else {
      // Disable the button
      button.disabled = false;
      button.style.backgroundColor = "gray";
    }
  });
});
