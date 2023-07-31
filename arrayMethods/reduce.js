// reduce --> reducing collection of value into different shape of value or single value --> accepts two params cb and initialValue
//it returns any kind of value that we want 

let colors = ["Aqua","Brown","Black","Gold","Green","Purple","Blue","Red"]
let nums = [1,2,3,4,5,6,8,9,456,345,234,156]

// nums.reduce(cb,initialValue)

// arr.reduce((accumulator,currentValue,index,array)=>{},initialValue)
let sum = nums.reduce((acc,curr)=>{
    // acc==initialValue for first time so acc = 0 for first time  
     // curr = 1 for first time
     //cb => acc + curr = 0 + 1 = 1
     //whatever returns from cb function becomes the next value of accumulator
     //second time 1 + 2 =3
    return acc + curr
},0)

console.log(sum)


let allColors = colors.reduce((acc,curr)=>{
    acc = acc +  curr + " "
    return acc 
},"")

console.log(allColors)