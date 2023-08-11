
let containerEl = document.getElementById("container")
let inputEl = document.querySelector("#text")
let form = document.querySelector("#todoForm")
let buttonAdd = document.querySelector("#addbtn")
let searchForm = document.getElementById("searchForm")




searchForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    // console.log(e)
    getTodos(searchForm.search.value)
})

function getTodos(value="",page=1,limit=4){
    fetch(`https://todobackendjs.onrender.com/todos?q=${value}&_page=${page}&_limit=${limit}`).then((res)=>{
        return res.json()
    }).then((data)=>{
        // console.log(data)
        // console.log(data.length)
        showTodos(data)
        return data;
    }).catch((err)=>{
        console.log(err)
    })
}
getTodos()

let showTodos = (todos) => {
// console.log(todos)
containerEl.innerHTML = ''
todos.map((el,id)=>{
    // let box = `<div class="todo" style="display:flex;justify-content:space-between;align-items:center;padding:10px;
    // box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    // ">
    // <input type="checkbox"/>
    // <h3>${el.title}</h3>
    // <div>
    // <button style="background-color:teal;padding:8px 16px">Edit</button>
    // <button class="deleteBtn" style="background-color:red;padding:8px 16px">Delete</button>
    // </div>
    // <div>`
    // containerEl.innerHTML += box
    let editStatus = false
    
    
    let box = document.createElement("div")
   
    let input = document.createElement("input")
    input.setAttribute("type","checkbox")
    
   
    let h3 = document.createElement("h3")
    h3.innerText = el.title
   
    let inputUpdate = document.createElement("input")
    inputUpdate.setAttribute("type","text")
    inputUpdate.style.display = "none"
    // let h3 = document.createElement("h3")
    // h3.innerText = el.title
    

    let btnBox = document.createElement("div")
    
 
    let editbutton = document.createElement("button")
    editbutton.innerText = "Edit"
    editbutton.classList.add("edit")
    editbutton.addEventListener("click",(e)=>{
       
        editStatus = !editStatus
        
        // console.log(editStatus)
        if(editStatus){
            // input.style.display = "none"
            h3.style.display = "none"
            inputUpdate.style.display = "block"
            inputUpdate.value = el.title
            // inputUpdate.style.border = "1px solid black"
            inputUpdate.addEventListener("change",(e)=>{
                    updateTodos(el.id,e.target.value)
            })

         }else{
            h3.style.display = "block"
            inputUpdate.style.display = "none"

        }
   })

    
    let deletebutton = document.createElement("button")
    deletebutton.innerText = "Delete"
    deletebutton.classList.add("deletebtn")
    deletebutton.addEventListener("click",()=>{
        deleteTodos(el.id)
    })

    input.addEventListener("click",(e)=>{
       if(e.target.checked){
        h3.style.textDecoration = "line-through"
       }else{
        h3.style.textDecoration = "none"
       }
    })
    
    
   
    btnBox.append(editbutton,deletebutton)
    box.append(input,h3,inputUpdate,btnBox)
    containerEl.append(box)

})
}

async function addTodo(todo){
  try {

   
    // let todos =  getTodos()
    // console.log(todos)
    // let existTodo = todos.find(exist => exist.title == todo.title)
    

    // if(existTodo){
    //    return Toastify({
    //         text: "Todo is already exist",
    //         duration: 3000,
    //         destination: "https://github.com/apvarun/toastify-js",
    //         newWindow: true,
    //         close: true,
    //         gravity: "top", // `top` or `bottom`
    //         position: "left", // `left`, `center` or `right`
    //         stopOnFocus: true, // Prevents dismissing of toast on hover
    //         style: {
    //           background: "linear-gradient(to right, #00b09b, #96c93d)",
    //         },
    //         onClick: function(){} // Callback after click
    //       }).showToast();
    // }

     const response = await fetch('https://todobackendjs.onrender.com/todos',{
        method : "POST",
        headers : {
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify(todo)
     })
     const data = await response.json()
    //  console.log(data)
    
     getTodos()
  } catch (error) {
    console.log(error)    
  }
}





form.addEventListener("submit",async(e)=>{
    e.preventDefault()

    // console.log("yes")
    // console.log(e.target)
    let newTodo = {
        title : form.todo.value,
        status : false
    }
 
    if(form.todo.value){
        await addTodo(newTodo)
    }else{
        Toastify({
            text: "Todo cannot be empty!",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #F44336, #F57C00)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
    }
    inputEl.value = ""
})


function deleteTodos(todoId){
//   console.log(todoId)
   fetch(`https://todobackendjs.onrender.com/todos/${todoId}`,{
    method : "DELETE"
   }).then((res)=>res.json())
   .then((data)=>{
    console.log(data)
    getTodos()
   }).catch((err)=>{
    console.log(err)
   })
}


function updateTodos(todoId,val){
// console.log(todoId)
   fetch(`https://todobackendjs.onrender.com/todos/${todoId}`,{
    method : "PATCH",
    headers : {
        'Content-type' : 'application/json'
    },
    body : JSON.stringify({title:val})
   }).then((res)=>res.json()).then((data)=>{
    // console.log(data)
    getTodos()
   }).catch(err=>console.log(err))
} 

