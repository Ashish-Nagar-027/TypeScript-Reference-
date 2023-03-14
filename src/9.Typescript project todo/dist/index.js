"use strict";
// const btn = document.getElementById('btn')! as HTMLButtonElement
var todoInput = document.getElementById('todoinput');
var todoContainer = document.getElementById('todoListItems');
var form = document.querySelector('form');
var todos = readTodos();
todos === null || todos === void 0 ? void 0 : todos.forEach(createTodo);
function readTodos() {
    var todosInLocal = localStorage.getItem('Todos');
    if (!todosInLocal) {
        return [];
    }
    return JSON.parse(todosInLocal);
}
form === null || form === void 0 ? void 0 : form.addEventListener('submit', handleSubmit);
function handleSubmit(e) {
    e.preventDefault();
    var newTodo = {
        text: todoInput.value,
        completed: false
    };
    createTodo(newTodo);
    todos.push(newTodo);
    todoInput.value = '';
    localStorage.setItem('Todos', JSON.stringify(todos));
}
function createTodo(todo) {
    var newTodoItem = document.createElement('li');
    var checkedInput = document.createElement('input');
    checkedInput.type = 'checkbox';
    checkedInput.checked = todo.completed;
    checkedInput.addEventListener("change", function (e) {
        todo.completed = !todo.completed;
        localStorage.setItem('Todos', JSON.stringify(todos));
    });
    newTodoItem.append(todo.text);
    newTodoItem.append(checkedInput);
    todoContainer.append(newTodoItem);
}
