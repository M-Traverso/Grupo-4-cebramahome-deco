window.addEventListener('load', function () {
    let button = document.querySelector('.burger-menu')
    let list=document.querySelector('.secctionconsearchnav')
    console.log(list);
    button.addEventListener('click', function (){
        if (list.style.display === 'none') {
            list.style.display = 'block';
        } else {
            list.style.display = 'none';
        }
    })
   
})