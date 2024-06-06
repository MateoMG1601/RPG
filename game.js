// Define el mundo del juego
const world = [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1]
];

// Crea el mundo visualmente
function createWorld() {
    const gameDiv = document.getElementById('game');
    for (let i = 0; i < world.length; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < world[i].length; j++) {
            const tile = document.createElement('div');
            tile.classList.add('tile');
            if (world[i][j] === 1) {
                tile.classList.add('wall');
            }
            row.appendChild(tile);
        }
        gameDiv.appendChild(row);
    }
}

// Inicia el juego
function startGame() {
    createWorld();
}

// Llama a startGame cuando la ventana se carga completamente
window.onload = startGame;