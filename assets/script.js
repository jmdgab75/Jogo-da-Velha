document.addEventListener("DOMContentLoaded", function() {
    const cells = document.querySelectorAll(".cell");
    const resetButton = document.getElementById("reset");
    let currentPlayer = "X";
    let gameOver = false;
  
    // Adiciona o evento de clique em cada célula
    cells.forEach(function(cell) {
      cell.addEventListener("click", function() {
        if (!gameOver && cell.textContent === "") {
          cell.textContent = currentPlayer;
          cell.classList.add(currentPlayer);
  
          if (checkWin(currentPlayer)) {
            gameOver = true;
            alert("Jogador " + currentPlayer + " venceu!");
          } else if (checkTie()) {
            gameOver = true;
            alert("Empate!");
          } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
          }
        }
      });
    });
  
    // Adiciona o evento de clique no botão "Reiniciar"
    resetButton.addEventListener("click", function() {
      cells.forEach(function(cell) {
        cell.textContent = "";
        cell.classList.remove("X", "O");
      });
  
      currentPlayer = "X";
      gameOver = false;
    });
  
    // Verifica se há um vencedor
    function checkWin(player) {
      const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // linhas
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // colunas
        [0, 4, 8], [2, 4, 6] // diagonais
      ];
  
      return winningCombinations.some(function(combination) {
        return combination.every(function(index) {
          return cells[index].classList.contains(player);
        });
      });
    }
  
    // Verifica se há um empate
    function checkTie() {
      return Array.from(cells).every(function(cell) {
        return cell.textContent !== "";
      });
    }
  });
  