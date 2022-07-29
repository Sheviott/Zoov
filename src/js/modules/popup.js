//При клике на любой объект с классом popup-limnk открывается попап
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;
//вызов анимации
const timeout = 800;

// ОТКРЫВАЕМ ПОПАП
//проверяем есть ли попапы
if (popupLinks.length > 0) {
  for (let index = 0; index < popupLinks.length; index++) {
    const popupLink = popupLinks[index];
    popupLink.addEventListener("click", function (e) {
      const popupName = popupLink.getAttribute('href').replace('#', ''); //во всех ссылках убираем хэш что является айди попапа (чистое иимя попапа)
      const currentPopup = document.getElementById(popupName); /// выбираем текущий попап
      popupOpen(currentPopup); // открываем его
      e.preventDefault(); //чтобы ссылка не презагружалась при клике
    });
  }
}
// ЗАКРЫВАЕМ ПОПАП
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
  for (let index = 0; index < popupCloseIcon.length; index++) {
    const el = popupCloseIcon[index];
    el.addEventListener('click', function (e) {
      popupClose(el.closest('.popup'));
      e.preventDefault();
    });
  }
}

function popupOpen(currentPopup) {
  if (currentPopup && unlock) {
    const popupActive = document.querySelector('.popup.open');
    if (popupActive) {
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }
    currentPopup.classList.add('open');
    currentPopup.addEventListener('click', function (e) {
      if (!e.target.closest('.popup__content')) {
        popupClose(e.target.closest('.popup'));
      }
    })
  }
}
function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
    popupActive.classList.remove('open');
    if (doUnlock) {
      bodyUnlock();
    }
  }
}

function bodyLock() {
  const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
  if (lockPadding.length > 0) {
    for (let index = 0; index < lockPadding.length; index++) {
      const el = lockPadding[index];
      el.style.paddingRight = lockPaddingValue;
    }
  }
  body.style.paddingRight = lockPaddingValue;
  body.classList.add('_lock');

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

function bodyUnlock() {
  // убираем скролл ПОСЛЕ анимации
  setTimeout(function () {
    if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = '0px';
      }
    }
    body.style.paddingRight = '0px';
    body.classList.remove('_lock');
  }, timeout);

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}


//////СЕТ М
////let setM = document.querySelector('#set-M');
////let popup = document.querySelector('.popup');
////setM.onclick = function () {
////  popup.classList.toggle('_appear')
////  document.body.classList.toggle('_lock');
////}
//////ЗАКРЫТЬ ПОПАП
////let close = document.querySelector('.popup__close');
////close.onclick = function () {
////  popup.classList.remove('_appear');
////  document.body.classList.toggle('_lock');
////}

//////let popup__body = document.querySelector('.popup__body');
//////document.onclick = function ()  {
//////  popup.classList.remove('_appear');
//////}

////document.addEventListener('click', function (e) {
////  var target = e.target;
////  it_is_popup = target == popup;
////  if (!it_is_popup) {
////    popup.classList.remove('_appear');
////}
////})
