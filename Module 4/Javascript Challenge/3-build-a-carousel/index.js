const slides = document.getElementsByClassName("carousel-item");
const totalSlides = slides.length;
let slidePosition = 0;

const buttonPrev = document.getElementById("carousel-button-prev");
const buttonNext = document.getElementById("carousel-button-next");
const carouselBtn = document.getElementsByClassName("carousel-buttons");

buttonPrev.addEventListener("click", moveToPrevSlide);
buttonNext.addEventListener("click", moveToNextSlide);

function showImage(num) {
    hideAllSlides();

    slides[num].classList.add("carousel-item-visible");
    carouselBtn[num].classList.add("carousel-buttons-highlight");
};

function hideAllSlides() {
    for (const slide of slides) {
        slide.classList.remove("carousel-item-visible");
        slide.classList.add("carousel-item-hidden");
    };

    for (const btn of carouselBtn) {
        btn.classList.remove("carousel-buttons-highlight");
    };
};

function autoCarousel() {
    hideAllSlides();

    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    };

    slides[slidePosition].classList.add("carousel-item-visible");
    setTimeout(autoCarousel, 10000);
    showImage(slidePosition);
};

function moveToPrevSlide() {
    hideAllSlides();

    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition -= 1;
    };

    slides[slidePosition].classList.add("carousel-item-visible");
    showImage(slidePosition);
};

function moveToNextSlide() {
    hideAllSlides();

    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    };

    slides[slidePosition].classList.add("carousel-item-visible");
    showImage(slidePosition);
};

autoCarousel()