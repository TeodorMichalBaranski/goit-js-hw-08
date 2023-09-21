import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

function saveFormState() {
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

const throttledSaveFormState = throttle(saveFormState, 500);

function loadFormState() {
  const savedFormData = localStorage.getItem('feedback-form-state');

  if (savedFormData) {
    const { email, message } = JSON.parse(savedFormData);
    emailInput.value = email;
    messageInput.value = message;
  }
}

function handleSubmit() {
  if (!emailInput.value || !messageInput.value) {
    alert('Upewnij się żę wszystkie pola są wypełnione ');
    return;
  }

  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };

  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  form.reset();
}

form.addEventListener('input', e => {
  if (e.target === emailInput || e.target === messageInput) {
    throttledSaveFormState();
  }
});

form.addEventListener('submit', e => {
  e.preventDefault();
  handleSubmit();
});

document.addEventListener('DOMContentLoaded', loadFormState);
