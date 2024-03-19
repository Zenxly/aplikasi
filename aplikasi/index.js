// toggle active menu
const navMenu = document.querySelector('.nav-menu');
const navMenu2 = document.querySelector('.nav-menu2');
const navMenu3 = document.querySelector('.nav-menu3');
document.querySelector('.nav-menu').onclick = () => {
  navMenu.classList.toggle('focus');
};

// document.querySelector('.nav-menu2').onclick = () => {
//   navMenu2.classList.toggle('focus');
// }

const cardMenu = document.querySelector('.menu-card');
document.querySelector('.menu-card').onclick = () => {
  cardMenu.classList.toggle('active');
};
