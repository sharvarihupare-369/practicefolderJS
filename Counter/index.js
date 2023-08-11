function main(){
  let incBtn = document.querySelector(".inc")
  let decBtn = document.querySelector(".dec")
  let resetBtn = document.querySelector(".reset")
  let counter = document.querySelector("h1")
  let count = 0
  
  incBtn.addEventListener("click",()=>{
    count += 1
    // counter.innerText = +counter.innerText + 1
    counter.innerText = count
  })

  decBtn.addEventListener("click",()=>{
    count -= 1
    // counter.innerText = +counter.innerText - 1
    counter.innerText = count
  })

  resetBtn.addEventListener("click",()=>{
    count = 0
    counter.innerText = count
  })
  }
  main()