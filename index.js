const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const error = 'Todos los campos son obligatorios';
  formErr = document.getElementById('form-err');

  //Valida que todos los campos tengan valor
  !formData.get('firstName') ||
  !formData.get('lastName') ||
  !formData.get('username') ||
  !formData.get('password') ||
  !formData.get('confirmPassword') ||
  !formData.get('birthDay')
    ? (formErr.innerHTML = error)
    : (formErr.innerHTML = '');
});

//Validacion para firstName, lastName and username

const namesValidation = (fieldValue, errorMessage, fieldError) => {
  const textValue = fieldValue.value.trim();
  fieldValue.id === 'username'
    ? (validField = /^[a-z0-9]*$/i)
    : (validField = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/);

  const fieldErr = document.getElementById(fieldError);
  fieldErr.innerHTML = '';
  if (!validField.test(textValue)) fieldErr.innerHTML = errorMessage;
  if (!textValue) fieldErr.innerHTML = 'This field is required';
};

firstName.oninput = function () {
  const errorMessage = 'Invalid First Name';
  const fieldErrorMessage = 'first-name-err';
  namesValidation(firstName, errorMessage, fieldErrorMessage);
};
lastName.oninput = function () {
  const fieldError = 'last-name-err';
  const errorMessage = 'Invalid Last Name';
  namesValidation(lastName, errorMessage, fieldError);
};

username.oninput = function () {
  const fieldError = 'usermame-err';
  const errorMessage = 'Invalid username (Only letters and numbers)';
  namesValidation(username, errorMessage, fieldError);
};

//Comprobar que contraseña tenga al menos 8 caracteres

password.addEventListener(
  'blur',
  function (e) {
    const fieldError = 'password-err';
    const errorMessage = 'Password must be at least 8 characters';
    const fieldErr = document.getElementById(fieldError);
    const password = e.target.value;
    const validatePassword = /.{8,}/.test(password);
    !validatePassword
      ? (fieldErr.innerHTML = errorMessage)
      : (fieldErr.innerHTML = '');
  },
  true
);

//controlar contrasenas iguales

confirmPassword.addEventListener(
  'blur',
  function (e) {
    const fieldError = 'confirmPassword-err';
    const errorMessage = 'Password must be at least 8 characters';
    const fieldErr = document.getElementById(fieldError);
    const password = e.target.value;
    const validatePassword = /.{8,}/.test(password);
    !validatePassword
      ? (fieldErr.innerHTML = errorMessage)
      : (fieldErr.innerHTML = '');
  },
  true
);

 // controlar el ingreso de fechas


//Activa o desactiva el boton Submit segun la condicion del checkbox
let buttonDisabled = true;
newsletter.addEventListener('click', function () {
  buttonDisabled = !buttonDisabled;
  document.getElementById('submitButton').disabled = buttonDisabled;
  console.log(buttonDisabled);
});
