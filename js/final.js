export const initFinal = () => {
  const button = document.querySelector('#finalButton');
  const overlay = document.querySelector('#finalOverlay');
  const step = document.querySelector('#overlayStep');
  const message = document.querySelector('#overlayMessage');
  const heart = document.querySelector('#overlayHeart');

  if (!button || !overlay || !step || !message || !heart) return;

  const launchConfetti = () => {
    for (let index = 0; index < 42; index += 1) {
      const piece = document.createElement('span');
      piece.className = 'confetti-piece';
      piece.style.left = `${Math.random() * 100}vw`;
      piece.style.top = '-10px';
      piece.style.background = ['#f472b6', '#fb7185', '#fbbf24', '#f8fafc'][Math.floor(Math.random() * 4)];
      piece.style.setProperty('--drift-x', `${(Math.random() - 0.5) * 280}px`);
      document.body.appendChild(piece);
      window.setTimeout(() => piece.remove(), 1900);
    }
  };

  button.addEventListener('click', () => {
    overlay.classList.add('is-visible');
    document.body.classList.add('modal-open');
    step.textContent = 'Year 2...';
    message.textContent = 'Loading...';
    heart.classList.remove('is-visible');

    const sequence = [
      () => {
        step.textContent = 'Year 2...';
        message.textContent = 'Loading...';
      },
      () => {
        heart.classList.add('is-visible');
        launchConfetti();
        step.textContent = 'Люблю тебя';
        message.textContent = '❤️';
      }
    ];

    sequence.forEach((callback, index) => {
      window.setTimeout(callback, 700 * (index + 1));
    });
  });
};
