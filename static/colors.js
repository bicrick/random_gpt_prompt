document.addEventListener("DOMContentLoaded", function() {
    const body = document.querySelector("body");

let startColor = 'white';
let endColor = '#0077be';

body.style.background = `linear-gradient(to right, ${startColor}, ${endColor})`;

setInterval(() => {
  startColor = endColor;
  endColor = white;
  body.style.background = `linear-gradient(to right, ${startColor}, ${endColor})`;
}, 5000);

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
});