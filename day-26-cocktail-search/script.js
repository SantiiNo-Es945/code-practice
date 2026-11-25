async function search() {
    const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita");
    const data = await response.json();
    console.log(data.drinks.length);
    data.drinks.forEach((drink) => console.log(drink.strDrink));

}
search();
