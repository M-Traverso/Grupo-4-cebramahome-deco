window.addEventListener('load', function () {

    let formulario = document.querySelector('#form');

    formulario.addEventListener("submit", function(e){

        let errores = [];

        let campoNombre = document.querySelector("#firstName");

        if(campoNombre.value.length == 0){
            errores.push("El nombre de usuario es obligatoria");
        }else if(campoNombre.value.length >= 2){
            errores.push('El nombre de usuario debe contener al menos dos caracteres');
        }

        let campoApellido = document.querySelector("#lastName");

        if(campoApellido.value.length == 0){
            errores.push("El apellido de usuario es obligatoria");
        }else if(campoApellido.value.length >= 2){
            errores.push('El apellido de usuario debe contener al menos dos caracteres');
        }
        
        let campoEmail = document.querySelector("#mail");

        const regex = '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'
    
        if(campoEmail.value.length == 0){
            errores.push("La direccion de correo electronico es obligatoria");
        }else if(!regex.test(campoEmail.value)){
            errores.push('El correo electrónico que ingresaste es inválido');
        }

        let campoPassword = document.querySelector("#password");
        const regexx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).+$/;
    
        if(campoPassword.value.length == 0){
            errores.push("Debes ingresar una contraseña");
        }else if(campoPassword.value.length >= 8){
            errores.push('El apellido de usuario debe contener al menos dos caracteres');            
        }else if(!regexx.test(campoPassword.value)){
            errores.push("La contraseña deberá tener letras mayúsculas, minúsculas, un número y un carácter especial")
        }

        let campoImg = document.querySelector("#imagen");
        const regexxx = /^image\/(jpeg|png|gif|webp)$/;

        if(campoImg.files.length == 0){
            errores.push("Debes cargar una imagen")
        }else if(!regexxx.test(campoImg.files[0])){
            errores.push("Debes ingresar alguno de los siguientes formatos: (jpeg|png|gif|webp)")
        }

        console.log(errores)

    
        if (errores.length > 0){
    
            e.preventDefault();
    
            let ulErrores = document.querySelector("ul");
    
            for (let i = 0; i < errores.length; i++){
    
                ulErrores.innerHTML +=  `<li> ${errores[i]} </li>`
                ulErrores.classList.add("is-invalid")
                ulErrores.style.listStyle = "none"
                ulErrores.classList.add("alert-warning")
    
            }
    
        }
        
    
       })



})