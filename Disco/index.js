let containerEl = document.querySelector(".container")


function getRandomNumber(max){
    return Math.floor(Math.random()*max)
}


function colors(){
    let x = +Math.floor(Math.random() * 256);
    let y = +Math.floor(Math.random() * 256);
    let z = +Math.floor(Math.random() * 256);
  
    let rgbColor = `rgb(${x},${y},${z})`;
    return rgbColor
  //   console.log(rgbColor);
}


function generateHexColors(){
    let colorsArray = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
    let color = "#"
    for(let i=0; i<6; i++){
        color = color + colorsArray[Math.floor(Math.random()*16)]
    }
    // console.log(color)
    return color
}
// generateHexColors()

function createGrid(){
    for(let i=0; i<500; i++){
        // let box = document.createElement('div')
        // box.classList.add("boxEl")
        // containerEl.append(box)
        let box = `<div style="width:70px; height:70px; display:grid; border:1px solid black; place-items:center"></div>`
        containerEl.innerHTML += box
    }
    
    return containerEl.children
}


let smallboxes = createGrid()
console.log(smallboxes)

containerEl.addEventListener("click",()=>{
    for(let i=0; i<smallboxes.length; i++){
        smallboxes[i].style.backgroundColor = generateHexColors()
        smallboxes[i].textContent = getRandomNumber(500)
    }
})
















