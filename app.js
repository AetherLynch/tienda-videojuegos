const games = [
  { 
    id: 1, 
    title: "The Legend of Zelda: Breath of the Wild", 
    price: 1200,
    description: "Un mundo abierto lleno de aventuras, exploración y libertad total.",
    image: "images/zelda.jpg"
  },
  { 
    id: 2, 
    title: "Super Mario Odyssey", 
    price: 900,
    description: "Acompaña a Mario a explorar reinos increíbles en una aventura divertida y colorida.",
    image: "images/mario.jpg"
  },
  { 
    id: 3, 
    title: "God of War", 
    price: 1100,
    description: "Kratos regresa con una historia más madura y combates espectaculares.",
    image: "images/gow.jpg"
  },
  { 
    id: 4, 
    title: "Red Dead Redemption 2", 
    price: 1300,
    description: "Un western con narrativa profunda y un mundo abierto lleno de detalles.",
    image: "images/rdr2.jpg"
  },
  { 
    id: 5, 
    title: "Minecraft", 
    price: 600,
    description: "Crea, construye y explora mundos infinitos llenos de creatividad.",
    image: "images/minecraft.jpg"
  },
  { 
    id: 6, 
    title: "Clair Obscure: Expedition 33", 
    price: 1200,
    description: "Un RPG artístico con combates estratégicos y una historia misteriosa.",
    image: "images/clair.jpg"
  },
  { 
    id: 7, 
    title: "Elden Ring", 
    price: 1400,
    description: "Un desafiante mundo abierto creado por FromSoftware.",
    image: "images/eldenring.jpg"
  },
  { 
    id: 8, 
    title: "FIFA 24", 
    price: 1000,
    description: "El simulador de futbol más popular, con equipos y ligas actualizadas.",
    image: "images/fifa.jpg"
  },
  { 
    id: 9, 
    title: "Call of Duty: Modern Warfare II", 
    price: 1300,
    description: "Acción intensa con una campaña épica y multijugador competitivo.",
    image: "images/cod.jpg"
  },
  { 
    id: 10, 
    title: "Hollow Knight", 
    price: 500,
    description: "Un metroidvania hermoso y desafiante con un estilo artístico único.",
    image: "images/hollowknight.jpg"
  }
];

function renderGames() {
  const gameList = document.getElementById("game-list");
  gameList.innerHTML = "";

  games.forEach(game => {
    const div = document.createElement("div");
    div.classList.add("game-item");
    div.innerHTML = `
      <img src="${game.image}" class="game-img" alt="${game.title}">
      <h3>${game.title}</h3>
      <p>Precio: $${game.price} MXN</p>
      <p>${game.description}</p>
      <button class="add-to-cart-btn" data-id="${game.id}">Agregar al carrito</button>
    `;
    gameList.appendChild(div);
  });

  // Asignar eventos a los botones de "Agregar al carrito"
  const buttons = document.querySelectorAll(".add-to-cart-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const id = parseInt(btn.getAttribute("data-id"));
      addToCart(id);
    });
  });
}


let cart = [];

function addToCart(gameId) {
  const game = games.find(g => g.id === gameId);
  if (!game) return;

  const existing = cart.find(item => item.id === gameId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...game, quantity: 1 });
  }

  renderCart();
}

function renderCart() {
  const cartItemsDiv = document.getElementById("cart-items");
  const cartTotalP = document.getElementById("cart-total");

  cartItemsDiv.innerHTML = "";

  if (cart.length === 0) {
    cartItemsDiv.innerHTML = "<p>El carrito está vacío.</p>";
    cartTotalP.textContent = "Total: $0 MXN";
    return;
  }

  let total = 0;

  cart.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("cart-item");

    const subtotal = item.price * item.quantity;
    total += subtotal;

    div.innerHTML = `
      <p>${item.title} (x${item.quantity}) - $${subtotal} MXN</p>
    `;

    cartItemsDiv.appendChild(div);
  });

  cartTotalP.textContent = `Total: $${total} MXN`;
}

function checkout() {
  if (cart.length === 0) {
    alert("El carrito está vacío. Agrega algún juego antes de comprar.");
    return;
  }

  alert("¡Compra simulada con éxito! Gracias por tu compra.");
  cart = [];
  renderCart();
}

document.addEventListener("DOMContentLoaded", () => {
  renderGames();
  renderCart();

  const checkoutBtn = document.getElementById("checkout-btn");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", checkout);
  }
});
