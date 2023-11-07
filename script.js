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
let reste = 6;

resteElement.style.padding = "20px";
resteElement.style.paddingLeft = "30px";
resteElement.textContent = "il vous reste " + reste + " essais";

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
let marguerite = document.querySelector("#marguerite");

boutonsClavier.forEach(function (button) {
  button.addEventListener("click", function () {
    const letter = button.textContent;

    if (motDecoupe.includes(letter)) {
      // bonne lettre trouvé par le joueur (on affiche la lettre)
      button.enable = true;
      button.style.backgroundColor = "green";
      motDecoupe.forEach((lettre, index) => {
        if (lettre == letter) {
          motCacher.children[index].textContent = lettre;
        }
      });
    } else {
      //********* mauvaise lettre trouvé par le joueur (on desactive le bouton pour ne pas pouvoir cliquer dessus une deuxieme fois (on change la couleur du bouton)
      button.disabled = true;
      button.style.backgroundColor = "gray";
      resteElement.textContent = reste;
      reste--;

      // ****** Si le joueur perd on affiche le mot, on desactive les boutons du clavier et on affiche l'image.
      if (reste == 5) {
        imagePendu1.style.backgroundImage = "url('images/marguerite1.png')";
        imagePendu1.style.backgroundRepeat = "no-repeat";
        imagePendu1.style.backgroundSize = "cover";
        imagePendu1.style.transition = "all 1s";
        imagePendu1.style.backgroundPosition = "center";
        resteElement.textContent = "il vous reste " + reste + " essais";
      } else if (reste == 4) {
        imagePendu2.style.backgroundImage = "url('images/marguerite2.png')";
        imagePendu2.style.backgroundRepeat = "no-repeat";
        imagePendu2.style.backgroundSize = "cover";
        imagePendu2.style.transition = "all 1s";
        resteElement.textContent = "il vous reste " + reste + " essais";
      } else if (reste == 3) {
        imagePendu3.style.backgroundImage = "url('images/marguerite3.png')";
        imagePendu3.style.backgroundRepeat = "no-repeat";
        imagePendu3.style.backgroundSize = "cover";
        imagePendu3.style.transition = "all 1s";
        resteElement.textContent = "il vous reste " + reste + " essais";
      } else if (reste == 2) {
        imagePendu4.style.backgroundImage = "url('images/marguerite4.png')";
        imagePendu4.style.backgroundRepeat = "no-repeat";
        imagePendu4.style.backgroundSize = "cover";
        imagePendu4.style.transition = "all 1s";
        resteElement.textContent = "il vous reste " + reste + " essais";
      } else if (reste == 1) {
        imagePendu5.style.backgroundImage = "url('images/marguerite5.png')";
        imagePendu5.style.backgroundRepeat = "no-repeat";
        imagePendu5.style.backgroundSize = "cover";
        imagePendu5.style.transition = "all 1s";
        resteElement.textContent = "il vous reste " + reste + " essais";
      } else if (reste == 0) {
        imagePendu6.style.backgroundImage = "url('images/marguerite6.png')";
        imagePendu6.style.backgroundRepeat = "no-repeat";
        imagePendu6.style.backgroundSize = "cover";
        imagePendu6.style.transition = "all 1s";
        resteElement.textContent = "il vous reste " + reste + " essais";
      } else if (reste == -1) {
        h1.textContent = " PERDU ! Le mot était " + motADeviner + " !";
        boutonsClavier.forEach((button) => {
          button.disabled = true;
          h1.style.color = "#CE5A67";
          imagePendu7.style.backgroundImage = "url('images/marguerite8.png')";
          //   imagePendu7.style.transition = "all 1s";
          resteElement.textContent = "Dommage !";
        });
      }

      //   else if (reste == -1) {
      //     confirm("Le mot est " + motADeviner + " Voulez-vous rejouer ?")
      //       ? location.reload()
      //       : alert("Bye !");
      //   }
    }

    // ************************* Check si le joueur a gagné (si il ne reste plus de _ dans le mot caché).

    let gagne = true;

    for (let i = 0; i < motCacher.children.length; i++) {
      if (motCacher.children[i].textContent == " _") {
        gagne = false;
        break;
      }
    }
    if (gagne) {
      h1.textContent = "Vous avez gagné !";
      boutonsClavier.forEach((button) => {
        button.disabled = true;
      });
      boutonsClavier.disabled = true;
      h1.style.color = "#186F65";
      imageWin.style.backgroundImage = "url('images/penduWin.png')";
      imageWin.style.backgroundPosition = "center";
      //   imageWin.style.transition = "all 2s";
      imageWin.style.backgroundSize = "55%";
      imageWin.style.backgroundRepeat = "no-repeat";
      imageWin.style.backgroundSize = "cover";
    }

    // *************************** Proposer un mot au joueur et verifier si le mot proposé est le bon.

    let verifier = document.querySelector("#verifier");
    verifier.addEventListener("click", function () {
      if (prompt("Entrez un mot").toUpperCase() == motADeviner) {
        h1.textContent = "Vous avez gagné !";
        verifier.disabled = true;
        verifier.style.backgroundColor = "gray";
        h1.style.color = "#186F65";
        imageWin.style.backgroundImage = "url('images/penduWin.png')";
        imageWin.style.backgroundSize = "cover";
        imageWin.style.backgroundPosition = "center";
        imageWin.style.transition = "all 2s";
      } else {
        h1.textContent = "Vous avez perdu !";
        verifier.disabled = true;
        verifier.style.backgroundColor = "gray";
        h1.style.color = "#FA7070";
        imagePendu7.style.backgroundImage = "url('images/marguerite8.png')";
        imagePendu7.style.transition = "all 1s";
        resteElement.textContent = "Dommage !";
      }
    });

    // ******* détecte le click sur le bouton rejouer pour relancer une partie avec un nouveau mot aleatoire.

    restart.addEventListener("click", () => {
      location.reload();
    });
  });
});
