document.addEventListener("DOMContentLoaded", function() {
    const body = document.querySelector("body");

    const background = document.querySelector("#background");

    let startColor = "rgb(255, 255, 255)";
    let endColor = "rgb(100, 149, 237)";
    
    background.style.background = `linear-gradient(to right, ${startColor}, ${endColor})`;
    
    setInterval(() => {
      startColor = endColor;
      endColor = getRandomColor();
      background.style.background = `linear-gradient(to right, ${startColor}, ${endColor})`;
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