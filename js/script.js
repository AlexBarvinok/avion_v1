console.log('script load');
const noticeEl = document.querySelector('.notice');
const stepperEls = document.querySelectorAll('.stepper');
const burgerEl = document.querySelector('.burger');
const headerListEl = document.querySelector('.header__list');

const filtersBtnEl = document.querySelector('.catalog__mobile-btn');

if (filtersBtnEl) {
  filtersBtnEl.addEventListener('click', () => {
    const filters = document.querySelector('.filters');
    filtersBtnEl.classList.toggle('catalog__mobile-btn--active');
    filters.classList.toggle('filters--active');
  });
}

if (headerListEl) {
  new TransferElements({
    sourceElement: headerListEl,
    breakpoints: {
      767: {
        targetElement: document.querySelector('.header__bottom'),
        targetPosition: 1,
      },
    },
  });
}

if (burgerEl) {
  const body = document.body;
  const menuEl = document.querySelector('.header__bottom');
  burgerEl.addEventListener('click', () => {
    burgerEl.classList.toggle('burger--active');
    menuEl.classList.toggle('header__bottom--active');
    body.classList.toggle('stop-scroll');
  });
}

if (noticeEl) {
  const noticeCloseEl = noticeEl.querySelector('.notice__close');

  noticeCloseEl.addEventListener('click', () => {
    noticeEl.classList.add('notice--hidden');
  });
}

if (stepperEls) {
  stepperEls.forEach((stepperEl) => {
    const stepperInputEl = stepperEl.querySelector('.stepper__input');
    const stepperBtnMinusEl = stepperEl.querySelector('.stepper__btn--minus');
    const stepperBtnPlusEl = stepperEl.querySelector('.stepper__btn--plus');
    const stepperMin = Number(stepperInputEl.getAttribute('min'));
    const stepperMax = Number(stepperInputEl.getAttribute('max'));

    let count = Number(stepperInputEl.value);

    stepperInputEl.addEventListener('change', () => {
      stepperBtnMinusEl.disabled = false;
      stepperBtnPlusEl.disabled = false;

      if (stepperInputEl.value < stepperMin) {
        stepperInputEl.value = stepperMin;
        stepperBtnMinusEl.disabled = true;
        stepperBtnPlusEl.disabled = false;
      }
      if (stepperInputEl.value > stepperMax) {
        stepperInputEl.value = stepperMax;
        stepperBtnPlusEl.disabled = true;
        stepperBtnMinusEl.disabled = false;

        // stepperBtnPlusEl.classList.add('stepper__btn--disabled');
      }
    });

    stepperBtnPlusEl.addEventListener('click', () => {
      count = Number(stepperInputEl.value);

      if (count < stepperMax) {
        stepperBtnMinusEl.disabled = false;
        stepperBtnPlusEl.disabled = false;
        count++;
        stepperInputEl.value = count;
      }
      if (count === stepperMax) {
        stepperBtnPlusEl.disabled = true;
      }
    });

    stepperBtnMinusEl.addEventListener('click', () => {
      count = Number(stepperInputEl.value);

      if (count > stepperMin) {
        stepperBtnMinusEl.disabled = false;
        stepperBtnPlusEl.disabled = false;
        count--;
        stepperInputEl.value = count;
      }
      if (count === stepperMin) {
        stepperBtnMinusEl.disabled = true;
      }
    });
  });
}
