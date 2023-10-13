const container = document.getElementById("container");
const resetButton = document.getElementById("reset-button");

function createGrid(gridSize) {
    container.innerHTML = '';
    for (let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
    }
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

function changeColor(e) {
    if (e.target.classList.contains("square")) {
        e.target.style.backgroundColor = getRandomColor();
    }
}

resetButton.addEventListener("click", () => {
    const gridSize = prompt("Enter the number of squares per side (max 100):");
    if (gridSize) {
        createGrid(gridSize);
    }
});

container.addEventListener("mouseover", changeColor);

createGrid(16); // Initialize with a 16x16 grid
