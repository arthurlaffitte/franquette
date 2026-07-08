// Menu mobile
const burger = document.querySelector('.burger');
const navList = document.querySelector('nav ul');

if (burger && navList) {
  burger.addEventListener('click', () => {
    navList.classList.toggle('open');
  });

  navList.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => navList.classList.remove('open'));
  });
}
