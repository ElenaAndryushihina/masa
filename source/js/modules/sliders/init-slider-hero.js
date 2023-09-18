const Swiper = global.Swiper;

const initHeroSwiper = () => {
  const heroBullet = document.querySelectorAll('.hero__bullet');
  const heroSwiper = new Swiper('.hero__swiper', {

    loop: true,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    initialSlide: 2,

    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
  });

  heroBullet.forEach((item) => item.addEventListener('click', () => {
    const current = item.dataset.slide;
    heroSwiper.slideToLoop(Number(current), 3, true);
  }));
};

export {initHeroSwiper};
