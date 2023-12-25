const paragraph = document.getElementById('text-container');
    const originalText = paragraph.textContent;
    let currentIndex = 0;

    function displayText() {
      if (currentIndex < originalText.length) {
        paragraph.textContent = originalText.substr(0, currentIndex + 1);
        currentIndex++;
        setTimeout(displayText, 100); // Adjust the delay between characters (in milliseconds) as desired
      }
    }

    displayText();


      var text = document.getElementById("text").textContent;
      document.getElementById("text").textContent = "";

      var indexx = 0;
      var interval = setInterval(function () {
        document.getElementById("text").textContent += text[indexx];
        indexx++;
        if (indexx >= text.length) {
          clearInterval(interval);
        }
      }, 50);

      var lot = document.getElementById("birth").textContent;

      var indexx = 0;
      var interval = setInterval(function () {
        document.getElementById("birth").textContent += lot[indexx];
        indexx++;
        if (indexx >= lot.length) {
          clearInterval(interval);
        }
      }, 50);