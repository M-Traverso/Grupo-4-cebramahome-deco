

window.addEventListener('load', function () {
    let button = document.querySelector('#button-submit');
    button.addEventListener('click', function () {
        let email = document.querySelector('#email');

        localStorage.setItem('user', email.value);
    });

    let formulario = document.querySelector('#form');

    formulario.addEventListener("submit", function(e){

        let errores = [];
        
        let campoEmail = document.querySelector("#email");

        const regex = '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'
    
        if(campoEmail.value.length == 0){
            errores.push("Debes ingresar la direccion de correo electronico con la que te registraste");
        }else if(!regex.test(campoEmail.value)){
            errores.push('El correo electrónico es inválido');
        }    
    
        let campoPassword = document.querySelector("#password");
    
        if(campoPassword.value.length == 0){
            errores.push("Debes ingresar una contraseña");
        }

        if (errores.length > 0){
    
            e.preventDefault();
    
            let ulErrores = document.getElementById("errores");
    
            for (let i = 0; i < errores.length; i++){
    
                ulErrores.innerHTML +=  `<li> ${errores[i]} </li>`
                ulErrores.classList.add("is-invalid")
                ulErrores.style.listStyle = "none"
                ulErrores.classList.add("alert-warning")
    
            }
        }
        
    
    })

})