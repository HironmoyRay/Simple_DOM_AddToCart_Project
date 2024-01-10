
const button = document.getElementById('button');
const price_field = document.getElementById('price');
const total_price_field = document.getElementById('total');

const product_price = 5000;
let total_price = 0 ;

total_price_field.innerText = `Total: ৳ ${total_price}`;
price_field.innerText = `৳ ${product_price}`;

button.addEventListener('click', () => {
    total_price += product_price;
    total_price_field.innerText = `Total: ৳ ${total_price}`
})

