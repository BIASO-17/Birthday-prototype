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
  var textToType = "Happy Birthday, Christianah OLADIGBOLU Adewumi!\nOn this special day, I want to celebrate the incredible person you are. Your presence brings so much joy and warmth to my life, and I feel incredibly fortunate to share each moment with you\nYour presence in my life is a gift, and with each passing day, I find new reasons to cherish you. You are the melody to my days, and today is a beautiful symphony in celebration of you. Your kindness, resilience make every day extraordinary.\nYou're not just a year older today; you're a year more amazing. Your kindness, your annoying laughter, and the way you make me smile uncontrollably are just a few of the countless reasons I love you. Today is all about you, and you deserve nothing but the absolute best. May this year bring you all the happiness, love, and success you deserve.\nAs you blow out the candles, know that my greatest wish for you is a life filled with the same happiness you brought into my life. Here's to another year of adventures, shared laughter, and growing even closer. Happy Birthday, my love!\nWith all my heart,Bankole Ifeoluwa.";

  // Call the typewriter function
  typeWriter(textToType, 0, function() {
    console.log('Typing animation complete.');
  });