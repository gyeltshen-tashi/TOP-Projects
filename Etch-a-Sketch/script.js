const container = document.getElementById("container");

function buildGrid(gridSize = 16) {
    for (let i = 0; i < gridSize; i++) {

        const row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < gridSize; j++) {

            const square = document.createElement("div");
            square.classList.add("square");

            square.addEventListener("mouseenter", () => {
                square.classList.add("colored");
            });

            row.appendChild(square);
        }

        container.appendChild(row);
    }
}
buildGrid();

const squareBtn = document.getElementById("squareBtn");
squareBtn.addEventListener("click", changeSquares)

function changeSquares() {
    let newNum = prompt("Enter the number of squares you would like");

    if (newNum === null) {
        return;
    }
    
    let parsed = Number(newNum);
    while (parsed < 1 || parsed > 100 || Number.isNaN(parsed)) {
        newNum = prompt("Invalid number. Enter value between 1-100");
        if (newNum===null) return;
        parsed = Number(newNum);
    };
    container.replaceChildren();
    return buildGrid(parsed);
}


