const body = document.querySelector("body");
const button = document.querySelector(".change-color");
const colorValue = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function changeColor() {
  body.style.backgroundColor = getRandomHexColor();
  colorValue.innerText = getRandomHexColor();
}
button.addEventListener("click", changeColor);
