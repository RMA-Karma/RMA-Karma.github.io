const slides = [
  {
    image: "assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>"
  },
  {
    image: "assets/images/slideshow/slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
  },
  {
    image: "assets/images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>"
  },
  {
    image: "assets/images/slideshow/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>"
  }
];

/* Etape 2 // Event Listeners sur les flèches */

/* const flecheDroite = document.querySelector(".arrow_right")
flecheDroite.addEventListener("click", () => {
	console.log("click fleche droite")

}
) 

const flecheGauche = document.querySelector(".arrow_left")
flecheGauche.addEventListener("click", () => {
	console.log("click fleche gauche")
}
)

*/

/* Etape 3 // Bullet point du slider */

for (let i = 0; i < slides.length; i++) {
  const bulletPoint = "";
  const nouveauParagraphe = document.createElement("p");
  nouveauParagraphe.textContent = bulletPoint;
  let div = document.querySelector(".dots");
  div.appendChild(nouveauParagraphe);
  nouveauParagraphe.classList.add("dot");
  nouveauParagraphe.setAttribute("id", "photo" + i);
  if (i === 0) {
    nouveauParagraphe.classList.add("dot_selected");
  }
}

/* Etape 4 // faire défiler les images et les points */

const imgSlides = slides.map((slides) => slides.image);
const textSlides = slides.map((slides) => slides.tagLine);
let i = 0;
const flecheDroite = document.querySelector(".arrow_right");
flecheDroite.addEventListener("click", () => {
  //console.log("click fleche droite")
  let currentPoint = document.querySelector("#photo" + i);
  currentPoint.classList.remove("dot_selected");
  i++;
  // Etape 5 // répéter en boucle
  if (i >= slides.length) {
    i = 0;
  }

  let srcImg = document.querySelector(".banner-img");
  srcImg.setAttribute("src", imgSlides[i]);
  document.querySelector("#banner p").innerHTML = "";
  let txtImag = document.querySelector("#banner p");
  txtImag.innerHTML = textSlides[i];
  let nextPoint = document.querySelector("#photo" + i);
  nextPoint.classList.add("dot_selected");
});

const flecheGauche = document.querySelector(".arrow_left");
flecheGauche.addEventListener("click", () => {
  //console.log("click fleche gauche")
  let currentPoint = document.querySelector("#photo" + i);
  currentPoint.classList.remove("dot_selected");
  i--;
  // Etape 5 // répéter en boucle
  if (i < 0) {
    i = slides.length - 1;
  }
  let srcImg = document.querySelector(".banner-img");
  srcImg.setAttribute("src", imgSlides[i]);
  document.querySelector("#banner p").innerHTML = "";
  let txtImag = document.querySelector("#banner p");
  txtImag.innerHTML = textSlides[i];
  let previousPoint = document.querySelector("#photo" + i);
  previousPoint.classList.add("dot_selected");
});
