const cart = document.querySelector('.cart__products');
let cartIds = [];
const products = document.querySelectorAll('.product');

function createCartProduct(quantityValue, id) {
    const imgSrc = document.querySelector(`.product[data-id="${id}"]`).querySelector('.product__image').getAttribute('src');
    const cartProduct = document.createElement('div');
    cartProduct.classList.add('cart__product');
    cartProduct.setAttribute('data-id', id);
    cartProduct.innerHTML = `<img class="cart__product-image" src="${imgSrc}"><div class="cart__product-count">${quantityValue}</div>`;
    cart.append(cartProduct);
}

function loadCartFromStorage() {
    for (let id in localStorage) {
        if (!isNaN(id) && localStorage.hasOwnProperty(id)) {
            const product = document.querySelector(`.product[data-id="${id}"]`);
            const imgSrc = product.querySelector('.product__image').getAttribute('src');
            const quantityValue = localStorage.getItem(id);
            createCartProduct(quantityValue, id); 
            cartIds.push(id);
        }
    }
}

function animationCartAdd(id) {
    const img = document.querySelector(`.product[data-id="${id}"]`).querySelector('.product__image');
    const cartImg = document.querySelector(`.cart__product[data-id="${id}"]`).querySelector('.cart__product-image');
    const imgClone = img.cloneNode();
    const productRect = img.getBoundingClientRect();
    const cartRect = cartImg.getBoundingClientRect();
    const horizontalMove = cartRect.left - productRect.left;
    const verticalMove = productRect.top - cartRect.top;
    const frames = 7;
    const time = 500 / frames;
    const horizontalStage = horizontalMove / frames;
    const verticalStage = verticalMove / frames;
    let currentStage = 0;
    imgClone.style.position = 'fixed';
    imgClone.style.left = productRect.left + 'px';
    imgClone.style.top = productRect.top + 'px';
    document.body.append(imgClone);
    const interval = setInterval (() => {
        currentStage++;
        imgClone.style.left = (productRect.left + horizontalStage * currentStage) + 'px';
        imgClone.style.top = (productRect.top - verticalStage * currentStage) + 'px';
        if (currentStage >= frames) {
            clearInterval(interval);
            imgClone.remove();
        }
    }, time);
}

products.forEach(product => {
    const id = product.getAttribute('data-id');
    const dec = product.querySelector('.product__quantity-control_dec');
    const inc = product.querySelector('.product__quantity-control_inc');
    const quantity = product.querySelector('.product__quantity-value');
    let quantityValue = +quantity.textContent;
    dec.addEventListener('click', () => {
        if (quantityValue > 1) {
            quantityValue--;
            quantity.textContent = quantityValue;
        }
    });
    inc.addEventListener('click', () => {
        quantityValue++;
        quantity.textContent = quantityValue; 
    });
    const addBtn = product.querySelector('.product__add');
    addBtn.addEventListener('click', () => {
        if (!cartIds.includes(id)) {
            createCartProduct(quantityValue, id);
            cartIds.push(id);
            localStorage.setItem(id, quantityValue);
        } else {
            const exitingProduct = cart.querySelector(`[data-id = "${id}"]`);
            const currentCount = +exitingProduct.querySelector('.cart__product-count').textContent;
            exitingProduct.querySelector('.cart__product-count').textContent = currentCount + quantityValue;
            localStorage.setItem(id, currentCount + quantityValue);
        }
        animationCartAdd(id);
        quantityValue = 1;
        quantity.textContent = quantityValue;
    });
});

loadCartFromStorage();