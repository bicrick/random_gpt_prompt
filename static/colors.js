document.addEventListener("DOMContentLoaded", function() {
    const body = document.querySelector("body");

// define an array of colors
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

let index = 0;

// create a function to update the background color
const updateColor = () => {
  body.style.background = colors[index];
  index = (index + 1) % colors.length;
};

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function getNegativeColor(color) {
    const r = (255 - parseInt(color.substring(1, 3), 16)).toString(16).padStart(2, '0');
    const g = (255 - parseInt(color.substring(3, 5), 16)).toString(16).padStart(2, '0');
    const b = (255 - parseInt(color.substring(5, 7), 16)).toString(16).padStart(2, '0');
    return `#${r}${g}${b}`;
}

// transition the color change over a period of time
setInterval(function() {
    const color = getRandomColor();
    body.style.backgroundColor = color;
    setTimeout(() => {
        body.style.backgroundColor = getNegativeColor(color);
      }, 1000);
    }, 2000);
});