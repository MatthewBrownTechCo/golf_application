// Global Variables //
const playerNames = [];

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

  localStorage.setItem("users", user);
}

function playerFill() {
  if (playerNames.length == 0) {
    playerNames.push("Player 1", "Player 2", "Player 3", "Player 4");
  } else if (playerNames.length == 1) {
    playerNames.push("Player 2", "Player 3", "Player 4");
  } else if (playerNames.length == 2) {
    playerNames.push("Player 3", "Player 4");
  } else if (playerNames.length == 3) {
    playerNames.push("Player 4");
  }

  localStorage.setItem("usernames", playerNames);
}

function initialUser() {
  const player = document.getElementById("player");
  if (player) {
    player.innerHTML = playerNames[0];
  } else {
    console.error("Element with id 'player' not found.");
  }
}
