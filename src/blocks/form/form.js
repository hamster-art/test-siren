import { openModal } from '../modal/modal';

const zipForm = function () {
  const form = document.querySelector('.js-zip-form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    openModal();
  });
};

export default zipForm;
