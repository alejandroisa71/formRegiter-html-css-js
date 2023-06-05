const form = document.querySelector('form')


const validateInput = (x) =>{
    
    console.log(x)
}

form.addEventListener('submit',(e) => {
    e.preventDefault()
    const formData = new FormData(form)
    
    for(let [name, value] of formData) {
        alert(`${name} = ${value}`); // key1 = value1, luego key2 = value2
      }
    
   
    
})