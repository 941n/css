const header = document.querySelector('header');

const footer = document.querySelector('footer');
const main = document.querySelector('main');

const alias = document.querySelector('#alias');

/* const observer = new IntersectionObserver(([entry]) => {
  if (!entry.isIntersecting) {
    alias.style.fontSize = '3rem';
  } else {
    alias.style.fontSize = '7rem';
  }
});

observer.observe(header); */

window.onscroll = () => {
  if (window.scrollY > header.offsetHeight + 100) {
    console.log(`Scrolled past header: ${window.scrollY}`);
    header.classList.add('scrolled');
  } else {
    console.log(`Scrolled past header: ${window.scrollY}`);
    header.classList.remove('scrolled');
  }
};
