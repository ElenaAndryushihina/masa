const initFilter = () => {
  const buttons = document.querySelectorAll('.news__button');
  const cards = document.querySelectorAll('.news__card');

  if (buttons) {
    buttons.forEach((buttonActive) => {
      buttonActive.addEventListener('click', (event) => {
        if (!buttonActive.classList.contains('is-active')) {
          let filterClass = event.target.dataset['filter'];

          buttons.forEach((buttonOther) => {
            buttonOther.classList.remove('is-active');
          });

          cards.forEach((cardOther) => {
            cardOther.classList.remove('is-hidden');
            if (!cardOther.classList.contains(filterClass) && filterClass !== 'general') {
              cardOther.classList.add('is-hidden');
            }
          });

          buttonActive.classList.add('is-active');
        }
      });
    });
  }
};

export {initFilter};
