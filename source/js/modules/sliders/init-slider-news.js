const Swiper = global.Swiper;

const initNewsSwiper = () => new Swiper('.news__swiper', {
  navigation: {
    nextEl: '.news-toggle-next',
    prevEl: '.news-toggle-prev',
  },

  pagination: {
    el: '.news__pagination',
    clickable: true,
    renderBullet: (index, className) => {
      return `<button class="${className}" type="button" aria-label="Перейти к ${index + 1} слайду">${index + 1}</button>`;
    },
  },

  breakpoints: {

    1200: {
      slidesPerView: 'auto',
      spaceBetween: 32,
      grid: {
        rows: 1,
      },
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      grid: {
        fill: 'row',
        rows: 2,
      },
    },

    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      grid: {
        fill: 'row',
        rows: 2,
      },
    },
  },
});

export {initNewsSwiper};
