let button = document.querySelector("#btn")
let todolist = document.querySelector(".todo-list")
let input = document.querySelector("#enter")

let todos = []
window.onload = ()=>{
   todos =  JSON.parse(localStorage.getItem('todos')) ||[]
   todos.forEach((todo) =>addtodo(todo) );
}

button.addEventListener("click", ()=>{
    todos.push(input.value)
    localStorage.setItem('todos',JSON.stringify(todos))
    addtodo(input.value)
    input.value = ''
})

function addtodo(todo){
    let para = document.createElement("p")
    para.innerText = todo
    para.style.fontSize = 50
    todolist.appendChild(para)
    localStorage.setItem('todos',JSON.stringify(todos))
    para.addEventListener("click" , ()=>{
        para.style.textDecoration = "line-through"
        remove(todo)
    })
    para.addEventListener("dblclick", ()=>{
        todolist.removeChild(para)
        remove(todo)
    })
}

function remove(todo) {
    let index = todos.indexOf(todo)
    if(index>-1){
        todos.splice(index,1)
    }
}

