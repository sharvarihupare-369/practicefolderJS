
//Factory functions
function createAccount(name,type,accBalance){
    let account = {}
    account.name = name
    account.type = type
    account.accBalance = accBalance
    account.printdetails = function(){
        console.log('Name',this.name,'Type',this.type)
    }
    return account 
}

let acc1 = createAccount("Sharvari","savings",1000)
let acc2 = createAccount("Vivek","savings",2000)
let acc3 = createAccount("Namisha","savings",3000)
// console.log(acc1)
// acc1.printdetails()


function userDetails(firstname,lastname){
    let user = {}
    user.firstname = firstname
    user.lastname = lastname
    user.sayFullName = function(){
        console.log(firstname,lastname)
    }
    return user
}

let u1 = userDetails("Sharvari","Hupare")

// console.log(u1)
// u1.sayFullName()
 

//Constructor Function
function Cars(name,model,wheels){
    this.name = name
    this.model = model
    this.wheels = wheels
}

let c1 = new Cars('Tesla','3',4)

console.log(c1.constructor)



function circlefun(radius){
    let obj = {}
    obj.radius = radius
    obj.printarea = function(){
        console.log(`Area of circle is: ${3.14*obj.radius*obj.radius}`)
    }
    return obj
}

// let cir1 = circlefun(3)

// console.log(cir1)
// cir1.printarea()/

function Circlefun(radius){

    this.radius = radius
    this.printarea = function(){
        console.log(`Area of circle is: ${3.14*this.radius*this.radius}`)
    }
    
}

let circl1 = new Circlefun(3)
let circl2 = new Circlefun(4)
let circl3 = new Circlefun(5)
// console.log(circl1)
// circl1.printarea()
