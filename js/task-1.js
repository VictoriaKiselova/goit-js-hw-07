const categoriesList = document.getElementById("categories");
const listItems = categoriesList.querySelectorAll(".item");
console.log(`Number of categories : ${listItems.length}`);

listItems.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  console.log(`Category: ${title}`);
  const quantity = item.querySelectorAll("li");
  console.log(`Elements: ${quantity.length}`);
});
