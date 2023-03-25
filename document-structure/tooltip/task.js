const href = Array.from(document.querySelectorAll('.has-tooltip'));

href.forEach(element => {
    element.onclick = function () {
        if (this.querySelector('.tooltip_active')) {
            this.querySelector('.tooltip_active').remove();
        } else {
            if (document.querySelector('.tooltip_active')) {
                document.querySelector('.tooltip_active').remove();
            };
            const div = document.createElement('div');
            div.innerText = this.getAttribute('title');
            div.classList.add('tooltip');
            div.classList.add('tooltip_active');
            div.style.left = `${Math.floor(this.getBoundingClientRect().left)}px`;
            div.dataset.postion = 'top';
            this.appendChild(div);
        };
        return false;
    }
});