const btnScrollToTop = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', e => {
  if (window.pageYOffset > document.documentElement.clientHeight) {
    btnScrollToTop.style.display = 'block';
  } else {
    btnScrollToTop.style.display = 'none';
  }
});
btnScrollToTop.addEventListener('click', e => {
  if (window.pageYOffset > 0) {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }
});
