const siteNav = document.querySelector('.page-header .site-nav');
const navMenu = document.querySelector('.page-header .nav-menu');
const burgerHeader = document.querySelector('.burger-header');

const burgerOpener = document.querySelector('.burger-opener');

let isOpen = false;
function turnIntoBurger(iconName) {
  siteNav.classList.toggle('site-nav-burger');
  navMenu.classList.toggle('menu');
  navMenu.classList.toggle('nav-menu');
  navMenu.classList.toggle('nav-menu-burger');
  burgerOpener.children[0].setAttribute('src', `./images/icon-${iconName}.svg`);
  isOpen = !isOpen;
}

burgerOpener.onclick = () =>
  isOpen ? turnIntoBurger('hamburger') : turnIntoBurger('close');
