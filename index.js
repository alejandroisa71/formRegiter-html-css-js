const form = document.querySelector("form");
let error=false

// const validateInput = (name, value, error) => {
//   if (!value){
//     error =true
//     return error
//   }
//     //alert(`El campo ${name} no puede estar vacio`);
//   //console.log(name, value);
// };

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  !formData.get('firstName') ? console.log('no hay') : console.log('si hay')

  // formData.forEach((value, name) => {
  //   validateInput(name, value.trim(), error);
  // });
  
});
