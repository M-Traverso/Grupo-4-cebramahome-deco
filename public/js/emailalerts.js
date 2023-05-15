window.addEventListener('load', function () {
    let button = document.querySelector('#button-fo');
    console.log(button);
    let input = document.querySelector('#inputemailfo');
    console.log(input);

    button.addEventListener('click', function () {
        const data = new URLSearchParams();
        data.append('correo', input.value);

        let settings = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: data
        };

        fetch('http://localhost:8080/api/email/create', settings)
            .then(response => response.json())
            .then(() => {
                input.value = '';
                alert('¡Te enviaremos un email muy pronto!');
            })
            .catch((error) => {
                console.log(error);
            });
    });
});
