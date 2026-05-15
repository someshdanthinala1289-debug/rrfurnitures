<<<<<<< HEAD
const container = document.getElementById("cartContainer");
const summary = document.getElementById("cartSummary");

function formatPrice(price) {
  return `Rs. ${Number(price || 0).toLocaleString()}`;
}

container.addEventListener("click", (event) => {
  const items = JSON.parse(localStorage.getItem("cart") || "[]");

  const inc = event.target.getAttribute("data-inc");
  const dec = event.target.getAttribute("data-dec");
  const remove = event.target.getAttribute("data-remove");

  if (inc !== null) {
    items[inc].qty += 1;
  } else if (dec !== null) {
    if (items[dec].qty > 1) items[dec].qty -= 1;
  } else if (remove !== null) {
    items.splice(remove, 1);
  } else {
    return;
  }

  localStorage.setItem("cart", JSON.stringify(items));
=======
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
>>>>>>> 3780acafc04ab57cf6dc2f64dd4e2f61a8d7fc13
  loadCart();
});

function loadCart() {
<<<<<<< HEAD
  const items = JSON.parse(localStorage.getItem("cart") || "[]");
  container.innerHTML = "";

  if (!items.length) {
    container.innerHTML = `
      <div class="rounded-[2rem] bg-white p-8 text-center text-sm text-gray-500 shadow">
        Your cart is empty.
      </div>
    `;
    summary.textContent = "";
=======
  const items = JSON.parse(localStorage.getItem('cart') || '[]');
  container.innerHTML = '';

  if (!items.length) {
    container.innerHTML = "<p class='text-sm text-gray-500'>Your cart is empty.</p>";
    summary.textContent = '';
>>>>>>> 3780acafc04ab57cf6dc2f64dd4e2f61a8d7fc13
    return;
  }

  let total = 0;

  items.forEach((item, index) => {
<<<<<<< HEAD
    const lineTotal = Number(item.price || 0) * Number(item.qty || 0);
    total += lineTotal;

    const row = document.createElement("article");
    row.className = "rounded-[2rem] bg-white p-4 shadow sm:p-5";

    row.innerHTML = `
      <div class="flex flex-col gap-4 sm:flex-row">
        <div class="overflow-hidden rounded-2xl bg-slate-100 sm:w-28 sm:shrink-0">
          <img src="${item.img || item.image}" alt="${item.name}" class="h-40 w-full object-cover sm:h-24">
        </div>

        <div class="flex flex-1 flex-col gap-3">
          <div class="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h2 class="text-base font-semibold text-slate-900">${item.name}</h2>
              <p class="mt-1 text-sm text-slate-500">${formatPrice(item.price)}</p>
            </div>

            <div class="text-left text-base font-bold text-amber-800 sm:text-right">
              ${formatPrice(lineTotal)}
            </div>
          </div>

          <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div class="inline-flex w-fit items-center rounded-full border border-slate-200">
              <button data-dec="${index}" class="px-4 py-2 text-base text-slate-700">-</button>
              <span class="min-w-[2.5rem] text-center text-sm font-medium text-slate-900">${item.qty}</span>
              <button data-inc="${index}" class="px-4 py-2 text-base text-slate-700">+</button>
            </div>

            <button
              data-remove="${index}"
              class="inline-flex w-full items-center justify-center rounded-2xl border border-red-200 px-4 py-3 text-sm font-medium text-red-600 sm:w-auto"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
=======
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
>>>>>>> 3780acafc04ab57cf6dc2f64dd4e2f61a8d7fc13
    `;

    container.appendChild(row);
  });

<<<<<<< HEAD
  summary.innerHTML = `
    <div class="rounded-[2rem] bg-white p-5 shadow sm:p-6">
      <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p class="text-sm text-slate-500">Order total</p>
          <p class="mt-1 text-2xl font-bold text-amber-800">${formatPrice(total)}</p>
        </div>

        <button
          id="checkoutBtn"
          class="inline-flex w-full items-center justify-center rounded-2xl bg-green-600 px-5 py-4 text-sm font-medium text-white sm:w-auto"
        >
          Order on WhatsApp
        </button>
      </div>
    </div>
  `;

  const btn = document.getElementById("checkoutBtn");

  btn.addEventListener("click", () => {
    const latestItems = JSON.parse(localStorage.getItem("cart") || "[]");
    const name = document.getElementById("custName").value.trim();
    const phone = document.getElementById("custPhone").value.trim();
    const address = document.getElementById("custAddress").value.trim();
=======
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
>>>>>>> 3780acafc04ab57cf6dc2f64dd4e2f61a8d7fc13

    if (!name || !phone || !address) {
      alert("Please fill all details");
      return;
    }

<<<<<<< HEAD
    let message = "Order Details:%0A%0A";
=======
    let message = "🛒 Order Details:%0A%0A";

>>>>>>> 3780acafc04ab57cf6dc2f64dd4e2f61a8d7fc13
    message += `Name: ${name}%0A`;
    message += `Phone: ${phone}%0A`;
    message += `Address: ${address}%0A%0A`;

    let totalAmount = 0;

<<<<<<< HEAD
    latestItems.forEach((item) => {
      const lineTotal = Number(item.price || 0) * Number(item.qty || 0);
      message += `${item.name} x ${item.qty} = ${formatPrice(lineTotal)}%0A`;
      totalAmount += lineTotal;
    });

    message += `%0ATotal: ${formatPrice(totalAmount)}`;

    const url = `https://wa.me/919381049087?text=${message}`;
=======
    items.forEach(item => {
      const line = `${item.name} × ${item.qty} = ₹${item.price * item.qty}`;
      message += line + "%0A";
      totalAmount += item.price * item.qty;
    });

    message += `%0A💰 Total: ₹${totalAmount}`;

    const url = `https://wa.me/919381049087?text=${message}`;

>>>>>>> 3780acafc04ab57cf6dc2f64dd4e2f61a8d7fc13
    window.open(url, "_blank");
  });
}

<<<<<<< HEAD
loadCart();
=======
loadCart();
>>>>>>> 3780acafc04ab57cf6dc2f64dd4e2f61a8d7fc13
