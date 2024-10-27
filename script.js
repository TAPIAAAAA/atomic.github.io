const question = document.getElementById("question");
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const sadCatImage = document.getElementById("sadCatImage");
const gif = document.getElementById("thankYouMessage");
const mainContent = document.getElementById("mainContent");

const apologies = [
  "Te quiero mucho, perdóname",
  "Rocío, te amo",
  "Perdóname, no fue mi intención",
  "Eres mi todo, por favor",
  "Me haces mucha falta",
  "Lamento todo, en serio",
  "No puedo sin ti",
  "Eres lo mejor de mi vida",
  "Cometí un error, lo siento",
  "Vuelve, por favor",
  "Estoy aquí para ti",
  "Siempre en mi corazón",
  "Perdón por hacerte daño",
  "Nunca quise lastimarte",
  "Eres lo mejor de mi vida",
  "Lo siento, Rocío"
];

const sadCatImages = ["atomic.jpg", "atomic2.jpg", "atomic3.jpg", "atomic4.jpg"];
let apologyIndex = 0;
let sadCatIndex = 0;
let sizeFactor = 1;

noButton.addEventListener("click", () => {
  sizeFactor += 0.1;
  yesButton.style.transform = `scale(${sizeFactor})`;
  question.textContent = apologies[apologyIndex];
  apologyIndex = (apologyIndex + 1) % apologies.length;

  // Cambiar la imagen del gato triste
  sadCatIndex = (sadCatIndex + 1) % sadCatImages.length;
  sadCatImage.src = sadCatImages[sadCatIndex];
});

yesButton.addEventListener("click", () => {
  mainContent.classList.add("hidden");
  gif.classList.remove("hidden");
});
