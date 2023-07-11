let sliders = document.querySelectorAll(".slide");
let btnLeft = document.querySelector(".prev");
let btnRight = document.querySelector(".next");
let currentSlide = 0;

function slideShow(index) {
    sliders.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add("active");
        } else {
        slide.classList.remove("active");
        }
    });
}
function btnClick(index){
    if(index === 0){
        btnLeft.style.display = 'none';
    }
    else{
        btnLeft.style.display = 'block';
    }
    if(index === sliders.length - 1){
        btnRight.style.display = 'none';
    }
    else{
        btnRight.style.display = 'block';
    }
}
btnClick(currentSlide);

function goToPrevSlide() {
    currentSlide = (currentSlide - 1 + sliders.length) % sliders.length;
    slideShow(currentSlide);
    btnClick(currentSlide);
}

function goToNextSlide() {
    currentSlide = (currentSlide + 1) % sliders.length;
    slideShow(currentSlide);
    btnClick(currentSlide);
}

btnLeft.addEventListener("click", goToPrevSlide);
btnRight.addEventListener("click", goToNextSlide);

slideShow(currentSlide);
