const container = document.getElementById('cartContainer');
const summary = document.getElementById('cartSummary');

// 🔥 BUTTON ACTIONS (OUTSIDE FUNCTION)
container.addEventListener('click', (e) => {
  const items = JSON.parse(localStorage.getItem('cart') || '[]');

  const inc = e.target.getAttribute('data-inc');
  const dec = e.target.getAttribute('data-dec');
  const remove = e.target.getAttribute('data-remove');

  if (inc !== null) {
    items[inc].qty += 1;
  }
  else if (dec !== null) {
    if (items[dec].qty > 1) items[dec].qty -= 1;
  }
  else if (remove !== null) {
    items.splice(remove, 1);
  }
  else {
    return;
  }

  localStorage.setItem('cart', JSON.stringify(items));
  loadCart();
});

function loadCart() {
  const items = JSON.parse(localStorage.getItem('cart') || '[]');
  container.innerHTML = '';

  if (!items.length) {
    container.innerHTML = "<p class='text-sm text-gray-500'>Your cart is empty.</p>";
    summary.textContent = '';
    return;
  }

  let total = 0;

  items.forEach((item, index) => {
    const lineTotal = item.price * item.qty;
    total += lineTotal;

    const row = document.createElement('div');
    row.className = 'bg-white rounded-lg shadow flex p-3 gap-3 items-center';

    row.innerHTML = `
      <img src="${item.img || item.image}" class="w-20 h-16 object-cover rounded" />

      <div class="flex-1">
        <div class="text-sm font-semibold">${item.name}</div>

        <div class="text-xs text-gray-500 mt-1">
          ₹${item.price.toLocaleString()}
        </div>

        <div class="flex items-center gap-2 mt-2">
          <button data-dec="${index}" class="px-2 border">-</button>
          <span>${item.qty}</span>
          <button data-inc="${index}" class="px-2 border">+</button>
        </div>
      </div>

      <div class="text-sm font-bold text-amber-800">
        ₹${lineTotal.toLocaleString()}
      </div>

      <button data-remove="${index}" class="text-red-600 text-xs">
        Remove
      </button>
    `;

    container.appendChild(row);
  });

  // 🔥 SUMMARY
  summary.innerHTML = `
    <div class="bg-white shadow rounded-lg px-4 py-3 inline-block">
      <strong>Total: ₹${total.toLocaleString()}</strong>

      <button id="checkoutBtn"
        class="ml-4 bg-green-600 text-white px-4 py-2 rounded text-sm">
        Order on WhatsApp
      </button>
    </div>
  `;

  // 🔥 BUTTON CLICK
  const btn = document.getElementById("checkoutBtn");

  btn.addEventListener("click", () => {

    const items = JSON.parse(localStorage.getItem("cart") || "[]");

    const name = document.getElementById("custName").value;
    const phone = document.getElementById("custPhone").value;
    const address = document.getElementById("custAddress").value;

    if (!name || !phone || !address) {
      alert("Please fill all details");
      return;
    }

    let message = "🛒 Order Details:%0A%0A";

    message += `Name: ${name}%0A`;
    message += `Phone: ${phone}%0A`;
    message += `Address: ${address}%0A%0A`;

    let totalAmount = 0;

    items.forEach(item => {
      const line = `${item.name} × ${item.qty} = ₹${item.price * item.qty}`;
      message += line + "%0A";
      totalAmount += item.price * item.qty;
    });

    message += `%0A💰 Total: ₹${totalAmount}`;

    const url = `https://wa.me/919381049087?text=${message}`;

    window.open(url, "_blank");
  });
}

loadCart();