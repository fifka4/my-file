document.querySelector('.menu').classList.remove('theme-button');

let menu = document.querySelector('.menu');

menu.onclick = function () {
  menu.classList.toggle('menu-open');
  menu.classList.toggle('menu-close');
};