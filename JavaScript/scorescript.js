// Local Storage Fetch //
const p1ScoreValue = localStorage.getItem("p1Score");
const p1Parsed = JSON.parse(p1ScoreValue);
const p2ScoreValue = localStorage.getItem("p2Score");
const p2Parsed = JSON.parse(p2ScoreValue);
const p3ScoreValue = localStorage.getItem("p3Score");
const p3Parsed = JSON.parse(p3ScoreValue);
const p4ScoreValue = localStorage.getItem("p4Score");
const p4Parsed = JSON.parse(p4ScoreValue);
const storedNames = localStorage.getItem("playerNames");
const playerNames = JSON.parse(storedNames);

console.log(holeScoreP1);
console.log(holeScoreP2);
console.log(holeScoreP3);
console.log(holeScoreP4);

// Global Variables //

const player2Final = document.getElementById("player2End");
const player3Final = document.getElementById("player3End");
const player4Final = document.getElementById("player4End");

function player1Total() {
  const player1Final = document.getElementById("player1End");
  let p1Total = 0;

  for (let i = 0; i <= p1Parsed.length - 1; i++) {
    p1Total += p1Parsed[i];
  }
  player1Final.innerHTML = `${playerNames[0]}: ${p1Total}`;
  return;
}

function player2Total() {
  const player2Final = document.getElementById("player2End");
  let p2Total = 0;

  for (let i = 0; i <= holeScoreP2.length - 1; i++) {
    p2Total += holeScoreP2[i];
    console.log(p2Total);
  }
  player2Final.innerHTML = `${playerNames[1]}: ${p2Total}`;
  return;
}

function player3Total() {
  const player3Final = document.getElementById("player3End");
  let p3Total = 0;

  for (let i = 0; i <= holeScoreP3.length - 1; i++) {
    p3Total += holeScoreP3[i];
    console.log(p3Total);
  }
  player3Final.innerHTML = `${playerNames[2]}: ${p3Total}`;
  return;
}

function player4Total() {
  const player4Final = document.getElementById("player4End");

  for (let i = 0; i <= holeScoreP4.length - 1; i++) {
    p4Total += holeScoreP4[i];
    console.log(p4Total);
  }
  player4Final.innerHTML = `${playerNames[3]}: ${p4Total}`;
  return;
}
