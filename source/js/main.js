import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {initMenu} from './utils/menu';
import {initAccordions} from './modules/accordions/init-accordions';
import {CustomSelect} from './modules/select/custom-select';
import {initHeroSwiper} from './modules/sliders/init-slider-hero';
import {initProgramsSwiper} from './modules/sliders/init-slider-programs';
import {initNewsSwiper} from './modules/sliders/init-slider-news';
import {initReviewsSwiper} from './modules/sliders/init-slider-reviews';
import {initContactsMap} from './modules/maps/init-contacts-map';
import {initFilter} from './modules/filter/init-filter';

// const modalOpen = document.querySelector('.modal.is-acive');
// if (modalOpen) {
const setFocus = () => {
  document.getElementById('name').focus();
};

setFocus();
// }

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();
  initMenu();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    initAccordions();
    initHeroSwiper();
    initProgramsSwiper();
    initNewsSwiper();
    initReviewsSwiper();
    initContactsMap();
    initFilter();
    const form = new Form();
    window.form = form;
    form.init();
    const select = new CustomSelect();
    select.init();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
