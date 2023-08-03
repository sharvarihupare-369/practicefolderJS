let ul = document.querySelector("ul")

let allpeople = got.houses.reduce((acc,curr)=>{
     acc = acc.concat(curr.people)
     return acc;
},[])
console.log(allpeople)

allpeople.forEach((el)=>{
    let li = document.createElement("li")
    li.classList.add("box");
    let img = document.createElement("img")
    img.classList.add("card");
    img.src= el.image
    

    let name = document.createElement("h2")
    name.innerText = el.name
    name.classList.add("card");

   

    let desc = document.createElement("p")
    desc.innerText = el.description
    desc.classList.add("card")

    let btn = document.createElement("button")
    let a = document.createElement("a")
    a.innerText = "Learn More!"
    // a.setAttribute("href",el.wikiLink)
    a.href = el.wikiLink
    
   
    btn.append(a)
    li.append(img,name,desc,btn)

    ul.append(li)

})
