const font_size_btn = Array.from(document.querySelectorAll('.font-size'));
const book_color = Array.from(document.querySelector('.book__control_color').querySelectorAll('.color'));
const book_bg = Array.from(document.querySelector('.book__control_background').querySelectorAll('.color'))
const paragraphs = document.querySelector('.book__content');

font_size_btn.forEach(element => {
    element.onclick = function() {
        const index = font_size_btn.findIndex(element => {
            return element.classList.contains('font-size_active')})
        if (index > -1) font_size_btn[index].classList.remove('font-size_active');
        this.classList.add('font-size_active');

        const size = this.dataset.size;
        if (paragraphs.dataset.size) {
            paragraphs.classList.remove('font-size_big', 'font-size_small');
        }
        if (size) {
            paragraphs.classList.add(`font-size_${size}`);
            paragraphs.dataset.size = size;
        } else {
            paragraphs.removeAttribute('data-size');
        };
        
        return false;
    };
});

book_color.forEach(element => {
    element.onclick = function() {
        const index = book_color.findIndex(element => {
            return element.classList.contains('color_active')
        });
        if (index > -1) book_color[index].classList.remove('color_active');
        this.classList.add('color_active');

        const color = this.dataset.textColor;
        if (paragraphs.dataset.textColor) 
            paragraphs.classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke');
        if (color) {
            paragraphs.classList.add(`book_color-${color}`);
            paragraphs.dataset.textColor = color;
        } else {
            paragraphs.removeAttribute('data-text-color');
        };

        return false;
    };
});

book_bg.forEach(element => {
    element.onclick = function() {
        const index = book_bg.findIndex(element => {
            return element.classList.contains('color_active')
        });
        if (index > -1) book_bg[index].classList.remove('color_active');
        this.classList.add('color_active');

        const color = this.dataset.bgColor;
        if (paragraphs.dataset.bgColor) 
            paragraphs.classList.remove('book_bg-black', 'book_bg-gray', 'book_bg-white');
        if (color) {
            paragraphs.classList.add(`book_bg-${color}`);
            paragraphs.dataset.bgColor = color;
        } else {
            paragraphs.removeAttribute('data-bg-color');
        };

        return false;
    };
});