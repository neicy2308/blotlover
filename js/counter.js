// Дата начала отношений хранится в одной константе.
const RELATIONSHIP_START = new Date('2024-07-10T00:00:00');

const getTimeParts = (targetTime) => {
  const now = new Date();
  const diff = now.getTime() - targetTime.getTime();

  if (diff <= 0) {
    return { years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const totalSeconds = Math.floor(diff / 1000);
  const seconds = totalSeconds % 60;
  const totalMinutes = Math.floor(totalSeconds / 60);
  const minutes = totalMinutes % 60;
  const totalHours = Math.floor(totalMinutes / 60);
  const hours = totalHours % 24;
  const totalDays = Math.floor(totalHours / 24);

  let years = now.getFullYear() - targetTime.getFullYear();
  let months = now.getMonth() - targetTime.getMonth();
  let days = now.getDate() - targetTime.getDate();

  if (days < 0) {
    months -= 1;
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return { years, months, days, hours, minutes, seconds };
};

export const initCounter = () => {
  const elements = {
    years: document.querySelector('#counterYears'),
    months: document.querySelector('#counterMonths'),
    days: document.querySelector('#counterDays'),
    hours: document.querySelector('#counterHours'),
    minutes: document.querySelector('#counterMinutes'),
    seconds: document.querySelector('#counterSeconds')
  };

  const updateCounter = () => {
    const parts = getTimeParts(RELATIONSHIP_START);
    elements.years.textContent = String(parts.years).padStart(2, '0');
    elements.months.textContent = String(parts.months).padStart(2, '0');
    elements.days.textContent = String(parts.days).padStart(2, '0');
    elements.hours.textContent = String(parts.hours).padStart(2, '0');
    elements.minutes.textContent = String(parts.minutes).padStart(2, '0');
    elements.seconds.textContent = String(parts.seconds).padStart(2, '0');
  };

  updateCounter();
  window.setInterval(updateCounter, 1000);
};
