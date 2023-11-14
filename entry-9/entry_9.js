window.onload = () => {
  const grid = document.querySelector('.grid');
  const items = Array.from(document.querySelectorAll('.grid-item'));

  setInterval(() => {
    shuffleArray(items);
    items.forEach(item => grid.appendChild(item));
  }, 5000); // 5 seconds (5000 milliseconds)

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
};
