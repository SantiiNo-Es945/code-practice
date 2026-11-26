async function search(name) {
    const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + name);
    const data = await response.json();
    if (data.drinks === null) {
        return console.log("No drinks found");
    }
    console.log(data.drinks.length);
    data.drinks.forEach((drink) => console.log(drink.strDrink));

}
search("mojito");
