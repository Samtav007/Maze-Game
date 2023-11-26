console.log('HI')
let newScore=0
const mazeContainer = document.getElementById('maze');
document.addEventListener("DOMContentLoaded", function () {
    const mazeContainer = document.getElementById("maze-container");
    const mazeSize = 5;
    let playerPosition = { x: 0, y: 0 };
    

    function createMaze() {
        for (let i = 0; i < mazeSize; i++) {
            for (let j = 0; j < mazeSize; j++) {
                const cell = document.createElement("div");
                cell.classList.add("cell");
                mazeContainer.appendChild(cell);

                if (i === 0 && j === 0) {
                    cell.classList.add("start");
                } else if (i === mazeSize - 1 && j === mazeSize - 1) {
                    cell.classList.add("end");
                }
            }
        }
    }

    function movePlayer(newPosition) {
        const currentPlayerCell = document.querySelector(".player");
        if (currentPlayerCell) {
            currentPlayerCell.classList.remove("player");
        }

        const newPlayerCell = document.querySelector(`.cell:nth-child(${newPosition.y + 1 + newPosition.x * mazeSize})`);
        newPlayerCell.classList.add("player");
    }

    function handleKeyPress(event) {
        let newPlayerPosition = { ...playerPosition };

        switch (event.key) {
            case "ArrowUp":
                newPlayerPosition.x = Math.max(0, newPlayerPosition.x - 1);
                break;
            case "ArrowDown":
                newPlayerPosition.x = Math.min(mazeSize - 1, newPlayerPosition.x + 1);
                break;
            case "ArrowLeft":
                newPlayerPosition.y = Math.max(0, newPlayerPosition.y - 1);
                break;
            case "ArrowRight":
                newPlayerPosition.y = Math.min(mazeSize - 1, newPlayerPosition.y + 1);
                break;
        }

        if (isMoveValid(newPlayerPosition)) {
            playerPosition = newPlayerPosition;
            movePlayer(playerPosition);

            if (playerPosition.x === mazeSize - 1 && playerPosition.y === mazeSize - 1) {
                newScore+=100
                console.log(newScore)
                localStorage.setItem('userScore', newScore);
                alert("Congratulations! You Won");
                window.location.href = "page3.html"
            }
        }
    }

    function isMoveValid(position) {
        return position.x >= 0 && position.x < mazeSize && position.y >= 0 && position.y < mazeSize;
    }

    document.addEventListener("keydown", handleKeyPress);

    createMaze();
    movePlayer(playerPosition);

    const UP = document.getElementById('up');
    UP.onclick = update("ArrowUp"); 

    const DOWN = document.getElementById('down');
    DOWN.addEventListener('click', update("ArrowDown"));

    const LEFT = document.getElementById('left');
    LEFT.addEventListener('click', update("ArrowLeft"));

    const RIGHT = document.getElementById('right');
    RIGHT.addEventListener('click', update("ArrowRight"));

    function update(move) {
        console.log("Pressed" + " " + move)
        let newPlayerPosition = { ...playerPosition };

        switch (move) {
            case "ArrowUp":
                newPlayerPosition.x = Math.max(0, newPlayerPosition.x - 1);
                break;
            case "ArrowDown":
                newPlayerPosition.x = Math.min(mazeSize - 1, newPlayerPosition.x + 1);
                break;
            case "ArrowLeft":
                newPlayerPosition.y = Math.max(0, newPlayerPosition.y - 1);
                break;
            case "ArrowRight":
                newPlayerPosition.y = Math.min(mazeSize - 1, newPlayerPosition.y + 1);
                break;
        }

        if (isMoveValid(newPlayerPosition)) {
            playerPosition = newPlayerPosition;
            movePlayer(playerPosition);

            if (playerPosition.x === mazeSize - 1 && playerPosition.y === mazeSize - 1) {
                newScore+=100
                console.log(newScore)
                localStorage.setItem('userScore', newScore);
                alert("Congratulations! You Won");
                window.location.href = "page3.html"
            }
        }
    }
});

var newPlayerPosition = {
    x: 0,
    y: 0
};





let timeLeft = 5;

const countdownSpan = document.getElementById("countdown");
console.log(countdownSpan)

function updateTimer() {
    timeLeft--;
    countdownSpan.textContent = timeLeft;
    if (timeLeft === 0) {
        newScore=0  
        localStorage.setItem('userScore', newScore);
        alert("You Lost! You reached the exit!");
        window.location.href = "page3.html"
    }
    countdownSpan.textContent = timeLeft;

}


const timerInterval = setInterval(updateTimer, 1000);












