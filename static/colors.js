document.addEventListener("DOMContentLoaded", function() {
    const body = document.querySelector("body");

let startColor = 'white';
let endColor = 'gray';

body.style.background = `linear-gradient(to right, ${startColor}, ${endColor})`;

setInterval(() => {
  startColor = endColor;
  endColor = getRandomGray();
  body.style.background = `linear-gradient(to right, ${startColor}, ${endColor})`;
}, 5000);

function getRandomGray() {
    let gray = Math.floor(Math.random() * 256).toString(16);
    gray = gray.length === 1 ? "0" + gray : gray;
    return "#" + gray + gray + gray;
  }
});