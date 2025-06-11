const products = [
  {
    name: "Mobile",
    price: 29999,
    image: "Mobile.jpg"  
  },
  {
    name: "Watch",
    price: 5230,
    image: "Watch.jpeg"
  },
  {
    name: "Ring",
    price: 15000,
    image: "Ring.jpg"
  },
  {
    name: "Shoe",
    price: 899,
    image: "Shoes.jpg"
  },
  {
    name: "Bag",
    price: 499,
    image: "Bag.jpg"
  },
  {
    name: "Women's Clothing",
    price: 2000,
    image: "Women's Clothing.jpg"
  },
  {
    name: "Laptop",
    price: 1099,
    image: "Laptop.jpeg"
  },
  {
    name: "Ear ring",
    price: 1599,
    image: "Ear ring.jpg"
  }
];

const grid = document.getElementById("productGrid");

products.forEach(product => {
  const card = document.createElement("div");
  card.className = "card";

  // Escape single quotes for JS string inside HTML attribute
  const safeName = product.name.replace(/'/g, "\\'");

  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>₹${product.price}</p>
    <button onclick="addToCart('${safeName}')">Add to Cart</button>
  `;

  card.addEventListener("click", () => {
    document.querySelectorAll('.card').forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
  });

  grid.appendChild(card);
});

function addToCart(name) {
  alert(`${name} added to cart!`);
}
