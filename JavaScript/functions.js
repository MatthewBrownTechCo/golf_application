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

// Next hole
function nextHole() {
  hole++;
  if (hole > 18) {
    hole = 18;
  }
  currentHole.innerHTML = "Hole: " + hole;
}

window.onload = function () {
  nextHole();
};

// Prev hole
function prevHole() {
  hole--;
  if (hole < 1) {
    hole = 1;
  }
  currentHole.innerHTML = "Hole: " + hole;
}

// Placeholder function for players 1-4
function prevPlayer() {}

function nextPlayer() {
  let i = 0;

  return function () {
    const defaultPlayer = playerDefault[i];
    const nextBtn = document.getElementById("player");
    i = (i + 1) % playerDefault.length;
    nextBtn.innerHTML = defaultPlayer;
    return defaultPlayer;
  };
}

const nextPlayerCycle = nextPlayer();

function nextPlayerHandler() {
  nextPlayerCycle();
}

window.onload = function () {
  nextPlayerHandler();
};
// end of section //

// Strokes function
function plusOne() {
  strokes++;
  if (strokes <= 0) {
    strokes = 1;
  }
  currentStrokes.innerHTML = "Strokes: " + strokes;
}

function minusOne() {
  strokes--;
  if (strokes < 0) {
    return;
  }
  currentStrokes.innerHTML = "Strokes: " + strokes;
}
