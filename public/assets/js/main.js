/* DROPDOWN MOBILE / TOUCH */
document.addEventListener('DOMContentLoaded', () => {
  const dropdown = document.querySelector('.dropdown');
  const dropdownBtn = document.querySelector('.btn-cliente');

  if (dropdownBtn && dropdown) {
    dropdownBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('active');
      }
    });
  }
});

/* HERO CAROUSEL LOGIC */
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-btn-right');
const prevButton = document.querySelector('.carousel-btn-left');
const dotsNav = document.querySelector('.carousel-nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

// Organiza os slides lado a lado
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
};

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove('current-indicator');
  targetDot.classList.add('current-indicator');
};

// Seta direita
nextButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling || slides[0]; // Loop
  const currentDot = dotsNav.querySelector('.current-indicator');
  const nextDot = currentDot.nextElementSibling || dots[0];

  moveToSlide(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
});

// Seta esquerda
prevButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide');
  const prevSlide = currentSlide.previousElementSibling || slides[slides.length - 1]; // Loop
  const currentDot = dotsNav.querySelector('.current-indicator');
  const prevDot = currentDot.previousElementSibling || dots[dots.length - 1];

  moveToSlide(track, currentSlide, prevSlide);
  updateDots(currentDot, prevDot);
});

// Clique nos dots (indicadores)
dotsNav.addEventListener('click', e => {
  const targetDot = e.target.closest('button');
  if (!targetDot) return;

  const currentSlide = track.querySelector('.current-slide');
  const currentDot = dotsNav.querySelector('.current-indicator');
  const targetIndex = dots.findIndex(dot => dot === targetDot);
  const targetSlide = slides[targetIndex];

  moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
});

/* SCROLL REVEAL (IntersectionObserver) */
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15,
  rootMargin: "0px 0px -50px 0px"
});

revealElements.forEach(element => {
  revealObserver.observe(element);
});

/* CONTROLAR BARRA FIXA AO ROLAR */
const stickyBar = document.querySelector('.sticky-action-bar');

if (stickyBar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      stickyBar.classList.add('visible');
    } else {
      stickyBar.classList.remove('visible');
    }
  });
}