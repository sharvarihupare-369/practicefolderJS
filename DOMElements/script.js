/*

Write a function named `createInputElm` that accepts two parameter (label and `type`) type
default value to be "text" and return the input element inside label. (create it using `createElement`)

*/

// Your code goes here
 
//    

function createInputElm(lab,type="text"){
    let lab = document.createElement("label")
    lab.innerText = lab

    let input = document.createElement("input")
    input.setAttribute("type",type)

    lab.append(input)
    console.log(lab)
    return lab;
}

createInputElm("Your name")

createInputElm("Your age","number")
  
  // TEST
   //<label>Your name: <input type="text"></label>
  //<label>Your age: <input type="number"></label>
  
  // 2. Do the same thing as above using string literal like `<h1>Hello</h1>`
  
  // Your code goes here
  
  function createInputElme(label,type="text"){
    let htmltype = `<label>${label}: <input type=${type} /></label>`
}

createInputElme("Your name")

createInputElme("Your age","number")
  
  // TEST
  //<label>Your name: <input type="text"></label>
 //<label>Your age: <input type="number"></label>
  
  // 3. Create a function named `createList` that accept and array of data like ['Mango', 'Apple', 'Banana'] and returns
  // the html for the link like <ul> <li>Mango</li>  <li>Apple</li>  <li>Banana</li> </ul>
  // Your code goes here
  
  // TEST
    function createList(arr=[]){
       let ul = document.createElement("ul")
       ul.innerHTML = arr.map((el)=> "<li>"+ el +  "</li>").join("")
       document.body.append(ul)
    }

   createList(['Mango',"Apple","Banana"])

    // let ul = document.createElement("ul");
  
    // ul.innerHTML = arr.map((arr) => "<li>" + arr + "<li>").join("");
    // return ul;
  

  
  // 4. Create a function named `createTodoList` that accept and array of data like [{name: "Learn DOM", isDone: false}, {name: "Learn JS", isDone: true}] and returns
  // the html for single todo will look like given below
  /* 
  <ul>
    <li>
      <p>Learn DOM</p>
      <input type="checkbox" checked name="" id="">
      <span>X</span>
    </li>
  </ul>
  */
  
  // Your code goes here
  
  
  // TEST
  // createTodoList([
  //   { name: "Learn DOM", isDone: false },
  //   { name: "Learn JS", isDone: true },
  // ]);
  // createTodoList([
  //   { name: "Learn DOM", isDone: false },
  //   { name: "Learn React", isDone: true },
  //   { name: "Learn JS", isDone: true },
  // ]);