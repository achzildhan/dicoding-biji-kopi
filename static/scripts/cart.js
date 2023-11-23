const searchTarget = document.querySelector('#order');
const cartButton = document.querySelector('#cart-icon');

cartButton.onclick = () => {
    searchTarget.scrollIntoView({ behavior: 'smooth' });
}
