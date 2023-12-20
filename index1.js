 // Array of texts to display with typewriter effect
 const texts = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.  Excepturi, cvgnon? ' + 'bankole',
      'Hello, World!ife',
      'This is a sample text.',
      'You can add more texts to the array.',
      'Each text will be displayed with a typewriter effect.',
      'Enjoy!',
    ];

    //Function to display text with a typewriter effect

    function displayTextWithTypewriterEffect(text, element, index = 0) {
      if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(() => displayTextWithTypewriterEffect(text, element, index), 50);
      }
    }

    // Function to display texts with a typewriter effect and 5-second interval
    function displayTextsWithInterval() {
      let index = 0;
      const textContainer = document.getElementById('textContainer');

      function displayNextText() {
        textContainer.textContent = ''; // Clear previous text
        displayTextWithTypewriterEffect(texts[index], textContainer);
        index = (index + 1) % texts.length;
      }

      // Initial display
      displayNextText();

      // Set interval to display next text every 10 seconds
      setInterval(displayNextText, 10000);
    }

    // Call the function to start text display
    displayTextsWithInterval();



    // for inner-main-2
    var text = document.getElementById("text").textContent;
  document.getElementById("text").textContent = "";

  var index = 0;
  var interval = setInterval(function () {
    document.getElementById("text").textContent += text[index];
    index++;
    if (index >= text.length) {
      clearInterval(interval);
    }
  }, 50);

  var lot = document.getElementById("birth").textContent;

  var index = 0;
  var interval = setInterval(function () {
    document.getElementById("birth").textContent += lot[index];
    index++;
    if (index >= lot.length) {
      clearInterval(interval);
    }
  }, 50);