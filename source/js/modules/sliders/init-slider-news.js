const Swiper = global.Swiper;

const initNewsSwiper = () => new Swiper('.news__swiper', {
  navigation: {
    nextEl: '.news-toggle-next',
    prevEl: '.news-toggle-prev',
  },

  pagination: {
    el: '.news__pagination',
    clickable: true,
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

export {initNewsSwiper};
