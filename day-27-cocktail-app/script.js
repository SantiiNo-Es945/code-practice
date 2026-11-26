const input = document.getElementById("name");
const btn = document.getElementById("btn");
const list = document.getElementById("list");
async function search(name) {
  const response = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + name,
  );
  const data = await response.json();
  if (data.drinks === null) {
    return console.log("No drinks found");
  }
  console.log(data.drinks.length);
  data.drinks.forEach((drink) => console.log(drink.strDrink));
}

btn.addEventListener("click", () => {
  let newList = document.createElement("li");
  newList.textContent = input.value;
  console.log(input.value);
  search(input.value);
});
