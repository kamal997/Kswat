const prevButton = document.querySelector(".app-swiper-prev");
const nextButton = document.querySelector(".app-swiper-next");
const sliderWrapper = document.querySelector(".swiper-wrapper");
const sliderItems = document.querySelectorAll(".swiper-slide");
let currentItem = 0;
console.log(sliderItems);

prevButton.addEventListener('click', () => {
    if (currentItem === 0) {
        return;
    } else {
        currentItem--;
    }
    updateSlider();
});

nextButton.addEventListener('click', () => {
    if (currentItem === sliderItems.length - 2) {
        currentItem = 0;
    } else {
        currentItem++;
    }
    updateSlider();
});

function updateSlider() {
    sliderWrapper.style.transform = `translateX(-${currentItem * 102}%)`;

    // check if currentItem is at the first item and disable prevButton
    if (currentItem === 0) {
        prevButton.setAttribute('disabled', '');
        prevButton.style.pointerEvents = 'none';
        
    }else if(currentItem === sliderItems.length - 2) {
        nextButton.setAttribute('disabled', '');
        nextButton.style.pointerEvents = 'none';
    }else {
        prevButton.removeAttribute('disabled');
        prevButton.style.pointerEvents = 'auto';
    }
}