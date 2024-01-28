function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controls = document.getElementById("controls");
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");

const boxContainer = document.getElementById("boxes");
const input = document.querySelector("input");

function createBoxes(event) {
  event.preventDefault();
  const amount = input.value;
  let size = 30;

  if (amount >= 1 && amount <= 100) {
    boxContainer.innerHTML = "";
    for (let i = 0; i < amount; i++) {
      const div = document.createElement("div");
      div.style.width = "30px";
      div.style.height = "30px";
      div.style.backgroundColor = getRandomHexColor();
      size += 10;
      div.style.width = `${size}px`;
      div.style.height = `${size}px`;
      boxContainer.append(div);
    }
    input.value = "";
  }
}
function destroyBoxes() {
  boxContainer.innerHTML = "";
}
buttonCreate.addEventListener("click", createBoxes);
buttonDestroy.addEventListener("click", destroyBoxes);
