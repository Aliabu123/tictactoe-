// Initialize global variables
let turn = "X";
let isGameover = false;

// This function changes the turn
function changeTurn() {
  let playerTurn = '';
  if (turn === "X") {
    playerTurn = '0';
  } else {
    playerTurn = 'X'
  }
  return playerTurn;
};

// Function to check Winner
function checkWin() {
  let boxtext = document.getElementsByClassName("boxtext");
  
  // Winning combinations
  let wins = [
    [0, 1, 2, 5, 5, 0],
    [3, 4, 5, 5, 15, 0],
    [6, 7, 8, 5, 25, 0],
    [0, 3, 6, -5, 15, 90],
    [1, 4, 7, 5, 15, 90],
    [2, 5, 8, 15, 15, 90],
    [0, 4, 8, 5, 15, 45],
    [2, 4, 6, 5, 15, 135]
  ];
  wins.forEach((e) => {
    console.log(e);
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      // If winning combination found, set correct text for player
      document.querySelector(".info").style.color = 'green';
      document.querySelector(".info").innerText =
        "Player " + boxtext[e[0]].innerText + " Won";
      // Set gameover to true.
      isGameover = true;
      turn = "";
    }
  });
};

// The logic to control game starts from here.
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      // Add the text for player whose turn it is.
      boxtext.innerText = turn;
      // Change the turn.
      turn = changeTurn();
      checkWin();
      // Check if game is over or not
      if (!isGameover) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for player " + turn;
      }
    }
  });
});

// Add onClick listener on Reset Button
reset.addEventListener("click", () => {
  let boxtext = document.querySelectorAll(".boxtext");
  // Reset all boxes text
  Array.from(boxtext).forEach((element) => {
    element.innerText = "";
  });
  // Set default first turn to player x
  turn = "X";
  document.querySelector(".info").style.color = 'black';
  // Set game over variable to false.
  isGameover = false;
  document.getElementsByClassName("info")[0].innerText = "Turn for player " + turn;
});
//Git commit Done. New file since i sent the wrong one!!