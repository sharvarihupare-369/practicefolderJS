let form = document.querySelector("form")

let usernameErr = ""
let usernameSucc= ""
function doesContainNum(str){
    return str.split("").some(e => Number(e))
}

function handleSubmit(e){
    e.preventDefault()
    console.dir(e.target)

    let usernameElm = e.target.elements.username
    let parentElm = usernameElm.parentElement;
    if(usernameElm.value === ""){
        usernameErr = "Can't be empty"
        parentElm.classList.add("error")
    }else if(usernameElm.value.length < 5){
        usernameErr = "Cant be less than five characters!"
        parentElm.classList.add("error")
    }else if(!doesContainNum(usernameElm.value)){
        usernameErr = "Must contain At least a number"
        parentElm.classList.add("error")
    }else{
        usernameErr = ""
        usernameSucc="Success"
        parentElm.classList.add("sucess")
        parentElm.classList.remove("error")
    }
    
    usernameElm.nextElementSibling.innerText = usernameErr
    
}

form.addEventListener("submit",handleSubmit)