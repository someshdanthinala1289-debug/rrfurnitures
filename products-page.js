import { getAllProducts } from "./firebase.js";

const grid = document.getElementById("productsGrid");
const emptyState = document.getElementById("emptyState");

async function loadProducts() {
  const products = await getAllProducts();

  grid.innerHTML = "";

  if (!products.length) {
    emptyState.classList.remove("hidden");
    return;
  }

  emptyState.classList.add("hidden");

  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "bg-white rounded-lg shadow p-3";

    card.innerHTML = `
     <img src="${s.img}" class="absolute inset-0 w-full h-full object-cover">
      <p class="text-sm text-gray-500">${p.desc || ''}</p>

      <div class="mt-2 flex justify-between items-center">
        <span class="text-amber-800 font-bold">₹${p.price}</span>
        <a href="product.html?id=${p.id}" class="bg-amber-600 text-white px-3 py-1 rounded text-sm">View</a>
      </div>
    `;

    grid.appendChild(card);
  });
}

loadProducts();