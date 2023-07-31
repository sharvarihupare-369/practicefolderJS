//forEach    ==> does not return anything it returns undefined
//map       ==> returns same size array
//filter    ==> returns same size or smaller size
//sort      ==> mutates original array // returns same size of array
//find      ==>  returns individual element
//findIndex  ==> returns index of that element
//every      ==> returns true or false
//some       ==> returns true or false
//reduce

// let colors = ["Aqua","Brown","Black","Gold","Green","Purple","Blue","Red"]
// let nums = [1,2,3,4,5,6,8,9,456,345,234,156]

// function forEachElement(arr,cb){
//     for(let i=0;i <arr.length; i++){
//         const ele = arr[i]
//         cb(ele)
//     }
// }

// let allColors = "";


// function forEachColor(color){
//     allColors += color + " "
// }

// forEachElement(colors,forEachColor)
// forEachElement(nums,forEachColor)
// colors.forEach(forEachColor)
// console.log(allColors)




let colors = ["Aqua","Brown","Black","Gold","Green","Purple","Blue","Red"]
let nums = [1,2,3,4,5,6,8,9,456,345,234,156]


// colors.forEach(function(nums){
//     console.log(nums)
// })
// colors.forEach((nums)=>console.log(nums))


//map==> accepts cb function and that cb takes 3 vals element,index and array and returned value gets stored in new array and that new array is returned from map function ==> always return same size of array
// let doublenums = nums.map((number,index,arr)=>{
//     return number * 2
// })

// console.log(doublenums)

//filter ==> it is used to filter out elements from array
// cb function will return true and false and store true value in new array

let isEven = nums.filter((num,index,arr)=>{
    return num % 2 ==0
})

console.log(isEven)


//find ==> find accepts cb fun and that cb return true or false ==> if valuw present in array it will return it otherwise if not present it will return undefined
//find will always return only one value
//returns first value that matches the condition in the callback function

let findReturn = nums.find((num)=>{
    return num>5
})

// console.log(findReturn)

//findIndex ==> //returns  index of first value that matches the condition in the callback function

let findIndexReturn = nums.findIndex((num)=>{
    return num>5
})

// console.log(findIndexReturn)


//some ==> accepts a cb fun and that cb returns true or false based on value that we passed
//that cb fun needs to return true at least once for any of the element and if it returns true for any of the element then the whole function return true otherwise it wil return false 

let someReturn = nums.some((num)=>{
    return num > 1000
})

// console.log(someReturn)


// let someReturnColors = colors.some((color)=>{
//     return color.includes("ree")
// })
// console.log(someReturnColors)

//every ==> accepts a cb fun and that cb returns true or false based on value that we passed
//that cb fun needs to return true for every element  and if it returns true for every of the element of array then the whole function return true otherwise if any of the element returns false then it wil return false 



let everyReturnColors = colors.every ((color)=>{
    return color.includes("a")
})
console.log(everyReturnColors)

//sort ==> sort array in ascending order 
//for strings based on abcde... it sorts(aplhabetical sorting)
let newColors = colors.sort()
console.log(newColors)

//sort method does string sort ---> means when  "a" > "A" //o/p true bcuz the precedence is like abcde...xyz > ABCDE...XYZ // in string comparision happens based on alphabeticals
//So here in below example nums getting sorted as string sort    
let newNums = nums.sort()
console.log(newNums)
//string sort is not useful for numbers for that we will pass compare function inside sort 
function comparefunction(a,b) {
    // compare function returns three types of values positive,negative or 0
    // if it returns negative
    // negative < 0 then it will return a 
    // positive > 0 then it will return b 
    // 0 then everything remains same 
    return a - b; //  ascending order
    // return b - b; //  descending order
}



let nnums = nums.sort((a,b)=>{
    return a-b
})

console.log(nums)


let sorted = [...nums].sort((a,b)=>{
    return a-b
})
console.log(sorted)
