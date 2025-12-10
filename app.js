const games = [
  { id: 1, title: "The Legend of Zelda: Breath of the Wild", price: 1200 },
  { id: 2, title: "Super Mario Odyssey", price: 900 },
  { id: 3, title: "God of War", price: 1100 },
  { id: 4, title: "Red Dead Redemption 2", price: 1300 },
  { id: 5, title: "Minecraft", price: 600 },
  { id: 6, title: "Clair Obscure: Expedition 33", price: 1200 },
  { id: 7, title: "Elden Ring", price: 1400 },
  { id: 8, title: "FIFA 24", price: 1000 },
  { id: 9, title: "Call of Duty: Modern Warfare II", price: 1300 },
  { id: 10, title: "Hollow Knight", price: 500 }
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
    `;
    gameList.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", renderGames);
