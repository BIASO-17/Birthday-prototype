// Function to simulate the typewriter effect
function typeWriter(text, i, callback) {
    if (i < text.length) {
      document.getElementById('typewriter-text').innerHTML += text.charAt(i);
      i++;
      setTimeout(function() {
        typeWriter(text, i, callback);
      }, 50); // Adjust the typing speed here (in milliseconds)
    } else {
      callback();
    }
  }

  // Text to be displayed with typewriter effect
  var textToType = "My Dearest [Friends Name],On this magical day, as the world celebrates your birthday, I want to take a moment to express my heartfelt wishes and gratitude for having you in my life. Happy birthday, my dear friend! From the first day we crossed paths, it was evident that our friendship was destined to be something extraordinary. Your infectious laughter, your kind heart, and your unwavering support have touched my life in ways I cannot even begin to express. You bring so much light and positivity into my world, and for that, I am eternally grateful.Through the ups and downs, the laughter and tears, you have stood by my side with unwavering loyalty. Your presence has been a constant source of comfort and strength, reminding me that I am never alone. The memories we have created together are treasures I hold dear, and I cherish each and every moment we have shared.Your friendship has taught me the true meaning of love, compassion, and selflessness. You have a remarkable ability to see the beauty in others and bring out the best in them. Your kindness knows no bounds, and your generosity is unparalleled. You have made a profound impact on my life, and I am forever grateful for the love and care you have shown me. As we celebrate your special day, my wish for you is simple yet profound. May your path be filled with endless joy, boundless adventures, and remarkable achievements. May you continue to pursue your dreams with passion and determination, knowing that you have the unwavering support of those who love you.On this day, I want you to know how truly special you are to me. Your friendship has been a gift that I treasure beyond measure. Thank you for being the incredible person that you are, for bringing so much love and joy into my life, and for being there for me through thick and thin. Happy birthday, my dear friend! May this day be the beginning of a new chapter filled with laughter, love, and unforgettable memories. May you always find happiness in every step you take and may all your dreams come true.With all my love and warmest wishes, Your friend,Ife.";

  // Call the typewriter function
  typeWriter(textToType, 0, function() {
    console.log('Typing animation complete.');
  });