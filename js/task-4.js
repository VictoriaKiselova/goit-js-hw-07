let form = document.querySelector(".login-form");
let input = document.getElementsByTagName("input");

function valueСollection(event) {
  event.preventDefault();
  if (event.target.email.value === "" || event.target.password.value === "") {
    alert("All form fields must be filled in");
  }
  const listValue = {
    email: event.target.email.value.trim(),
    password: event.target.password.value.trim(),
  };
  console.log(listValue);
  form.reset();
}
form.addEventListener("submit", valueСollection);
