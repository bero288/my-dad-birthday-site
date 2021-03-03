const SVG = document.querySelector(".logo");
const CAKE = document.querySelector(".cake-container");
const LAST_LETTER = document.querySelector(".logo .last-letter");
const BALLONS = document.querySelector(".ballons");
const SOUND_1 = document.querySelector(".fire-sound");
const SOUND_2 = document.querySelector(".song");
LAST_LETTER.addEventListener("animationend", () => {
  Swal.fire("start?", "there will be a sound!", "question")
    .then(() => {
      SOUND_1.play();
    })
    .then(() => {
      BALLONS.classList.add("pop-up");
    })
    .then(() => {
      SVG.classList.add("ended");
    })
    .then(() => {
      setTimeout(() => {
        CAKE.classList.add("cake-anime");
      }, 2000);
    })
    .then(() => {
      setTimeout(() => {
        SOUND_2.play();
      }, 2000);
    });
});
