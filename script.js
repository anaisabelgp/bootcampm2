// Almacena los productos seleccionados en localStorage
function addToCart(productName, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ productName, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} se añadió al carrito`);
}

// Función para vaciar el carrito
function clearCart() {
    localStorage.removeItem('cart');
    const cartContainer = document.getElementById('cart');
    const totalContainer = document.getElementById('total');
    cartContainer.innerHTML = '<p>El carrito está vacío</p>';
    totalContainer.textContent = '0'; // Inicializa el total a 0
}

// Agrega el evento click al botón "Vaciar Carrito"
const clearCartButton = document.getElementById('clearCart');
clearCartButton.addEventListener('click', clearCart);

// Cargar el carrito en cart.html
if (window.location.pathname.includes('cart.html')) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart');
    const totalContainer = document.getElementById('total');
    
    let total = 0;
    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>El carrito está vacío</p>';
    } else {
        cart.forEach(item => {
            const productElement = document.createElement('p');
            productElement.textContent = `${item.productName} - $${item.price}`;
            cartContainer.appendChild(productElement);
            total += item.price;
        });
        totalContainer.textContent = total.toFixed(2); // Actualiza el total
    }
}
