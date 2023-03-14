






// const btn = document.getElementById('btn')! as HTMLButtonElement

const todoInput = document.getElementById('todoinput')! as HTMLInputElement
const todoContainer = document.getElementById('todoListItems')!

const form = document.querySelector('form')

interface Todo {
    text: string;
    completed: boolean
}

const todos: Todo [] = readTodos()

todos?.forEach(createTodo);


function readTodos(): Todo [] {
    const todosInLocal = localStorage.getItem('Todos')
    if(!todosInLocal){
        return []
    }
    return JSON.parse(todosInLocal)
}




form?.addEventListener('submit', handleSubmit)

function handleSubmit(e:SubmitEvent){
    e.preventDefault()

    const newTodo: Todo = {
        text : todoInput.value,
        completed: false
    }

     createTodo(newTodo)
    todos.push(newTodo)
    
    todoInput.value = ''
    localStorage.setItem('Todos', JSON.stringify(todos))
}

function createTodo(todo: Todo) {
    const newTodoItem =  document.createElement('li')
    const checkedInput =  document.createElement('input')
    checkedInput.type= 'checkbox';
    checkedInput.checked = todo.completed;
    checkedInput.addEventListener("change",(e) =>{
        todo.completed = !todo.completed
        localStorage.setItem('Todos', JSON.stringify(todos))
    })
    newTodoItem.append(todo.text)
    newTodoItem.append(checkedInput)
    todoContainer.append(newTodoItem)
}


