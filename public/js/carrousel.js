window.addEventListener('load', function () {
    let img1 = document.querySelector('#img1');
    let img2 = document.querySelector('#img2');
    let img3 = document.querySelector('#img3');

    let puntos = document.querySelectorAll('.punto');

    let grande = document.querySelector('.grande');
    for (let i = 0; i < puntos.length; i++) {
        const element = puntos[i];
        element.addEventListener('click', function () {
            if (i == 0) {
                img1.style.display = "block";
                img2.style.display = "none";
                img3.style.display = "none";

            } else if (i == 1) {
                img1.style.display = "none";
                img2.style.display = "block";
                img3.style.display = "none";
            } else if (i == 2) {
                img1.style.display = "none";
                img2.style.display = "none";
                img3.style.display = "block";

            }

            puntos.forEach((e, i) => {
                puntos[i].classList.remove('activo');
            })

            puntos[i].classList.add('activo');


        })


    }

    // const sliderWrapper = document.querySelector('.slider-wrapper');
    // const sliderSlides = document.querySelectorAll('.slider-slide');
    // const sliderWidth = sliderSlides[0].clientWidth;
    // let slideIndex = 0;

    // function moveSlides() {
    //   sliderWrapper.style.transform = `translateX(-${slideIndex * sliderWidth}px)`;
    // }

    // function nextSlide() {
    //   if (slideIndex >= sliderSlides.length - 1) {
    //     slideIndex = 0;
    //   } else {
    //     slideIndex++;
    //   }
    //   moveSlides();
    // }

    // setInterval(nextSlide, 5000);



});