const slide = Array.from(document.getElementsByClassName('slider__item'));
const dots = Array.from(document.getElementsByClassName('slider__dot'));

function manageSlider(index) {
    dots.forEach(element => element.classList.remove('slider__dot_active'));
    slide.forEach(element => element.classList.remove('slider__item_active'));
    dots[index].classList.add('slider__dot_active');        
    slide[index].classList.add('slider__item_active');
};

manageSlider(0);

document.getElementsByClassName('slider__arrow_prev')[0].onclick = () => {
    const index = slide.findIndex(element => element.classList.contains('slider__item_active'));
    index === 0 ? manageSlider(slide.length - 1):manageSlider(index - 1);
};

document.getElementsByClassName('slider__arrow_next')[0].onclick = () => {
    const index = slide.findIndex(element => element.classList.contains('slider__item_active'));
    index === slide.length - 1 ? manageSlider(0):manageSlider(index + 1);
};

dots.forEach((item, index) => {
    item.onclick = () => {
        manageSlider(index);
    }
});