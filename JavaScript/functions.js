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

// ------------------- //

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

// Placeholder function for players 1-4
function playersDefault() {}
