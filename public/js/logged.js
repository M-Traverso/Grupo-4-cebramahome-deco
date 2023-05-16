


    let buttons = document.querySelectorAll('#button-cartt');
    let buttoncreate = document.querySelector('#content')
  let user=localStorage.getItem('user');
  console.log(localStorage);
    if (!user) {
        for (let i = 0; i < buttons.length; i++) {

            buttons[i].addEventListener('click', function (event) {
                event.preventDefault();
                alert('el usuario no esta logueado');
            })
        }
        buttoncreate.style.display = 'none';
    } 

