// Global Variables //
const playerNames = [];

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

  nameList.setAttribute("onclick", "this.remove()");

  nameList.addEventListener("mouseenter", function () {
    this.classList.add("pointer");
  });

  nameList.addEventListener("mouseleave", function () {
    this.classList.remove("pointer");
  });

  playerNames.push(user);

  localStorage.setItem("playerNames", JSON.stringify(playerNames));
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
}

function initialUser() {
  const player = document.getElementById("player");
  if (player) {
    player.innerHTML = playerNames[0];
  } else {
    console.error("Element with id 'player' not found.");
  }
}

function pageNavigator() {
  const selectedButton = localStorage.getItem("savedGameMode");

  window.location.href = `${selectedButton}.html`;
}
