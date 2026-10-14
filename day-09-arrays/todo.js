let todos = ["study JS", "study Japanese", "workout"];

//Using it with functions:
/*function addTodo(task) {

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

*///here we work with list, in order to print each task in its own line
function listTodos() {
    for (let i = 0; i < todos.length; i++) {
        console.log(todos[i]);
    }
}
listTodos();