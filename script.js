var menuitems = document.getElementById("menuitems");
menuitems.style.maxHeight = "0px";

function menutoggle() {
    if (menuitems.style.maxHeight == "0px") {
        menuitems.style.maxHeight = "200px";
    } else {
        menuitems.style.maxHeight = "0px";
    }
}

// Get all product items and total price element
const productItems = document.querySelectorAll('.cart-item');
const totalElement = document.getElementById('total-price');

// Function to update the total price
function updateTotalPrice() {
    let totalPrice = 0;
    productItems.forEach((item) => {
        const price = parseFloat(item.querySelector('.product-price').textContent);
        const quantity = parseInt(item.querySelector('.product-quantity').value);
        const subtotal = price * quantity;
        item.querySelector('.product-subtotal').textContent = subtotal.toFixed(2);
        totalPrice += subtotal;
    });
    totalElement.textContent = totalPrice.toFixed(2);
}

// Add event listeners to all quantity input fields for real-time updates
productItems.forEach((item) => {
    const quantityInput = item.querySelector('.product-quantity');
    quantityInput.addEventListener('input', updateTotalPrice);
});

// Initial update when the page loads
updateTotalPrice();


//account page

function register() {
    var RegForm = document.getElementById("RegForm");
    var LoginForm = document.getElementById("LoginForm");
    var Indicator = document.getElementById("Indicator");
    RegForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)";
    Indicator.style.transform = "translateX(100px)";
}

function login() {
    var RegForm = document.getElementById("RegForm");
    var LoginForm = document.getElementById("LoginForm");
    var Indicator = document.getElementById("Indicator");
    RegForm.style.transform = "translateX(300px)";
    LoginForm.style.transform = "translateX(300px)";
    Indicator.style.transform = "translateX(0px)";
}

//productdetails page
function changeImage(element) {
    var ProductImg = document.getElementById("ProductImg");
    ProductImg.src = element.src;
}
