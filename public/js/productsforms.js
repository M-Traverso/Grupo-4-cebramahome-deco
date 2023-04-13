window.addEventListener('load', function () {
    let form = document.querySelector('#formCreate');

    let button = document.querySelector('#button-submit');

    let name = document.querySelector('#name');

    let nameError = document.querySelector('#nameError');

    let price = document.querySelector('#price');

    let priceError = document.querySelector('#priceError');

    // let image = document.querySelector('#image');

    // let imageError = document.querySelector('#imageError');

    let category = document.querySelector('#category_id');

    let categoryError = document.querySelector('#categoryError');

    let description = document.querySelector('#description');

    let descriptionError = document.querySelector('#descriptionError');



    button.addEventListener('click', function (event) {
        event.preventDefault();
        let errors = {};

        if (name.value.length < 5) {
            errors.name = 'Este campo debe tener minimo 5 caracteres';
        }
        if (Object.keys(errors).length >= 1) {
            nameError.innerText = (errors.name) ? errors.name : "";
        } else {
            form.submit();
        }

        if (price.value.length < 1) {
            errors.price = 'Este campo debe estar completo';
        }
        if (Object.keys(errors).length >= 1) {
            priceError.innerText = (errors.price) ? errors.price : "";
        } else {
            form.submit();
        }

        if (category.value.length < 1) {
            errors.category = 'Este campo debe estar completo';
        }
        if (Object.keys(errors).length >= 1) {
            categoryError.innerText = (errors.category) ? errors.category : "";
        } else {
            form.submit();
        }

        if(description.value.length<20){
            errors.description= 'Este campo debe tener minimo 20 caracteres';
        }
        if(Object.keys(errors).length>=1){
            descriptionError.innerText=(errors.description)?errors.description:"";
        }else{
            form.submit();
        }

    });



})