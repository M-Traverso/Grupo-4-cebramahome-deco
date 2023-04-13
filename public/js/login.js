

window.addEventListener('load', function () {
    let button = document.querySelector('#button-submit');
    button.addEventListener('click', function () {
        let email = document.querySelector('#email');

        localStorage.setItem('user', email.value);
    });



})