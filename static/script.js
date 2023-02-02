document.addEventListener("DOMContentLoaded", function() {

    var button = document.getElementById("myBtn");
  
    button.addEventListener("click", function() {
      // Make an API call to your backend

      fetch(`https://random-gpt-prompts.herokuapp.com/`)
        .then(response => response.json())
        .then(data => {
          // Update the text fields with the purpose and prompt
            console.log(data.message[0])
            console.log(data.message[1])


          document.getElementById("purpose").innerHTML = data.message[0];
          document.getElementById("prompt").innerHTML = data.message[1];
          document.getElementById("copyBtn").style.display = "inline-block";

          document.getElementById("copyBtn").classList.remove("success");
          document.getElementById("main").style.display = "block";
          document.getElementById("main").style.display = "block";
          //console.log("Test")
        });
    });

    const copyBtn = document.getElementById("copyBtn");
    const prompt = document.getElementById("prompt");

    copyBtn.addEventListener("click", function() {

        // Create a hidden textarea element
        const textArea = document.createElement("textarea");
        textArea.value = prompt.innerText;
        document.body.appendChild(textArea);

        // Select the text in the textarea
        textArea.select();

        // Copy the text to the clipboard
        document.execCommand("copy");

        // Remove the textarea element
        document.body.removeChild(textArea);
    });

    document.querySelector("#copyBtn").addEventListener("click", function() {
        // your code to copy text to clipboard
        this.classList.add("success");
      });
    
  });