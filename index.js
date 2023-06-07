const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const error = "Todos los campos son obligatorios";
  formErr = document.getElementById("form-err");

  //Valida que todos los campos tengan valor
  !formData.get("firstName") ||
    !formData.get("lastName") ||
    !formData.get("username") ||
    !formData.get("password") ||
    !formData.get("confirmPassword") ||
    !formData.get("birthDay");
  !formData.get("newsletter")
    ? (formErr.innerHTML = error)
    : (formErr.innerHTML = "");
});

//Validacion para firstName y lastName
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const username = document.getElementById("username");

const namesValidation = (fieldValue, errorMessage, fieldError) => {
  textValue = fieldValue.value.trim();
  fieldValue.id === "username"
    ? (validField = /^[a-z0-9]*$/i)
    : (validField = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/);

  fieldErr = document.getElementById(fieldError);
  fieldErr.innerHTML = "";
  if (!validField.test(textValue)) fieldErr.innerHTML = errorMessage;
  if (!textValue) fieldErr.innerHTML = "This field is required";
};

firstName.oninput = function () {
  const errorMessage = "Invalid First Name";
  const fieldErrorMessage = "first-name-err";
  namesValidation(firstName, errorMessage, fieldErrorMessage);
};
lastName.oninput = function () {
  const fieldError = "last-name-err";
  const errorMessage = "Invalid Last Name";
  namesValidation(lastName, errorMessage, fieldError);
};

username.oninput = function () {
  const fieldError = "usermame-err";
  const errorMessage = "Invalid username (Only letters and numbers)";
  namesValidation(username, errorMessage, fieldError);
};


