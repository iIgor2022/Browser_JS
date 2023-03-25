const quantityControl = Array.from(document.querySelectorAll('.product__quantity-control'));
const btnProductAdd = Array.from(document.querySelectorAll('.product__add'));

function changeQuantity(direction) {
    if (direction.classList.item(1) === 'product__quantity-control_dec') {
        if (direction.nextElementSibling.innerText === "1") {
            return false;
        };
        direction.nextElementSibling.innerText = Number(direction.nextElementSibling.innerText) - 1;
    } else {
        direction.previousElementSibling.innerText = Number(direction.previousElementSibling.innerText) + 1;
    };
    addToStorage(1, 'img', 20);
};

quantityControl.forEach(element => {
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
    const cartProductsArray = Array.from(document.querySelectorAll('.cart__product'));
    const cartProductIndex = cartProductsArray.findIndex(element => element.dataset.id === product.dataset.id);
    if (cartProductIndex != -1) {
        cartProductsArray[cartProductIndex].querySelector('.cart__product-count').innerText = 
            Number(cartProductsArray[cartProductIndex].querySelector('.cart__product-count').innerText) + 
            Number(product.querySelector('.product__quantity-value').innerText);
    } else {
        const div = document.createElement('div');
        div.classList.add('cart__product');
        div.dataset.id = product.dataset.id;
        const img = document.createElement('img');
        img.classList.add('cart__product-image');
        img.setAttribute('src', product.querySelector('img').getAttribute('src'));
        img.setAttribute('alt', product.querySelector('img').getAttribute('alt'));
        const productCount = document.createElement('div');
        productCount.classList.add('cart__product-count');
        productCount.innerText = product.querySelector('.product__quantity-value').innerText;
        const href = document.createElement('a');
        href.onclick = function() {
            removeProductFromCart(this);
            return false;
        };
        href.classList.add('cart__product-remove');
        href.setAttribute('href', '#');
        href.innerHTML = '\u00D7';
        div.appendChild(img);
        div.appendChild(productCount);
        div.appendChild(href);
        document.querySelector('.cart__products').appendChild(div);
        isCartVisible();
    };
}

btnProductAdd.forEach(element => {
    element.addEventListener('click', function() {
        addToCart(this.closest('.product'));
    })
});

function addToStorage(id, source, count) {
    const ll = String(id);
    const product = {
        ll: 'id',
        // id: JSON.stringify({
        //     'source': source,
        //     'count': count
        // })
    };
    let l = JSON.stringify(product);
    console.log(JSON.parse(l))
    
};

window.onload = () => {
    isCartVisible();
};