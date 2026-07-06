import { initCounter } from './counter.js';
import { initTimeline } from './timeline.js';
import { initGallery } from './gallery.js';
import { initReasons } from './reasons.js';
import { initHeart } from './heart.js';
import { initMusic } from './music.js';
import { initFinal } from './final.js';
import { initNav } from './nav.js';

// Базовая инициализация всего приложения.
const initRevealAnimations = () => {
  const revealItems = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    revealItems.forEach((item) => item.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  revealItems.forEach((item) => observer.observe(item));
};

const initParticles = () => {
  const container = document.querySelector('#particles');
  if (!container) return;

  const particleCount = 34;
  const particles = [];

  for (let index = 0; index < particleCount; index += 1) {
    const particle = document.createElement('span');
    particle.className = 'particle';
    particle.style.width = `${Math.random() * 8 + 3}px`;
    particle.style.height = particle.style.width;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.opacity = `${0.2 + Math.random() * 0.6}`;
    particle.style.transform = `translate3d(0, 0, 0)`;
    particle.dataset.speed = `${0.5 + Math.random() * 1.4}`;
    particle.dataset.offset = `${Math.random() * 100}`;
    container.appendChild(particle);
    particles.push(particle);
  }

  let lastTime = 0;
  const tick = (time) => {
    const delta = (time - lastTime) / 1000 || 0.016;
    lastTime = time;

    particles.forEach((particle, index) => {
      const current = Number(particle.dataset.offset || 0);
      const next = current + delta * Number(particle.dataset.speed || 1);
      particle.dataset.offset = next;
      particle.style.transform = `translate3d(${Math.sin(next) * 20}px, ${Math.cos(next) * 18}px, 0)`;
      if (index % 3 === 0) {
        particle.style.opacity = `${0.16 + Math.sin(next / 2) * 0.25 + 0.1}`;
      }
    });

    requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
};

const initParallax = () => {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  const move = () => {
    const y = window.scrollY * 0.12;
    hero.style.setProperty('--hero-shift', `${y}px`);
  };

  window.addEventListener('scroll', move, { passive: true });
  move();
};

const initAnniversaryEasterEgg = () => {
  const startDate = new Date('2024-07-07T00:00:00');
  const today = new Date();

  if (today.getMonth() === startDate.getMonth() && today.getDate() === startDate.getDate()) {
    const heart = document.createElement('div');
    heart.className = 'celebration-heart';
    heart.textContent = '💖';
    document.body.appendChild(heart);
    window.setTimeout(() => heart.remove(), 2400);
  }
};

const initApp = () => {
  initCounter();
  initTimeline();
  initGallery();
  initReasons();
  initHeart();
  initMusic();
  initFinal();
  initNav();
  initRevealAnimations();
  initParticles();
  initParallax();
  initAnniversaryEasterEgg();
};

document.addEventListener('DOMContentLoaded', initApp);
