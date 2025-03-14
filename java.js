// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle navigation menu for mobile responsiveness
const navbar = document.getElementById('navbar');
const menuToggle = document.createElement('div');
menuToggle.classList.add('menu-toggle');
menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
document.getElementById('header').appendChild(menuToggle);

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Shopping cart functionality
let cart = [];

// Create a cart count element and append it to the cart icon
const cartIcon = document.querySelector('.fa-bag-shopping');
const cartCount = document.createElement('span');
cartCount.classList.add('cart-count');
cartCount.innerText = '0'; // Initialize with 0
cartIcon.parentElement.appendChild(cartCount);

document.querySelectorAll('.shopping').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const product = e.target.closest('.pro');
        const productName = product.querySelector('.des h5').innerText;
        const productPrice = product.querySelector('.des h4').innerText;

        const item = {
            name: productName,
            price: productPrice
        };

        cart.push(item);
        updateCart();
    });
});

function updateCart() {
    // Update the cart count text
    cartCount.innerText = cart.length;

    // Optional: Display cart items in a modal or sidebar
    console.log('Cart Items:', cart);
}

// Banner button functionality
document.querySelector('.butt2').addEventListener('click', () => {
    alert('This feature is still not available');
});

