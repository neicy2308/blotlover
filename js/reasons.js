const reasons = [
  'Ты умеешь делать мой день светлее просто своим присутствием.',
  'Ты вдохновляешь меня быть лучше каждый день.',
  'Твоя улыбка — моя любимая награда.',
  'Ты делаешь даже самые простые моменты особенными.',
  'Ты умеешь слушать так, будто это самое важное в мире.',
  'Ты — моя тихая гавань и моя радость.',
  'Ты делаешь жизнь мягче, теплее и красивее.',
  'Ты умеешь согревать меня без слов.',
  'Ты — мой любимый человек во всех смыслах.',
  'Твоя нежность — это то, что я храню в сердце.',
  'Ты даришь мне спокойствие и счастье одновременно.'
];

let visibleCount = 4;

export const initReasons = () => {
  const grid = document.querySelector('#reasonsGrid');
  const button = document.querySelector('#showMoreReasons');

  if (!grid || !button) return;

  const shuffle = (items) => [...items].sort(() => Math.random() - 0.5);
  const displayReasons = shuffle(reasons);

  const renderReasons = () => {
    grid.innerHTML = displayReasons
      .slice(0, visibleCount)
      .map(
        (reason, index) => `
          <article class="reason-card reveal" style="transition-delay:${index * 70}ms">
            <div class="reason-card__number">${index + 1}</div>
            <p>${reason}</p>
          </article>
        `
      )
      .join('');

    requestAnimationFrame(() => {
      grid.querySelectorAll('.reason-card').forEach((card) => {
        card.classList.add('is-visible');
      });
    });
  };

  renderReasons();

  button.addEventListener('click', () => {
    visibleCount = Math.min(visibleCount + 4, reasons.length);
    renderReasons();

    if (visibleCount >= reasons.length) {
      button.textContent = 'Далеко не все причины показаны';
      button.disabled = true;
    }
  });
};
