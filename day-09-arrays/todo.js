let todos = ["study JS", "study Japanese", "workout"];

//Using it with functions:
function addTodo(task) {

  todos.push(task);
  console.log(todos);
}

addTodo("read a book");
addTodo("call mom");

//this takes a position and uses splice
function removeTodo(index) {
    todos.splice(index ,1);
    console.log(todos);
}
removeTodo(2);