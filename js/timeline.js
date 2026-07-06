const timelineItems = [
  {
    date: '01.05.2024',
    title: 'Встреча',
    description: 'Начало нашей истории — момент, после которого мир стал теплее.',
    place: 'Наше первое знакомство',
    image: './photos/history1.jpg'
  },
  {
    date: '06.07.2024',
    title: 'Первое путешествие',
    description: 'Мягкий вечер, новые ощущения и ощущение, что рядом — самый родной человек.',
    place: 'Деревня',
    image: './photos/history2.jpg'
  },
  {
    date: '10.07.2025',
    title: 'Первая годовщина',
    description: 'День, когда мы поняли, что любовь — это не только эмоции, но и привычка быть счастливыми рядом.',
    description: 'А я фотки не нашел :<'
  }
];

export const initTimeline = () => {
  const container = document.querySelector('#timeline');
  if (!container) return;

  container.innerHTML = timelineItems
    .map(
      (item, index) => `
        <article class="timeline-card reveal" style="transition-delay:${index * 120}ms">
          <div class="timeline-card__date">${item.date}</div>
          <h3>${item.title}</h3>
          <div class="timeline-card__meta">📍 ${item.place}</div>
          <p>${item.description}</p>
          <div class="timeline-card__image">
            <img src="${item.image}" alt="${item.title}" />
          </div>
        </article>
      `
    )
    .join('');
};
