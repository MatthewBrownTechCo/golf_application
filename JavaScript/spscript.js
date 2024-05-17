playerNames = {
  Names: [],
};

function addName1() {
  const nameElement = document.getElementById("name1");
  const name1 = nameElement.value;
  nameElement.value = "";

  if (name1.length < 3) {
    return alert("Names must be at least 3 characters long");
  }

  const list = document.getElementById("list");

  if (list.childNodes.length > 3) {
    return alert("You can only have up to 4 players");
  }

  const nameList = document.createElement("li");
  const text = document.createTextNode(name1);

  list.appendChild(nameList);
  nameList.appendChild(text);

  if (playerNames[0] == undefined) {
    playerNames["Names"].push(name1);
  } else if (playerNames[1] == undefined) {
    playerNames["Names"].push(name1);
  } else if (playerNames[2] == undefined) {
    playerNames["Names"].push(name1);
  } else if (playerNames[3] == undefined) {
    playerNames["Names"].push(name1);
  }

  nameList.setAttribute("onclick", "this.remove()");
}

console.log(playerNames);
