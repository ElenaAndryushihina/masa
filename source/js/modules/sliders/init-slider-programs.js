const Swiper = global.Swiper;

const initProgramsSwiper = () => new Swiper('.programs__swiper', {
  navigation: {
    nextEl: '.programs-toggle-next',
    prevEl: '.programs-toggle-prev',
  },

  scrollbar: {
    el: '.programs__scrollbar',
  },

  breakpoints: {

    1200: {
      slidesPerView: 3,
      spaceBetween: 32,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
});

export {initProgramsSwiper};
