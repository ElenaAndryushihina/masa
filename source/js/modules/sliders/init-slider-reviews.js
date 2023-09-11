const Swiper = global.Swiper;

const initReviewsSwiper = () => new Swiper('.reviews__swiper', {
  navigation: {
    nextEl: '.reviews-toggle-next',
    prevEl: '.reviews-toggle-prev',
  },

  scrollbar: {
    el: '.reviews__scrollbar',
  },

  breakpoints: {

    1200: {
      slidesPerView: 2,
      spaceBetween: 32,
    },

    768: {
      slidesPerView: 1.2,
      spaceBetween: 30,
    },

    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
});

export {initReviewsSwiper};
