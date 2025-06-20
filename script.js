document.addEventListener("DOMContentLoaded", () => {
  const catImage = document.getElementById("catImage");
  const keyMap = {
    '1': { instrument: 'piano', sound: 'p1.mp3', image: 'cat_piano.jpg' },
    '2': { instrument: 'piano', sound: 'p2.mp3', image: 'cat_piano.jpg' },
    '3': { instrument: 'piano', sound: 'p3.mp3', image: 'cat_piano.jpg' },
    '4': { instrument: 'piano', sound: 'p4.mp3', image: 'cat_piano.jpg' },
    '5': { instrument: 'piano', sound: 'p5.mp3', image: 'cat_piano.jpg' },
    '6': { instrument: 'piano', sound: 'p6.mp3', image: 'cat_piano.jpg' },
    '7': { instrument: 'piano', sound: 'p7.mp3', image: 'cat_piano.jpg' },
    '8': { instrument: 'piano', sound: 'p8.mp3', image: 'cat_piano.jpg' },
    '9': { instrument: 'piano', sound: 'p9.mp3', image: 'cat_piano.jpg' },
    '0': { instrument: 'piano', sound: 'p0.mp3', image: 'cat_piano.jpg' },
    'A': { instrument: 'bongo', sound: 'bongo0.mp3', image: 'cat_bongo.jpg' },
    'D': { instrument: 'bongo', sound: 'bongo1.mp3', image: 'cat_bongo.jpg' },
    'C': { instrument: 'cymbal', sound: 'cymbal.mp3', image: 'cat_cymbal.jpg' },
    'F': { instrument: 'cowbell', sound: 'cowbell.mp3', image: 'cat_cowbell.jpg' },
    ' ': { instrument: 'meow', sound: 'meow.mp3', image: 'cat_meow.jpg' }
  };

  function playSoundAndUpdateCat(key) {
    const upperKey = key.toUpperCase();
    const mapping = keyMap[upperKey] || keyMap[key];
    if (mapping) {
      catImage.src = mapping.image;
      const audio = new Audio(`sounds/${mapping.instrument}/${mapping.sound}`);
      audio.play();
    }
  }

  // Mouse click
  document.querySelectorAll('.key-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      playSoundAndUpdateCat(btn.dataset.key);
      btn.classList.add('active');
      setTimeout(() => btn.classList.remove('active'), 150);
    });
  });

  // Keyboard press
  document.addEventListener("keydown", (e) => {
    let key = e.key;
    if (key === ' ') key = ' ';
    if (keyMap[key.toUpperCase()] || keyMap[key]) {
      playSoundAndUpdateCat(key);
      // Highlight button
      const btn = document.querySelector(`.key-btn[data-key="${key.toUpperCase()}"], .key-btn[data-key="${key}"]`);
      if (btn) {
        btn.classList.add('active');
        setTimeout(() => btn.classList.remove('active'), 150);
      }
    }
  });
});