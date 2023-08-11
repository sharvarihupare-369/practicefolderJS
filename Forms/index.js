//Without Form

// let inputEl = document.querySelector("#text")
// let select = document.querySelector("#gender")
// let terms = document.querySelector("#terms")

// let userInfo = {}

// function handleKey(e){
// //   console.log(e.target.value)
//    userInfo.email = e.target.value
// }

// function handleSelect(e){
//     userInfo.gender = e.target.value
// }

// function handleTerms(e){
//     // console.log(e)
//     userInfo.terms = e.target.checked
// }

// inputEl.addEventListener("keyup",handleKey)
// select.addEventListener("change",handleSelect)
// inputEl.addEventListener("keyup",handleKey)
// terms.addEventListener("input",handleTerms)
// select.addEventListener("input",handleSelect)
// inputEl.addEventListener("input",handleKey)








//Handling Forms with Events

let formEl = document.querySelector(".form")
let userInfoForm = {}

function handleSubmit(e){
    e.preventDefault()
//   console.log("form submitted")
//   console.log(formEl.elements.email)
//   console.log(formEl.elements.gender)
//   console.log(formEl.elements.terms)

   userInfoForm.email = formEl.elements.email.value
   userInfoForm.gender = formEl.elements.gender.value
   userInfoForm.terms = formEl.elements.terms.checked
   console.log(userInfoForm)

}

formEl.addEventListener("submit",handleSubmit)


