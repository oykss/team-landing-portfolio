const mobileMenu = document.querySelector('.mob-menu');
const openMenuBtn = document.querySelector('#header .js-open-menu');
const arrCloseBtn = document.querySelectorAll('.mob-menu [data-close="true"]');

openMenuBtn.addEventListener('click', openMenu);

function openMenu() {
  openMenuBtn.classList.toggle('is-active');
  mobileMenu.classList.toggle('is-open');
  if (mobileMenu.classList.contains('is-open')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }

  arrCloseBtn.forEach(e => {
    e.addEventListener('click', closeMenu);
  });
}

function closeMenu() {
  document.body.style.overflow = '';
  openMenuBtn.classList.remove('is-active');
  mobileMenu.classList.remove('is-open');
  openMenuBtn.addEventListener('click', openMenu);

  arrCloseBtn.forEach(e => {
    e.removeEventListener('click', closeMenu);
  });
}

window
  .matchMedia('(min-width: 768px)')
  .addEventListener('change', ({ matches }) => {
    if (matches) closeMenu();
  });
