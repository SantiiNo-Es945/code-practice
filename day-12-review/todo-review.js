let todos = ["clean the house", "study japanese", "workout"];

function addTodo(task) {
    todos.push(task);
    console.log(todos);
}
addTodo("sleep");

function removeTodo(index){
    todos.splice(index, 1);
    console.log(todos);
}
removeTodo(1);

function listTodos(){
    for (let i = 0; i < todos.length; i++) {
        console.log(todos[i])
    }
}
listTodos();