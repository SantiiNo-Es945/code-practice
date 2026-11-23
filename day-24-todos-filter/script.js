async function getTodo() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    console.log(data.length);
    const completedTodos = data.filter((todo) => todo.completed);
    console.log(completedTodos.length);
    completedTodos.forEach((todo) => console.log(todo.title));
    
}
getTodo();
