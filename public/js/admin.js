window.addEventListener('load', function () {

    let buttonupdates = document.querySelector('#button-update');

    let buttondelete = document.querySelector('#form-delete')

    const emailinstorage = localStorage.getItem('user')

    console.log(content);
    if (emailinstorage != 'manuel.traverso@gmail.com') {
        buttonupdates.style.display = 'none';
        buttondelete.style.display = 'none';
        buttoncreate.style.display = 'none';
    }
    if (emailinstorage == 'manuel.traverso@gmail.com') {
        window.addEventListener('scroll', function () {
            var button = document.getElementById('fixed-button');
            var content = document.getElementById('content');


            var contentRect = content.getBoundingClientRect();
            var buttonTop = contentRect.top + content.offsetHeight - button.offsetHeight;


            if (window.pageYOffset > buttonTop) {
                button.style.display = 'block';
            } else {
                button.style.display = 'none';
            }
        });

    }
})