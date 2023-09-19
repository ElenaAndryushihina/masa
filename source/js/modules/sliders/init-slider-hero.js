const Swiper = global.Swiper;

const initHeroSwiper = () => {
  const heroBullet = document.querySelectorAll('.hero__bullet');
  const heroSwiper = new Swiper('.hero__swiper', {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
  });

  heroBullet.forEach((item) => item.addEventListener('click', () => {
    const current = item.dataset.slide;
    heroSwiper.slideTo(Number(current));
  }));
};

export {initHeroSwiper};
