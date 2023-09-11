const Swiper = global.Swiper;


const initHeroSwiper = () => new Swiper('.hero__swiper', {

  pagination: {
    el: '.hero__pagination',
    clickable: true,
  },

  loop: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  initialSlide: 2,
});

export {initHeroSwiper};
