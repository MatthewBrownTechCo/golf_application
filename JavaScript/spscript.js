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

// Prev hole
function prevHole() {
  const currentHole = document.getElementById("hole");
  hole--;
  if (hole < 1) {
    hole = 1;
  }
  currentHole.innerHTML = "Hole: " + hole;
}

// Next hole
function nextHole() {
  const currentHole = document.getElementById("hole");
  hole++;
  if (hole > 18) {
    hole = 18;
  }
  currentHole.innerHTML = "Hole: " + hole;
}

// Placeholder function for players 1-4

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
    completed.setAttribute("onclick", "finishHole()");
  }
}

function nextPlayerHandler() {
  const playerDisplay = document.getElementById("player");
  const completed = document.getElementById("completed");

  currentPlayerIndex = (currentPlayerIndex + 1) % playerNames.length;
  playerDisplay.innerHTML = playerNames[currentPlayerIndex];

  if (hole == 18 && playerDisplay.innerText == playerNames[3]) {
    completed.innerHTML = "Finish Game";
    completed.setAttribute("onclick", "loadPage('scorecard')");
  }

  if (
    completed.innerText == "Finish Game" &&
    playerDisplay.innerText !== playerNames[3]
  ) {
    completed.innerHTML = "Finish Hole";
    completed.setAttribute("onclick", "finishHole()");
  }
}

// end of section //

// Strokes function
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
  player1Score.innerHTML = "Player 1: " + p1Total;
  p1Total = 0;
  return p1Total;
}

function player2Total() {
  const player2Score = document.getElementById("player2");

  for (let i = 0; i <= holeScoreP2.length - 1; i++) {
    p2Total += holeScoreP2[i];
    console.log(p2Total);
  }
  player2Score.innerHTML = "Player 2: " + p2Total;
  p2Total = 0;
  return p2Total;
}

function player3Total() {
  const player3Score = document.getElementById("player3");

  for (let i = 0; i <= holeScoreP3.length - 1; i++) {
    p3Total += holeScoreP3[i];
    console.log(p3Total);
  }
  player3Score.innerHTML = "Player 3: " + p3Total;
  p3Total = 0;
  return p3Total;
}

function player4Total() {
  const player4Score = document.getElementById("player4");

  for (let i = 0; i <= holeScoreP4.length - 1; i++) {
    p4Total += holeScoreP4[i];
    console.log(p4Total);
  }
  player4Score.innerHTML = "Player 4: " + p4Total;
  p4Total = 0;
  return p4Total;
}

function finishHole() {
  const playerDisplay = document.getElementById("player");
  const playerNames = playerDisplay.innerText;
  const currentStrokes = document.getElementById("current-strokes");

  if (playerNames == playerNames[0]) {
    holeScoreP1[hole - 1] = strokes;
  } else if (playerNames == playerNames[1]) {
    holeScoreP2[hole - 1] = strokes;
  } else if (playerNames == playerNames[2]) {
    holeScoreP3[hole - 1] = strokes;
  } else if (playerNames == playerNames[3]) {
    holeScoreP4[hole - 1] = strokes;
  }

  strokes = 0;
  currentStrokes.innerHTML = "Strokes: " + strokes;

  if (playerNames == playerNames[0]) {
    player1Total();
  } else if (playerNames == playerNames[1]) {
    player2Total();
  } else if (playerNames == playerNames[2]) {
    player3Total();
  } else if (playerNames == playerNames[3]) {
    player4Total();
  }

  if (playerNames == playerNames[3]) {
    nextHole();
    nextPlayerHandler();
  } else {
    nextPlayerHandler();
  }

  console.log(holeScoreP1);
  console.log(holeScoreP2);
  console.log(holeScoreP3);
  console.log(holeScoreP4);
}
