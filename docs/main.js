// Pequeñas interacciones
const nav = document.querySelector('.nav');
const menuBtn = document.getElementById('menuBtn');

menuBtn?.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Desplazamiento suave para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const targetId = a.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
      nav.classList.remove('open');
    }
  });
});
