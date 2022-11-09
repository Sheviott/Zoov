// Меню бургер
let iconMenu = document.querySelector('.icon-menu');
let menuBody = document.querySelector('.menu__body');
if (iconMenu) {
  iconMenu.onclick = function () {
    menuBody.classList.toggle('_active');
    iconMenu.classList.toggle('menu-open');
    document.body.classList.toggle('_lock');
  };
};

const linkmenu = document.querySelectorAll('.menu__link');
if (linkmenu.length > 0) {
  for (let index = 0; index < linkmenu.length; index++) {
    const elem = linkmenu[index];
    elem.addEventListener('click', function (e) {
      document.body.classList.remove('_lock');
      menuBody.classList.remove('_active');
      iconMenu.classList.remove('menu-open');
    });
  }
}
