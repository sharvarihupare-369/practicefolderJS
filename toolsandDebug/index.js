
// let house = {
//     name : "Stark",
//     members : [first]
// }

// let user = {
//     name : "John",
//     members : house
// }

// user.age = 18

// console.log(user.name)

// console.log(user)

// function sayHello(info){
//     alert(info.name)
// }

// sayHello(user)


// const num1 = 1
// const num2 = 2
// const num3 = 3
// const num4 = 4
// const num5 = 5
// const num6 = 6
// const num7 = 1
// const num8 = 1
// const num9 = 1

// console.log("") 


//Sematic logging
// console.warn("Hello Testing!")
// console.error("Hello Testing!")
// console.info("Hello Testing!")

// // String substitution
// console.log("Hello %cWorld","color:red") //%c ==> for style
// console.log("Hello %sWorld","Test ") //%s ==> for replacing


let firstName = "Sharvari"
let lastName = "Hupare"
// let fullName = firstNam + lastName

// try {
//      var fullName = firstName + lastName

// } catch (error) {
//     alert(error)
// } finally {
//     alert("Finally")
// }

// alert(firstName)
// alert(lastName)
// alert(fullName)






function add(a,b){
    return a + b
}

function substract(a,b){
    return a - b
}

let result,expected;

function test(message,callback){
    try {
        callback
        console.log(`✅`,message)
    } catch (error) {
        console.error(error)
        console.log(`❌`,message)
    }
}

function testAdd(){
    result = add(3,6)
    expected =10
    if(result != expected){
        throw new Error(`${result} is not equal to ${expected}`)
    }
}

test("adding 2 and 4",testAdd)

function subTest(){
    result = substract(6,3)
    expected =10
    if(result != expected){
        throw new Error(`${result} is not equal to ${expected}`)
    }
}

test("subtract 6 and 3",testAdd)



