
function main(){


let inputEl = document.querySelector("#text")
let root = document.querySelector("ul")

let allTodos = JSON.parse(localStorage.getItem("todos")) ||  [{name:"Play BasketBall",isDone:false},{name:"Cricket",isDone:false}]

function handleInput(e){
    let value = e.target.value
    if(e.keyCode === 13  && value !== ""){
        let todo = {
            name : value,
            isDone : false
        }
    
        allTodos.push(todo)
        value = ""

        createUI(allTodos,root)
    }

    localStorage.setItem("todos",JSON.stringify(allTodos))
   

}

function handleDelete(e){
 let  id = e.target.dataset.id
  allTodos.splice(id,1)
  localStorage.setItem("todos",JSON.stringify(allTodos))
  createUI(allTodos,root)
}

function handleToggle(e){
//  console.log(e.target.dataset.id)
   let id = e.target.dataset.id
   allTodos[id].isDone = !allTodos[id].isDone
   localStorage.setItem("todos",JSON.stringify(allTodos))
   createUI(allTodos,root)
}

function createUI(data,rootEl){
    rootEl.innerHTML = ""
    data.forEach((todo,index)=>{
        let li = document.createElement("li")
        li.classList.add("liEl")
        let input = document.createElement("input")
        input.type = "checkbox"
        input.addEventListener("input",handleToggle)
        input.setAttribute("data-id",index)
        input.checked = todo.isDone
        let p = document.createElement("p")
        p.innerText = todo.name
        let span = document.createElement("span")
        span.innerText = "X"
        span.setAttribute("data-id",index)
        span.addEventListener("click",handleDelete)
        
        li.append(input,p,span)
        rootEl.append(li)
    })
 
}

createUI(allTodos,root)
inputEl.addEventListener("keyup",handleInput)

}

main()