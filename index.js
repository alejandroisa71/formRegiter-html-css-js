const form = document.querySelector("form");



const validateInput = (name,value) => {
    if (!value || value.trim().length ===0) alert(`El campo ${name} no puede estar vacio`)
    console.log(name,value)
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  formData.forEach((value, name) => {
    validateInput(name,value)
  });
});
