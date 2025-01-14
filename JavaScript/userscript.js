// Global Variables //
const playerNames = [];
const bannedNames = new Set();

// Functions //
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

  localStorage.setItem("playerNames", JSON.stringify(playerNames));
}

function refreshData() {
  window.location.href = "users.html";
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

  localStorage.setItem("playerNames", JSON.stringify(playerNames));
  window.location.href = `strokeplay.html`;
}
