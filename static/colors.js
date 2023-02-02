document.addEventListener("DOMContentLoaded", function() {
    let currentColor = "";

// Define an array of possible colors
const colors = ["#f5f5f5", "#f5f5dc", "#f5f5b1", "#f5f58f", "#f5f569"];

// Function to change the background color
function changeColor() {
  // Get a random color from the array
  let newColor = colors[Math.floor(Math.random() * colors.length)];
  
  // Check if the new color is the same as the current color
  while (newColor === currentColor) {
    newColor = colors[Math.floor(Math.random() * colors.length)];
  }
  
  // Update the current color
  currentColor = newColor;
  
  // Change the background color of the page
  document.body.style.backgroundColor = newColor;
}

// Call the changeColor function every 5 seconds
setInterval(changeColor, 5000);
  });