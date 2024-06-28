// Global Variables //
let selectedButton = null;

// Functions //
// Saves the button selected at the game selection menu //
function saveSelection(button) {
  selectedButton = button.id;
  localStorage.setItem("savedGameMode", selectedButton);
}

function loadPage(page) {
  window.location.href = `${page}.html`;
}

// Currently unused, but available if dynamic pages are desired) //
function loadPage2(page) {
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
  xhr.open("GET", `${page}.html`, true);
  xhr.send();
}
