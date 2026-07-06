const messages = [
  'Ты — мой самый любимый человек на свете.',
  'С тобой даже тишина звучит как музыка.',
  'Я люблю тебя за твою нежность и силу.',
  'Ты — свет, который я выбираю снова и снова.',
  'С тобой мой мир становится мягче и ярче.'
];

export const initHeart = () => {
  const button = document.querySelector('#heartButton');
  const message = document.querySelector('#heartMessage');
  if (!button || !message) return;

  const usedMessages = new Set();
  let clickCount = 0;

  const showRandomMessage = () => {
    const available = messages.filter((item) => !usedMessages.has(item));
    const entry = available[Math.floor(Math.random() * available.length)] || messages[0];
    message.textContent = entry;
    usedMessages.add(entry);

    if (usedMessages.size === messages.length) {
      usedMessages.clear();
    }

    button.animate(
      [
        { transform: 'scale(1)' },
        { transform: 'scale(0.94)' },
        { transform: 'scale(1.04)' },
        { transform: 'scale(1)' }
      ],
      { duration: 380, easing: 'ease-out' }
    );
  };

  const createTinyHeart = () => {
    const heart = document.createElement('div');
    heart.className = 'tiny-heart';
    heart.textContent = '❤';
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.top = '80vh';
    heart.style.setProperty('--drift-x', `${(Math.random() - 0.5) * 220}px`);
    document.body.appendChild(heart);
    window.setTimeout(() => heart.remove(), 1800);
  };

  button.addEventListener('click', () => {
    clickCount += 1;
    showRandomMessage();
    createTinyHeart();

    if (clickCount >= 10) {
      for (let index = 0; index < 24; index += 1) {
        const heart = document.createElement('div');
        heart.className = 'tiny-heart';
        heart.textContent = '💗';
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.top = '0';
        heart.style.setProperty('--drift-x', `${(Math.random() - 0.5) * 280}px`);
        document.body.appendChild(heart);
        window.setTimeout(() => heart.remove(), 2200);
      }
      clickCount = 0;
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key.toLowerCase() === 'h') {
      const heart = document.createElement('div');
      heart.className = 'celebration-heart';
      heart.textContent = '❤';
      heart.style.left = `${Math.random() * 80 + 10}vw`;
      heart.style.top = `${Math.random() * 70 + 10}vh`;
      document.body.appendChild(heart);
      window.setTimeout(() => heart.remove(), 2000);
    }
  });
};
