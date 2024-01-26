const enterUsername = document.getElementById("name-input");
console.log(enterUsername);

const greetingsName = document.getElementById("name-output");
console.log(greetingsName);

function getCurrentValue(event) {
  greetingsName.textContent = event.target.value.trim();
  if (event.target.value.trim() === "") {
    greetingsName.textContent = "Anonymous";
  }
}
enterUsername.addEventListener("input", getCurrentValue);
