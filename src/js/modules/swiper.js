var consist = new Swiper('.consist', {
  // pass modules here
  // Пагинация
  pagination: {
    el: '.swiper-pagination',
    clickable: true,

  },
  //Управление клавиатурой
  keyboard: {
    //включить/выключить
    enabled: true,
    //включить выключить
    //только когда слайдер в пределах вьюпорта
    onlyInViewport: true,
    //включить выключить
    //управление клавиатурой
    //pageUp, pageDown
    pageUpDown: true,
  },
  breakpoints: {
    678: {
      slidesPerView: 2,
    },
  }

});
var trial = new Swiper('.trial-set__swiper', {
  // pass modules here

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  watchSlidesView: true,
  watchSlidesProgress: true,
  spaceBetween: 30,
  breakpoints: {
    375: {
      slidesPerView: 1.25,
    },
    479.99: {
      slidesPerView: 2,
    },
    679.99: {
      slidesPerView: 3,

    },
  }
});
var ration = new Swiper('.ration__swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  controller: {
    inverse: true,
  },
  watchSlidesView: true,
  watchSlidesProgress: true,
  spaceBetween: 30,
  breakpoints: {
    319: {
      slidesPerView: 1.25,
    },
    479.99: {
      slidesPerView: 2,
    },
    679.99: {
      slidesPerView: 3,

    },
    1023.99: {
      slidesPerView: 4,

    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

var galleryThumbs = new Swiper('.popup-item-set__thumbs', {
  spaceBetween: 10,
  slidesPerView: 3,
  initialSlide: 3,
});
var galleryTop = new Swiper('.popup-item-set__swiper', {
  spaceBetween: 10,
  loop: true,
  thumbs: {
    swiper: galleryThumbs,
  },
});

const gallery = document.querySelector('.gallery');
const preview = document.querySelector('.gallery > .preview');
    gallery.addEventListener('click', ({ target }) => {
      if (!target.classList.contains('preview') && target.getAttribute('src'))
        [preview.src, target.src] = [target.src, preview.src];
    });

var catalogSlider = null;
var mediaQuerySize = 376;

function catalogSliderInit() {
  if (!catalogSlider) {
    catalogSlider = new Swiper('.recommendations__swiper', {
      pagination: {
        el: '.swiper-pagination',
        //Буллеты
        clickable: true,
        slidesPerView: 'auto',

        renderBullet: function (index, className) {
          let names = ['<span style="display:block; margin-top:-25px; font-size: 15px;">Для взрослых</span>', '<span style="display:block; margin-top:-25px">Для щенков</span>'];
          return '<span class="' + className + '">' + names[index] + '</span>';
        },
      },
      breakpoints: {
        376.99: {
          slidesPerView: 'auto',
        },
      },
    });
  }
}

function catalogSliderDestroy() {
  if (catalogSlider) {
    catalogSlider.destroy();
    catalogSlider = null;
  }
}

$(window).on("load resize", function (e) {
  // Берём текущую ширину экрана
  var windowWidth = $(this).innerWidth();

  // Если ширина экрана меньше или равна mediaQuerySize(1024)
  if (windowWidth <= mediaQuerySize) {
    // Инициализировать слайдер если он ещё не был инициализирован
    catalogSliderInit()
  } else {
    // Уничтожить слайдер если он был инициализирован
    catalogSliderDestroy()
  }
});
