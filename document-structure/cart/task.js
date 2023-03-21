const quantity_control = Array.from(document.querySelectorAll('.product__quantity-control'));
const btn_product_add = Array.from(document.querySelectorAll('.product__add'));

function changeQuantity(direction) {
    if (direction.classList.item(1) === 'product__quantity-control_dec') {
        if (direction.nextElementSibling.innerText === "1") {
            // alert('Количество не может быть меньше 1');
            return false;
        };
        direction.nextElementSibling.innerText = Number(direction.nextElementSibling.innerText) - 1;
    } else {
        direction.previousElementSibling.innerText = Number(direction.previousElementSibling.innerText) + 1;
    };
};

quantity_control.forEach(element => {
    element.addEventListener('click', function() {
        changeQuantity(element);
    })
});

function isCartVisible() {
    if (!document.querySelector('.cart__products').childElementCount) {
        document.querySelector('.cart').style.display = 'none';
    } else {
        if (document.querySelector('.cart').style.display === 'none') {
            document.querySelector('.cart').style.display = '';
        }
    }
};

function removeProductFromCart(href) {
    href.closest('.cart__product').remove();
    isCartVisible();
};

function addToCart(product) {
    const cart_products_array = Array.from(document.querySelectorAll('.cart__product'));
    const cart_product_index = cart_products_array.findIndex(element => element.dataset.id === product.dataset.id);
    if (cart_product_index != -1) {
        cart_products_array[cart_product_index].querySelector('.cart__product-count').innerText = 
            Number(cart_products_array[cart_product_index].querySelector('.cart__product-count').innerText) + 
            Number(product.querySelector('.product__quantity-value').innerText);
    } else {
        const div = document.createElement('div');
        div.classList.add('cart__product');
        div.dataset.id = product.dataset.id;
        const img = document.createElement('img');
        img.classList.add('cart__product-image');
        img.setAttribute('src', product.querySelector('img').getAttribute('src'));
        img.setAttribute('alt', product.querySelector('img').getAttribute('alt'));
        const product_count = document.createElement('div');
        product_count.classList.add('cart__product-count');
        product_count.innerText = product.querySelector('.product__quantity-value').innerText;
        const href = document.createElement('a');
        href.onclick = function() {
            removeProductFromCart(this);
            return false;
        };
        href.classList.add('cart__product-remove');
        href.setAttribute('href', '#');
        href.innerHTML = '\u00D7';
        div.appendChild(img);
        div.appendChild(product_count);
        div.appendChild(href);
        document.querySelector('.cart__products').appendChild(div);
        isCartVisible();
    };
}

btn_product_add.forEach(element => {
    element.addEventListener('click', function() {
        addToCart(this.closest('.product'));
    })
});

window.onload = () => {
    isCartVisible();
}