
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
 


function Cars(name,model,wheels){
    this.name = name
    this.model = model
    this.wheels = wheels
}

let c1 = new Cars('Tesla','3',4)
console.log(c1)