// Page loaded message
console.log("RR Furnitures Website Loaded 🚀");

// ============================
// Add to Cart Function
// ============================
let cartCount = 0;

function addToCart(productName) {
  cartCount++;
  alert(productName + " added to cart 🛒");

  // Update cart count if element exists
  let cartElement = document.getElementById("cart-count");
  if (cartElement) {
    cartElement.innerText = cartCount;
  }
}

// ============================
// Smooth Scroll (for navbar links)
// ============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// ============================
// Simple Search Filter
// ============================
function searchProducts() {
  let input = document.getElementById("search").value.toLowerCase();
  let cards = document.querySelectorAll(".product-card");

  cards.forEach(card => {
    let title = card.querySelector("h3").innerText.toLowerCase();
    if (title.includes(input)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// ============================
// Dark Mode Toggle 🌙
// ============================
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}