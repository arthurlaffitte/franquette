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

// Onglets de carte (café) : un clic par catégorie
document.querySelectorAll('.carte-tabs').forEach((tabs) => {
  tabs.addEventListener('click', (e) => {
    const b = e.target.closest('.chip');
    if (!b) return;
    tabs.querySelectorAll('.chip').forEach((x) => x.classList.toggle('active', x === b));
    const scope = tabs.closest('.container') || document;
    scope.querySelectorAll('.carte-pane').forEach((p) => p.classList.toggle('hidden-pane', p.dataset.pane !== b.dataset.carte));
  });
});
