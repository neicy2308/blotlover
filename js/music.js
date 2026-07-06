export const initMusic = () => {
  const button = document.querySelector('#musicToggle');
  const collapseButton = document.querySelector('#collapseMusic');
  const card = document.querySelector('.music-card');
  const player = document.querySelector('#musicPlayer');
  const label = document.querySelector('#musicLabel');
  const audio = document.querySelector('#audioTrack');

  if (!button || !collapseButton || !card || !player || !label || !audio) return;

  const trackPath = './music/let s lay in hugs - You re Not Alone.mp3';
  audio.src = trackPath;
  audio.volume = 0.75;
  audio.preload = 'metadata';
  label.textContent = 'Трек: let s lay in hugs - You re Not Alone';

  let isPlaying = false;

  const updateButton = () => {
    button.textContent = isPlaying ? 'Пауза' : 'Включить нашу песню';
    player.style.opacity = isPlaying ? '1' : '0.75';
  };

  const togglePlayer = () => {
    if (audio.paused) {
      audio.play().catch(() => {
        label.textContent = 'Нажми ещё раз, чтобы разрешить воспроизведение.';
      });
      isPlaying = true;
    } else {
      audio.pause();
      isPlaying = false;
    }
    updateButton();
  };

  audio.addEventListener('ended', () => {
    isPlaying = false;
    updateButton();
  });

  button.addEventListener('click', togglePlayer);
  collapseButton.addEventListener('click', () => {
    card.classList.toggle('is-collapsed');
  });
};
