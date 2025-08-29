// Marca de carga
window.addEventListener('load', () => {
  document.body.classList.add('is-loaded');
});

// Año dinámico
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
reveals.forEach(el => io.observe(el));

// Preferencia de reduce motion en video
const mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)');
const heroVideo = document.querySelector('.hero__media');
if (mqReduce.matches && heroVideo && heroVideo.tagName === 'VIDEO') {
  heroVideo.removeAttribute('autoplay');
  heroVideo.pause();
}

