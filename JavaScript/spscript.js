// Storage //
const storedNames = localStorage.getItem("playerNames");
const playerNames = JSON.parse(storedNames);

// Global Variables //
let parValue = [];
const heskethCourse = [4, 3, 4, 3, 4, 4, 5, 4, 4, 4, 3, 4, 5, 4, 4, 3, 5, 5];
const holeScoreP1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const holeScoreP2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const holeScoreP3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const holeScoreP4 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let hole = 1;
let currentPlayerIndex = 0;
let strokes = 0;
let p1Total = 0;
let p2Total = 0;
let p3Total = 0;
let p4Total = 0;
const playerID = document.getElementById("player");
const playerOne = document.getElementById("player1");
const playerTwo = document.getElementById("player2");
const playerThree = document.getElementById("player3");
const playerFour = document.getElementById("player4");

// Functions //
function prevHole() {
  const currentHole = document.getElementById("hole");
  hole--;
  if (hole < 1) {
    hole = 1;
  }
  currentHole.innerHTML = `Hole: ${hole}`;
}

function nextHole() {
  const currentHole = document.getElementById("hole");
  hole++;
  if (hole > 18) {
    hole = 18;
  }
  currentHole.innerHTML = `Hole: ${hole}`;
}

function endGameNavigator() {
  window.location.href = "scorecard.html";
}

function prevPlayerHandler() {
  const playerDisplay = document.getElementById("player");
  const completed = document.getElementById("completed");

  currentPlayerIndex =
    currentPlayerIndex === 0 ? playerNames.length - 1 : currentPlayerIndex - 1;
  playerDisplay.innerHTML = playerNames[currentPlayerIndex];

  if (hole == 18 && playerDisplay.innerText == playerNames[3]) {
    completed.innerHTML = "Finish Game";
    completed.setAttribute("onclick", "finishGame()");
  }

  if (
    completed.innerText == "Finish Game" &&
    playerDisplay.innerText !== playerNames[3]
  ) {
    completed.innerHTML = "Finish Hole";
    completed.setAttribute("onclick", "endGameNavigator()");
  }
}

function nextPlayerHandler() {
  const playerDisplay = document.getElementById("player");
  const completed = document.getElementById("completed");

  currentPlayerIndex = (currentPlayerIndex + 1) % playerNames.length;
  playerDisplay.innerHTML = playerNames[currentPlayerIndex];

  if (hole == 18 && playerDisplay.innerText == playerNames[3]) {
    completed.innerHTML = "Finish Game";
    completed.setAttribute("onclick", "finishHole(); endGameNavigator()");
  }

  if (
    completed.innerText == "Finish Game" &&
    playerDisplay.innerText !== playerNames[3]
  ) {
    completed.innerHTML = "Finish Hole";
    completed.setAttribute("onclick", "finishHole()");
  }
}

function minusOne() {
  const currentStrokes = document.getElementById("current-strokes");
  strokes--;
  if (strokes < 0) {
    return;
  }
  currentStrokes.innerHTML = `Strokes: ${strokes}`;
  return strokes;
}

function plusOne() {
  const currentStrokes = document.getElementById("current-strokes");
  strokes++;
  if (strokes <= 0) {
    strokes = 1;
  }
  currentStrokes.innerHTML = `Strokes: ${strokes}`;
  return strokes;
}

function player1Total() {
  const player1Score = document.getElementById("player1");

  for (let i = 0; i <= holeScoreP1.length - 1; i++) {
    p1Total += holeScoreP1[i];
    console.log(p1Total);
  }
  player1Score.innerHTML = `${playerNames[0]}: ${p1Total}`;
  p1Total = 0;
  return p1Total;
}

function player2Total() {
  const player2Score = document.getElementById("player2");

  for (let i = 0; i <= holeScoreP2.length - 1; i++) {
    p2Total += holeScoreP2[i];
    console.log(p2Total);
  }
  player2Score.innerHTML = `${playerNames[1]}: ${p2Total}`;
  p2Total = 0;
  return p2Total;
}

function player3Total() {
  const player3Score = document.getElementById("player3");

  for (let i = 0; i <= holeScoreP3.length - 1; i++) {
    p3Total += holeScoreP3[i];
    console.log(p3Total);
  }
  player3Score.innerHTML = `${playerNames[2]}: ${p3Total}`;
  p3Total = 0;
  return p3Total;
}

function player4Total() {
  const player4Score = document.getElementById("player4");

  for (let i = 0; i <= holeScoreP4.length - 1; i++) {
    p4Total += holeScoreP4[i];
    console.log(p4Total);
  }
  player4Score.innerHTML = `${playerNames[3]}: ${p4Total}`;
  p4Total = 0;
  return p4Total;
}

function finishHole() {
  const playerDisplay = document.getElementById("player");
  const visiblePlayer = playerDisplay.innerText;
  const currentStrokes = document.getElementById("current-strokes");

  if (visiblePlayer == playerNames[0]) {
    holeScoreP1[hole - 1] = strokes;
    if (strokes < 0) {
      holeScoreP1[hole - 1] = 0;
    }
  } else if (visiblePlayer == playerNames[1]) {
    holeScoreP2[hole - 1] = strokes;
    if (strokes < 0) {
      holeScoreP2[hole - 1] = 0;
    }
  } else if (visiblePlayer == playerNames[2]) {
    holeScoreP3[hole - 1] = strokes;
    if (strokes < 0) {
      holeScoreP3[hole - 1] = 0;
    }
  } else if (visiblePlayer == playerNames[3]) {
    holeScoreP4[hole - 1] = strokes;
    if (strokes < 0) {
      holeScoreP4[hole - 1] = 0;
    }
  }

  strokes = 0;
  currentStrokes.innerHTML = `Strokes: ${strokes}`;

  if (visiblePlayer == playerNames[0]) {
    player1Total();
  } else if (visiblePlayer == playerNames[1]) {
    player2Total();
  } else if (visiblePlayer == playerNames[2]) {
    player3Total();
  } else if (visiblePlayer == playerNames[3]) {
    player4Total();
  }

  if (visiblePlayer == playerNames[3]) {
    nextHole();
    nextPlayerHandler();
  } else {
    nextPlayerHandler();
  }

  localStorage.setItem("p1Score", JSON.stringify(holeScoreP1));
  localStorage.setItem("p2Score", JSON.stringify(holeScoreP2));
  localStorage.setItem("p3Score", JSON.stringify(holeScoreP3));
  localStorage.setItem("p4Score", JSON.stringify(holeScoreP4));

  console.log(holeScoreP1);
  console.log(holeScoreP2);
  console.log(holeScoreP3);
  console.log(holeScoreP4);
}

// On Page Load //
playerID.innerHTML = playerNames[0];
playerOne.innerHTML = `${playerNames[0]}: ${p1Total}`;
playerTwo.innerHTML = `${playerNames[1]}: ${p2Total}`;
playerThree.innerHTML = `${playerNames[2]}: ${p3Total}`;
playerFour.innerHTML = `${playerNames[3]}: ${p4Total}`;
