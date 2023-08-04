let firstbtn = document.querySelector(".firstbtn");
let secondbtn = document.querySelector(".secondbtn");
let divFirstEl = document.querySelector(".one");
let divSecondEl = document.querySelector(".two");

function colors(){
    let x = +Math.floor(Math.random() * 256);
    let y = +Math.floor(Math.random() * 256);
    let z = +Math.floor(Math.random() * 256);
  
    let rgbColor = `rgb(${x},${y},${z})`;
    return rgbColor
  //   console.log(rgbColor);
}


function hexcolors(){
   let hexColors = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
   let color = "#"
   
   for(let i=0; i<6; i++){

       let hexCode  = Math.floor(Math.random() * 16)
       color = color  + hexColors[hexCode]
       
    }

    return color;

}

firstbtn.addEventListener("click", () => {
  divFirstEl.style.backgroundColor = colors();
//   divFirstEl.style.backgroundColor = hexcolors();
});

 secondbtn.addEventListener("mousemove", () => {
    divSecondEl.style.backgroundColor = hexcolors();
    // divSecondEl.style.backgroundColor = colors();
  });
