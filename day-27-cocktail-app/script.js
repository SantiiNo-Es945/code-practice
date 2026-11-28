const input = document.getElementById("name");
const btn = document.getElementById("btn");
const list = document.getElementById("list");
async function search(name) {
  const response = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + name,
  );
  const data = await response.json();
  list.textContent = "";

  if (data.drinks === null) {
    list.textContent = "No drinks found";
    return
  }
  console.log(data.drinks.length);

  data.drinks.forEach((drink) => {
    let newList = document.createElement("li");
    newList.textContent = drink.strDrink;
    list.appendChild(newList);
  });
}

btn.addEventListener("click", () => {
  console.log(input.value);
  search(input.value.trim());
});
