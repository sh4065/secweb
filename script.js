let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(item) {
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(item + " added to cart");
}

function displayCart() {
    let container = document.getElementById("cart-items");

    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = "<p>No items added</p>";
        return;
    }

    let html = "<ul>";
    cart.forEach(item => {
        html += `<li>${item}</li>`;
    });
    html += "</ul>";

    container.innerHTML = html;
}

function goBack() {
    window.location.href = "cakes.html";
}

function placeOrder() {
    localStorage.removeItem("cart");
    window.location.href = "success.html";
}

window.onload = displayCart;