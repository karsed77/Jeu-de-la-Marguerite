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

//******************************** */ Pour gnerer un mot aleatoire
function genererMot(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//******************************** */ Pour initialiser le jeu
let motCacher = document.querySelector(".motCacher");
let nombreAleatoire = 0;
let dernier = 0;
let motADeviner = motsPendu[genererMot(motsPendu.length)];
let motDecoupe = motADeviner.split("");
let motCache = "";
let motAffiche = "";
let restart = document.querySelector(".rejouer button");

function initialiserJeu() {
  //   restart.addEventListener("click", () => {
  //     do {
  //       nombreAleatoire = genererMot(motsPendu.length);
  //     } while (nombreAleatoire == dernier);

  //     motCacher.textContent = motsPendu[nombreAleatoire];
  //     motAffiche = motCacher.textContent;
  //     dernier = nombreAleatoire;
  //   });
  // }
  console.log(motADeviner);
  console.log(motDecoupe);
  motDecoupe.forEach((lettre) => {
    let span = document.createElement("span");
    span.className = "letter_word";
    span.textContent = " _";
    motCacher.appendChild(span);
  });

  dernier = nombreAleatoire;
  // });
}
initialiserJeu();

// ******* detecter le click sur une lettre

let boutonsClavier = document.querySelectorAll(".keyboard button");
let btn = document.querySelectorAll(".lettre");
let imagePendu1 = document.querySelector(".images");
let imagePendu2 = document.querySelector(".images");
let imagePendu3 = document.querySelector(".images");
let imagePendu4 = document.querySelector(".images");
let imagePendu5 = document.querySelector(".images");
let imagePendu6 = document.querySelector(".images");
let imagePendu7 = document.querySelector(".images");

boutonsClavier.forEach(function (button) {
  button.addEventListener("click", function () {
    const letter = button.textContent;
    if (motDecoupe.includes(letter)) {
      // Enable the button
      button.enable = false;
      button.style.backgroundColor = "green";
      motDecoupe.forEach((lettre, index) => {
        if (lettre == letter) {
          motCacher.children[index].textContent = lettre;
        }
      });
    } else {
      // Disable the button
      //   let guess = button.textContent.toLowerCase();
      //   button.style.opacity = 0;
      button.disabled = true;
      button.style.backgroundColor = "gray";
      resteElement.textContent = reste;
      reste--;

      if (reste == -1) {
        h1.textContent = "Vous avez perdu, le mot était " + motADeviner + " !";
        boutonsClavier.forEach((button) => {
          button.disabled = true;
        });
      }
      if (reste == 5) {
        imagePendu1.style.backgroundImage = "url('images/pendu0.png')";
        imagePendu1.style.backgroundRepeat = "no-repeat";
        imagePendu1.style.backgroundPosition = "center";
      } else if (reste == 4) {
        imagePendu2.style.backgroundImage = "url('images/pendu1.png')";
        imagePendu2.style.backgroundRepeat = "no-repeat";
      } else if (reste == 3) {
        imagePendu3.style.backgroundImage = "url('images/pendu2.png')";
        imagePendu3.style.backgroundRepeat = "no-repeat";
      } else if (reste == 2) {
        imagePendu4.style.backgroundImage = "url('images/pendu3.png')";
        imagePendu4.style.backgroundRepeat = "no-repeat";
      } else if (reste == 1) {
        imagePendu5.style.backgroundImage = "url('images/pendu4.png')";
        imagePendu5.style.backgroundRepeat = "no-repeat";
      } else if (reste == 0) {
        imagePendu6.style.backgroundImage = "url('images/pendu5.png')";
        imagePendu6.style.backgroundRepeat = "no-repeat";
      } else if (reste == -1) {
        confirm("Voulez-vous rejouer ?") ? location.reload() : alert("Bye !");
      }

      // Check si le joueur a gagné
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
          button.disable = true;
        });
      }
    }
  });

  // ******* detecter le click sur le bouton rejouer

  restart.addEventListener("click", () => {
    location.reload();
  });
});
