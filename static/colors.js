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

// transition the color change over a period of time
setInterval(function() {
    const color = getRandomColor();
    body.style.backgroundColor = color;
  }, 2000);
});