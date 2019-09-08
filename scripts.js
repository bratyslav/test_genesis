const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const agreement = document.getElementById('agreement');
const submit = document.getElementById('submit');
const validEmail = /[A-Z0-9a-z]{1,64}@(?:[A-Z0-9a-z]{1,63}\.){1,125}[A-Za-z]{2,63}$/;

const areAllValid = () => {
  return (
    name.value.length !== 0
    && email.value.length !== 0
    && validEmail.test(email.value)
    && password.value.length !== 0
    && agreement.checked
  );
};

const setSubmitClass = () => {
  if (areAllValid()) {
    submit.classList.add('form__submit--active'); 
  } else {
    submit.classList.remove('form__submit--active');
  };
};

const validateName = () => {
  if (name.value.length === 0) {
    name.classList.add('form__unvalid');
    name.placeholder = 'Введите свое имя';
  } else {
    name.classList.remove('form__unvalid');
  };
};

const validateEmail = () => {
  if (email.value.length === 0 || !validEmail.test(email.value)) {
    email.classList.add('form__unvalid');
    email.placeholder = 'Неверный формат email';
  } else {
    email.classList.remove('form__unvalid');
  };
};

const validatePassword = () => {
  if (password.value.length === 0) {
    password.classList.add('form__unvalid');
    password.placeholder = 'Придумайте новый пароль';
  } else {
    password.classList.remove('form__unvalid');
  };
};

const validateForm = (event) => {
  event.preventDefault();
  
  setSubmitClass();

  validateName();
  validateEmail();
  validatePassword();
};

const validateInput = (event) => {
  switch (event.target.id) {
    case 'name':
      validateName();
      setSubmitClass();
      break;

    case 'email':
      validateEmail();
      setSubmitClass();
      break;

    case 'password':
      validatePassword();
      setSubmitClass();
      break;

    case 'agreement':
      setSubmitClass();
      break;

    default:
      break;
  }
}