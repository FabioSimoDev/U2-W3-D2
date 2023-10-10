const savedNameDiv = document.getElementById("savedName");
const savedName = localStorage.getItem("userName");
if (savedName) {
  savedNameDiv.textContent = `Previous Name: ${savedName}`;
}

function saveName() {
  const nameInput = document.getElementById("nameInput");
  const userName = nameInput.value.trim();

  if (userName !== "") {
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      savedNameDiv.textContent = `Previous Name: ${storedName}`;
    }
    localStorage.setItem("userName", userName);
  }
}

function removeName() {
  localStorage.removeItem("userName");
  savedNameDiv.textContent = "Previous Name: ";
}

const timerDiv = document.getElementById("timer");
let elapsedTime = parseInt(sessionStorage.getItem("elapsedTime")) || 0;
timerDiv.textContent = `${elapsedTime} seconds`;

function updateTimer() {
  timerDiv.textContent = `${elapsedTime} seconds`;
  elapsedTime++;
  sessionStorage.setItem("elapsedTime", elapsedTime);
}

setInterval(updateTimer, 1000);
