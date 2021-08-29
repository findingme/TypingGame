'use strict'

{
  let word;
  let location = 0;
  let startTime;
  let isPlaying = false;
  const target = document.getElementById('target');
  const words = [
    'red',
    'blue',
    'pink',
  ];
  
  function setWord() {
    word = words.splice(Math.floor(Math.random() * words.length), 1)[0];
    target.textContent = word;
    location = 0;
  }

  document.addEventListener('click', () => {
    if (isPlaying === true) {
      return;
    }
    isPlaying = true;
    startTime = Date.now();
    setWord();
  });
  
  document.addEventListener('keydown', e => {
    if (e.key !== word[location]) {
      return;
    }
    location++;
    target.textContent = '_'.repeat(location) + word.substring(location);

    if (location === word.length) {
      if (words.length === 0) {
        const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
        const result = document.getElementById('result');
        result.textContent = `Finished! ${elapsedTime} seconds!`;
        return;
      }
      setWord();
    }
  });
}