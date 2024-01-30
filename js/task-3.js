const enterUsername = document.getElementById("name-input");
const greetingsName = document.getElementById("name-output");
function getCurrentValue(event) {
  let username = event.target.value.trim();
  greetingsName.textContent = username;
  if (username === "") {
    greetingsName.textContent = "Anonymous";
  }
}
enterUsername.addEventListener("input", getCurrentValue);
