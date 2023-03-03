const slide = Array.from(document.getElementsByClassName('slider__item'));
const dots = Array.from(document.getElementsByClassName('slider__dot'));

document.getElementsByClassName('slider__arrow_prev')[0].onclick = () => {
    const index = slide.findIndex(element => element.classList.contains('slider__item_active'));
    slide.forEach(element => element.classList.remove('slider__item_active'));
    dots.forEach(element => element.classList.remove('slider__dot_active'));
    if (index === 0) {
        slide[slide.length - 1].classList.add('slider__item_active');
        dots[slide.length - 1].classList.add('slider__dot_active');
    } else {
        slide[index - 1].classList.add('slider__item_active');
        dots[index - 1].classList.add('slider__dot_active');
    };
};

document.getElementsByClassName('slider__arrow_next')[0].onclick = () => {
    const index = slide.findIndex(element => element.classList.contains('slider__item_active'));
    slide.forEach(element => element.classList.remove('slider__item_active'));
    dots.forEach(element => element.classList.remove('slider__dot_active'));
    if (index === slide.length - 1) {
        slide[0].classList.add('slider__item_active');
        dots[0].classList.add('slider__dot_active');
    } else {
        slide[index + 1].classList.add('slider__item_active');
        dots[index + 1].classList.add('slider__dot_active');
    };
};

dots.forEach((item, index) => {
    item.onclick = () => {
        dots.forEach(element => element.classList.remove('slider__dot_active'));
        item.classList.add('slider__dot_active');
        slide.forEach(element => element.classList.remove('slider__item_active'));
        slide[index].classList.add('slider__item_active');
    }
});