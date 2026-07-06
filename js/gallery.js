const galleryImages = [
  './photos/1.jpg',
  './photos/2.jpg',
  './photos/3.jpg',
  './photos/4.jpg',
  './photos/5.jpg',
  './photos/6.jpg',
  './photos/7.jpg',
  './photos/8.jpg',
  './photos/9.jpg',
  './photos/10.jpg',
  './photos/11.jpg'
];

export const initGallery = () => {
  const grid = document.querySelector('#galleryGrid');
  const lightbox = document.querySelector('#lightbox');
  const lightboxImage = document.querySelector('#lightboxImage');
  const closeButton = document.querySelector('#lightboxClose');

  if (!grid || !lightbox || !lightboxImage || !closeButton) return;

  grid.innerHTML = galleryImages
    .map(
      (src, index) => `
        <button class="gallery-card reveal" data-index="${index}" style="transition-delay:${index * 80}ms">
          <img src="${src}" alt="Фотография ${index + 1}" />
        </button>
      `
    )
    .join('');

  const openLightbox = (src) => {
    lightboxImage.src = src;
    lightbox.classList.add('is-open');
    document.body.classList.add('modal-open');
    lightbox.setAttribute('aria-hidden', 'false');
  };

  const closeLightbox = () => {
    lightbox.classList.remove('is-open');
    document.body.classList.remove('modal-open');
    lightbox.setAttribute('aria-hidden', 'true');
  };

  grid.querySelectorAll('.gallery-card').forEach((card) => {
    card.addEventListener('click', () => {
      openLightbox(card.querySelector('img').src);
    });
  });

  closeButton.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeLightbox();
    }
  });
};
