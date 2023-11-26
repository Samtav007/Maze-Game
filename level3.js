var newScore=0

document.addEventListener("DOMContentLoaded", function () {
    const mazeContainer = document.getElementById("maze-container");
  
    const maze = [
      "         #",
      "# ###### #",
      "# ###### #",
      "## #     #",
      "#  # #####",
      "#  #  # ##",
      "#  ## #   " ,
      "#       # ",
      "##### ###E", // E represents the exit
    ];
  
    function createMaze() {
      for (let i = 0; i < maze.length; i++) {
        for (let j = 0; j < maze[i].length; j++) {
          const cell = document.createElement("div");
          cell.className = "cell";
  
          if (maze[i][j] === "#") {
            cell.classList.add("wall");
          } else if (maze[i][j] === "E") {
            cell.classList.add("exit");
          }
  
          mazeContainer.appendChild(cell);
        }
      }
    }
  
    function createPlayer() {
      const playerCell = document.querySelector(".cell:not(.wall):not(.exit)");
      playerCell.classList.add("player");
      return playerCell;
    }
  
    function handleKeyPress(event) {
      const playerCell = document.querySelector(".player");
      let { x, y } = getCoordinates(playerCell);
  
      switch (event.key) {
        case "ArrowUp":
          movePlayer(x, y - 1);
          break;
        case "ArrowDown":
          movePlayer(x, y + 1);
          break;
        case "ArrowLeft":
          movePlayer(x - 1, y);
          break;
        case "ArrowRight":
          movePlayer(x + 1, y);
          break;
      }
    }
  
    function movePlayer(newX, newY) {
      const playerCell = document.querySelector(".player");
      const newCell = getCell(newX, newY);
  
      if (newCell && !newCell.classList.contains("wall")) {
        playerCell.classList.remove("player");
        newCell.classList.add("player");
  
        if (newCell.classList.contains("exit")) {
          newScore+=100
          localStorage.setItem('userScore', newScore)
          console.log(newScore)
          alert("Congratulations! You reached the exit.");
          window.location.href = "page3.html"
        
        }
      }
    }
  
    function getCell(x, y) {
      return mazeContainer.children[y * 10 + x];
    }
  
    function getCoordinates(cell) {
      const index = Array.from(mazeContainer.children).indexOf(cell);
      const x = index % 10;
      const y = Math.floor(index / 10);
      return { x, y };
    }
  
    function resetGame() {
      mazeContainer.innerHTML = "";
      createMaze();
      createPlayer();
    }
  
    createMaze();
    createPlayer();
  
    document.addEventListener("keydown", handleKeyPress);
  });

  let timeLeft = 15;

const countdownSpan = document.getElementById("countdown");

function updateTimer() {
    timeLeft--;
    countdownSpan.textContent = timeLeft;
    if (timeLeft === 0) {
      newScore=0
      localStorage.setItem('userScore', newScore)
        alert("You Lost! You reached the exit!");
        window.location.href = "page3.html"
    }
    countdownSpan.textContent = timeLeft;

}


const timerInterval = setInterval(updateTimer, 1000);
