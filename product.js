import PRODUCTS from "./products-data.js";

const grid = document.getElementById("productsGrid");

function renderProducts(list = PRODUCTS) {
  grid.innerHTML = "";

  list.forEach(product => {
    const card = document.createElement("div");
    card.className =
      "bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition";

    card.innerHTML = `
      <img src="${product.image}" class="w-full h-48 object-cover">

      <div class="p-4">
        <h3 class="font-semibold text-lg">${product.name}</h3>
        <p class="text-sm text-gray-500 mt-1">${product.description}</p>

        <div class="flex justify-between items-center mt-3">
          <span class="text-wood-700 font-bold">
            ₹${product.price.toLocaleString()}
          </span>

          <a href="product.html?id=${product.id}"
             class="px-3 py-1 bg-wood-700 text-white rounded text-sm">
             View
          </a>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });
}

renderProducts();
