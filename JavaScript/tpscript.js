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
let threePutts = 0;
let p1Total = 0;
let p2Total = 0;
let p3Total = 0;
let p4Total = 0;
const playerID = document.getElementById("tp-player");
const playerOne = document.getElementById("tp-player1");
const playerTwo = document.getElementById("tp-player2");
const playerThree = document.getElementById("tp-player3");
const playerFour = document.getElementById("tp-player4");
const popup = document.getElementById("tp-popup");

// Functions //
function prevHole() {
  const currentHole = document.getElementById("tp-hole");
  hole--;
  if (hole < 1) {
    hole = 1;
  }
  currentHole.innerHTML = `Hole: ${hole}`;
}

function nextHole() {
  const currentHole = document.getElementById("tp-hole");
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
  const playerDisplay = document.getElementById("tp-player");
  const completed = document.getElementById("tp-completed");

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
  const playerDisplay = document.getElementById("tp-player");
  const completed = document.getElementById("tp-completed");

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
  const currentTp = document.getElementById("current-tp");
  threePutts--;
  if (threePutts < 0) {
    threePutts = 0;
  } else if (threePutts > 1) {
    threePutts = 0;
  }

  currentTp.innerHTML = `Three-Putts: ${threePutts}`;
  return threePutts;
}

function plusOne() {
  const currentTp = document.getElementById("current-tp");
  threePutts++;
  if (threePutts <= 0) {
    threePutts = 0;
  } else if (threePutts > 1) {
    threePutts = 1;
  }

  currentTp.innerHTML = `Three-Putts: ${threePutts}`;
  return threePutts;
}

function player1Total() {
  const player1Score = document.getElementById("tp-player1");

  for (let i = 0; i <= holeScoreP1.length - 1; i++) {
    p1Total += holeScoreP1[i];
  }
  player1Score.innerHTML = `${playerNames[0]}: ${p1Total}`;
  p1Total = 0;
  return p1Total;
}

function player2Total() {
  const player2Score = document.getElementById("tp-player2");

  for (let i = 0; i <= holeScoreP2.length - 1; i++) {
    p2Total += holeScoreP2[i];
  }
  player2Score.innerHTML = `${playerNames[1]}: ${p2Total}`;
  p2Total = 0;
  return p2Total;
}

function player3Total() {
  const player3Score = document.getElementById("tp-player3");

  for (let i = 0; i <= holeScoreP3.length - 1; i++) {
    p3Total += holeScoreP3[i];
  }
  player3Score.innerHTML = `${playerNames[2]}: ${p3Total}`;
  p3Total = 0;
  return p3Total;
}

function player4Total() {
  const player4Score = document.getElementById("tp-player4");

  for (let i = 0; i <= holeScoreP4.length - 1; i++) {
    p4Total += holeScoreP4[i];
  }
  player4Score.innerHTML = `${playerNames[3]}: ${p4Total}`;
  p4Total = 0;
  return p4Total;
}

function finishHole() {
  const playerDisplay = document.getElementById("tp-player");
  const visiblePlayer = playerDisplay.innerText;
  const currentTp = document.getElementById("current-tp");

  if (visiblePlayer == playerNames[0]) {
    holeScoreP1[hole - 1] = threePutts;
    if (threePutts < 0) {
      holeScoreP1[hole - 1] = 0;
    }
  } else if (visiblePlayer == playerNames[1]) {
    holeScoreP2[hole - 1] = threePutts;
    if (threePutts < 0) {
      holeScoreP2[hole - 1] = 0;
    }
  } else if (visiblePlayer == playerNames[2]) {
    holeScoreP3[hole - 1] = threePutts;
    if (threePutts < 0) {
      holeScoreP3[hole - 1] = 0;
    }
  } else if (visiblePlayer == playerNames[3]) {
    holeScoreP4[hole - 1] = threePutts;
    if (threePutts < 0) {
      holeScoreP4[hole - 1] = 0;
    }
  }

  threePutts = 0;
  currentTp.innerHTML = `Three-Putts: ${threePutts}`;

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
}

function openPopUp() {
  popup.classList.add("open-popup");
}

function closePopUp() {
  popup.classList.remove("open-popup");
}

// On Page Load //
playerID.innerHTML = playerNames[0];
playerOne.innerHTML = `${playerNames[0]}: ${p1Total}`;
playerTwo.innerHTML = `${playerNames[1]}: ${p2Total}`;
playerThree.innerHTML = `${playerNames[2]}: ${p3Total}`;
playerFour.innerHTML = `${playerNames[3]}: ${p4Total}`;
