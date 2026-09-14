const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#primary-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

document.querySelector('.inquiry-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const note = event.currentTarget.querySelector('.form-note');
  if (note) note.textContent = 'Thank you — this concept form is ready to connect to an approved WordPress form service.';
});
