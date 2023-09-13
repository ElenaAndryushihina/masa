const initMenu = function () {
  const navMain = document.querySelector('[data-nav]');
  const navToggle = document.querySelector('.main-nav__toggle');
  const navLinks = document.querySelectorAll('.main-nav__link');
  const logo = document.querySelector('.header__logo');

  navMain.classList.remove('no-js');
  navMain.classList.add('is-close');

  const openMenu = () => {
    if (navMain.classList.contains('is-close')) {
      navMain.classList.remove('is-close');
      navMain.classList.add('is-open');
      logo.classList.add('is-dark');
      window.scrollLock.disableScrolling();
      document.addEventListener('click', clickOutsideMenu);
      document.addEventListener('keydown', escapePress);
    }
  };

  const closeMenu = () => {
    if (navMain.classList.contains('is-open')) {
      navMain.classList.remove('is-open');
      navMain.classList.add('is-close');
      window.scrollLock.enableScrolling();
      logo.classList.remove('is-dark');
      document.removeEventListener('click', clickOutsideMenu);
      document.removeEventListener('keydown', escapePress);
    }
  };

  const clickOutsideMenu = (event) => {
    if (!navMain.contains(event.target) && !navToggle.contains(event.target)) {
      closeMenu();
    }
  };

  const escapePress = (event) => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  };

  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('is-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });
};

export {initMenu};
