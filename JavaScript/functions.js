// Transitions to a new html page dynamically, instead of loading it all
function loadPage(page) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        document.getElementById("content").innerHTML = xhr.responseText;
      } else {
        console.error("Failed to load page:", xhr.status);
      }
    }
  };
  xhr.open("GET", page + ".html", true);
  xhr.send();
}

// Saves the button selected at the game selection menu
function saveSelection(button) {
  selectedButton = button.id;
}

// Adds user and creates an ordered list
function addUser() {
  const nameElement = document.getElementById("user");
  const user = nameElement.value;
  nameElement.value = "";

  if (user.length < 3) {
    return alert("Names must be at least 3 characters long");
  }

  const list = document.getElementById("list");

  if (playerNames.length >= 4) {
    return alert("You can only have up to 4 players");
  }

  const nameList = document.createElement("li");
  const text = document.createTextNode(user);

  list.appendChild(nameList);
  nameList.appendChild(text);

  playerNames.push(user);

  nameList.setAttribute("onclick", "this.remove()");
}

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
  currentPlayerIndex =
    currentPlayerIndex === 0
      ? playerDefault.length - 1
      : currentPlayerIndex - 1;
  playerDisplay.innerHTML = playerDefault[currentPlayerIndex];
}

function nextPlayerHandler() {
  const playerDisplay = document.getElementById("player");
  currentPlayerIndex = (currentPlayerIndex + 1) % playerDefault.length;
  playerDisplay.innerHTML = playerDefault[currentPlayerIndex];
}

// end of section //

// Strokes function
function plusOne() {
  const currentStrokes = document.getElementById("current-strokes");
  strokes++;
  if (strokes <= 0) {
    strokes = 1;
  }
  currentStrokes.innerHTML = "Strokes: " + strokes;
  return strokes;
}

function minusOne() {
  const currentStrokes = document.getElementById("current-strokes");
  strokes--;
  if (strokes < 0) {
    return;
  }
  currentStrokes.innerHTML = "Strokes: " + strokes;
  return strokes;
}

function finishHole() {
  const player = document.getElementById("player");
  const playerNames = player.innerText;
  const currentStrokes = document.getElementById("current-strokes");

  if (playerNames == playerDefault[0]) {
    holeScoreP1[hole - 1] = strokes;
  } else if (playerNames == playerDefault[1]) {
    holeScoreP2[hole - 1] = strokes;
  } else if (playerNames == playerDefault[2]) {
    holeScoreP3[hole - 1] = strokes;
  } else if (playerNames == playerDefault[3]) {
    holeScoreP4[hole - 1] = strokes;
  }

  strokes = 0;
  currentStrokes.innerHTML = "Strokes: " + strokes;

  console.log(holeScoreP1);
  console.log(holeScoreP2);
  console.log(holeScoreP3);
  console.log(holeScoreP4);
}
