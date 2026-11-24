async function getTodo() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (!response.ok) {
        throw new Error("Request failed: " + response.status);
    }
    const data = await response.json();
    console.log(data.length);
    const completedTodos = data.filter((todo) => todo.completed);
    console.log(completedTodos.length);
    completedTodos.forEach((todo) => console.log(todo.title));
  } catch (error) {
    console.log("Something went wrong");
    console.log(error.message);
    console.log(error.cause);
  }
}
getTodo();
