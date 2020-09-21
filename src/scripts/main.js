'use strict';

const contactInputs = document.querySelectorAll('.form-input.contact');

const consultationInputs = document
  .querySelectorAll('.form-input.consultation');

const contactForm = document.querySelector('.form.contact__form');

const consultationForm = document.querySelector('.form.consultation__form');

const submitArray = [contactForm, consultationForm];

submitArray.map(form => form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (form === contactForm) {
    contactInputs.forEach(input => {
      input.value = '';
    });
  };

  if (form === consultationForm) {
    consultationInputs.forEach(input => {
      input.value = '';
    });
  }
}));
