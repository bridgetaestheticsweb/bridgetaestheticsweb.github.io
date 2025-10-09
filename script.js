// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  // Close when clicking a link (mobile)
  nav.addEventListener('click', e => {
    if (e.target.matches('a')) {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// Highlight active nav item based on current filename
const current = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('#site-nav a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === current) a.classList.add('active');
});

// Footer year
const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());


const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const close = document.querySelector('.close');

document.querySelectorAll('.gallery-item img').forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});

close.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

let currentSlide = 0;
const slides = document.querySelectorAll('.flipbook-slide');

function changeSlide(direction) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + direction + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

