{/* <li>
Finish Frontend Simplified
<button class="todo__delete">
  x
</button>
</li> */}

const list = document.querySelector('.list')
const input = document.querySelector('input')

let todoList = []
let todoInputValue = ""
let cnt = 0;

function onInput(event){
    todoInputValue = event.target.value
}

function addTodo(){
    if(!todoInputValue){
        return;
    }
    todoList.push({
        id: cnt++, 
        task: todoInputValue})
    render()
    input.value = ""
    todoInputValue = ""
}

function deleteTodo(id){
    todoList = todoList.filter((todo) =>{
        return todo.id !== id
    })
    render()
}

function render(){
list.innerHTML = todoList.map(
    (ele) =>
    `<li>
        ${ele.task}
        <button class="todo__delete" onclick = "deleteTodo(${ele.id})">
        x
        </button>
    </li>`
).join("")
}
