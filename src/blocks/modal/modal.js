function openModal() {
  const modal = document.querySelector('.js-modal');
  modal.classList.remove('modal_hidden');
  document.body.classList.add('bodyLocked');
}

const modal = function () {
  const modal = document.querySelector('.js-modal');
  const modalCloseBtn = document.querySelector('.js-modal-close');
  const form = document.querySelector('.js-modal-form');
  const nextBtns = document.querySelectorAll('.js-next-btn');
  const steps = document.querySelectorAll('.js-step');
  const progress = document.querySelector('.js-modal-progress');
  const answer = document.querySelector('.js-answer');
  const choicesBtns = document.querySelectorAll('.js-choice');

  function setInitialProgress() {
    progress.value = 100 / steps.length;
  }

  function setProgress() {
    progress.value = +progress.value + 100 / steps.length;
  }

  function setAnswer() {
    choicesBtns.forEach((btn) => {
      if (btn.checked) {
        answer.textContent = btn.value;
      }
    });
  }

  function closeModal() {
    modal.classList.add('modal_hidden');
    document.body.classList.remove('bodyLocked');

    setInitialProgress();

    setTimeout(() => {
      steps.forEach((step) => {
        step.classList.add('modal__step_hidden');
      });

      steps[0].classList.remove('modal__step_hidden');
    }, 500);
  }

  function nextStep(i) {
    steps[i + 1].classList.remove('modal__step_hidden');
    steps[i].classList.add('modal__step_hidden');
  }

  modalCloseBtn.addEventListener('click', closeModal);

  nextBtns.forEach((btn, i) => {
    if (i + 1 !== steps.length) {
      btn.addEventListener('click', () => {
        nextStep(i);
        setProgress();
        setAnswer();
      });
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    closeModal();
  });

  setInitialProgress();
};

export default modal;

export { openModal };
