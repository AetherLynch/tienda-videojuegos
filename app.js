const games = [
  { 
    id: 1, 
    title: "The Legend of Zelda: Breath of the Wild", 
    price: 1200,
    description: "Un mundo abierto lleno de aventuras, exploración y libertad total."
  },
  { 
    id: 2, 
    title: "Super Mario Odyssey", 
    price: 900,
    description: "Acompaña a Mario a explorar reinos increíbles en una aventura divertida y colorida."
  },
  { 
    id: 3, 
    title: "God of War", 
    price: 1100,
    description: "Kratos regresa con una historia más madura y combates espectaculares."
  },
  { 
    id: 4, 
    title: "Red Dead Redemption 2", 
    price: 1300,
    description: "Un western con narrativa profunda y un mundo abierto lleno de detalles."
  },
  { 
    id: 5, 
    title: "Minecraft", 
    price: 600,
    description: "Crea, construye y explora mundos infinitos llenos de creatividad."
  },
  { 
    id: 6, 
    title: "Clair Obscure: Expedition 33", 
    price: 1200,
    description: "Un RPG artístico con combates estratégicos y una historia misteriosa."
  },
  { 
    id: 7, 
    title: "Elden Ring", 
    price: 1400,
    description: "Un desafiante mundo abierto creado por FromSoftware."
  },
  { 
    id: 8, 
    title: "FIFA 24", 
    price: 1000,
    description: "El simulador de futbol más popular, con equipos y ligas actualizadas."
  },
  { 
    id: 9, 
    title: "Call of Duty: Modern Warfare II", 
    price: 1300,
    description: "Acción intensa con una campaña épica y multijugador competitivo."
  },
  { 
    id: 10, 
    title: "Hollow Knight", 
    price: 500,
    description: "Un metroidvania hermoso y desafiante con un estilo artístico único."
  }
];

function renderGames() {
  const gameList = document.getElementById("game-list");
  gameList.innerHTML = "";

  games.forEach(game => {
    const div = document.createElement("div");
    div.classList.add("game-item");
    div.innerHTML = `
      <h3>${game.title}</h3>
      <p>Precio: $${game.price} MXN</p>
      <p>${game.description}</p>
    `;
    gameList.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", renderGames);
