const texts = [
    'Did you know that your smile makes my heart bloom?❤️‍🩹❤️‍🩹❤️‍🩹 Did you know that your fragrance makes my heart skip a beat?🤭🤭🤭💞 It is true!😍😍 I could send you a bunch of beautiful flowers🌹🌹 for your birthday but they are not even close to your level of beauty❤️‍🔥❤️‍🔥. Have a wonderful birthday, my sweetheart 🥰🥰🥂💫💋💋💋 O🌹M🌹O🌹L🌹A🌹B🌹A🌹K🌹E ♥️C 🌹A 🌹R 🌹E 🌹S',
    'Wishing u 12  months of🥰 happiness;52 weeks of fun, 365 days of laughter😁.8760 hours of good luck,525600 minutes of joy ; 31536000 seconds of success, crank the🎤 tunes, dance and shake💃, light the candles,cut the cake🎂.make it a day, that is simply Great!!! Happy B"Day 💖🥰♥️FROM ESTHER 🥰',
    'In soft gleaming of stars..😍😍🥰May all your dreams💝💞 come true,May evry star of every night bring lots of love and joy to you 🥰HAPPY BIRTHDAY TO YOU BABE 💕❣️FROM NASROH 🥰❣️',
    '💦💎Flying in the plane of ambition,and land on the airport of success,🤲 good luck is💙 yours,wish is mine may your future always shine...✨with lot of blessings and love 💞~HAPPY BIRTHDAY TO🎊🎉🍻🎂 YOU~ BABE🫂❣️ (From HANNY B)',
    '"Happy Birthday!💕💕 Wishing you a day filled with joy, laughter😃😃, and lots of love💖💖. You mean the world to me, and I am grateful to have you as my friend. Cheers to another amazing year ahead! 🎉🎂" From tolulope',
    'Happy birthday to the most incredible friend in the world💕! May your day be filled with laughter, good times, and unforgettable moments. You deserve all the happiness that comes your way. Cheers to another year of amazing memories together! 🎉🎈🎂'
  ];

  // Function to display text with a typewriter effect
  function displayTextWithTypewriterEffect(text, element, index = 0) {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(() => displayTextWithTypewriterEffect(text, element, index), 50);
    } else {
      // Set timeout to start displaying the next text after 5 seconds
      setTimeout(() => displayNextText(), 5000);
    }
  }

  // Function to display texts with a typewriter effect and a 5-second delay after completion
  function displayNextText() {
    if (index < texts.length) {
      textContainer.textContent = ''; // Clear previous text
      displayTextWithTypewriterEffect(texts[index], textContainer);
      index++;
    }
  }

  // Initial setup
  let index = 0;
  const textContainer = document.getElementById('textContainer');

  // Start the text display
  displayTextWithTypewriterEffect(texts[index], textContainer);








  
 