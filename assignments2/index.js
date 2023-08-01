// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ["This", "is", "a", "collection", "of", "words"];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
// console.log(numbers.findIndex((el)=>{
//     return el === 101
// }))
console.log(numbers.indexOf(101))


// - Find the last index of `9` in numbers
console.log(numbers.lastIndexOf(9))



// - Convert value of strings array into a sentance like "This is a collection of words"
// console.log(strings.join(" "))


// - Add two new words in the strings array "called" and "sentance"
strings.push("called","sentence")
// console.log(strings)


// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
console.log(strings.join(" "))

// - Remove the first word in the array (strings)
// strings.shift()
// console.log(strings)

// - Find all the words that contain 'is' use string method 'includes'
// let findIsSen = strings.includes("is")
// console.log(findIsSen)
let filterIs = strings.filter((el)=>{
    return el.includes("is")
})
console.log(filterIs)

// - Find all the words that contain 'is' use string method 'indexOf'
let filterIsindexof = strings.filter((el)=>el.indexOf("is")>=0)
console.log(filterIsindexof)


// - Check if all the numbers in numbers array are divisible by three use array method (every)
let isdivisivblebythree = numbers.every((num)=>{
    return num % 3 == 0
})
console.log(isdivisivblebythree)

// -  Sort Array from smallest to largest
let sortAsc = [...numbers].sort((a,b)=>{
    return a - b;
})
console.log(sortAsc)


// - Remove the last word in strings
strings.pop()
// console.log(strings)

// - Find largest number in numbers
// console.log("largets number is ", (sortAsc.length - 1))
let largestNum = numbers.reduce((acc,curr)=>{
   acc = Math.max(acc,curr)
   return acc
},-Infinity)
// console.log(largestNum)

// - Find longest string in strings
let longestString = strings.reduce((acc,curr)=>{
    if(curr.length > acc.length){
        acc = curr
    }
    return acc
},"")
console.log(longestString)


// - Find all the even numbers
let isEven = numbers.filter((el)=>{
    return el % 2==0
})
console.log(isEven)


// - Find all the odd numbers
let isOdd = numbers.filter((el)=>{
    return el % 2 !== 0
})
console.log(isOdd)

// - Place a new word at the start of the array use (unshift)
strings.unshift("hello")
// console.log(strings)

// - Make a subset of numbers array [18,9,7,11]
let indexOf18 = numbers.indexOf(18)
let indexOf11 = numbers.indexOf(11)
// let subsetArray = [...numbers].splice(indexOf18,4)
let subsetArray = [...numbers].slice(indexOf18,indexOf11+1)
console.log(subsetArray)


// - Make a subset of strings array ['a','collection']
let indexofA = strings.indexOf("a")
let indexofCollection = strings.indexOf("collection")
let subsetString = strings.slice(indexofA,indexofCollection+1)
console.log(subsetString)


// - Replace 12 & 18 with 1221 and 1881
let replaceArray = numbers.map((el)=>{
    if(el == 12){
       return 1221
    }else if(el == 18){
        return 1881 
    }
  return el
})
// console.log(replaceArray)



// - Replace words in strings array with the length of the word
let stringsLengthArray = strings.map((el)=>{
    return el.length
})
// console.log(stringsLengthArray)


// - Find the sum of the length of words using above question
// let sum = 0;
// let add = stringsLengthArray.forEach((el) => {
//    sum += el.length
//    console.log(sum)

// })

// console.log(sum)

let add = stringsLengthArray.reduce((acc,curr)=>{
    acc = acc + curr
    return acc 
},0)
console.log(add)


// - Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" },
];
// - Find all customers whose firstname starts with 'J'
let startWithJ = customers.filter((el)=>{
    return el.firstname.startsWith("J")
})

// console.log(startWithJ)


// - Create new array with only first name
let newarray = customers.map((el)=>{
    return el.firstname
})
// console.log(newarray)

// let firstNameArray = customers.reduce((acc,curr)=>{
//     acc = curr.firstname
//     return acc
// },[])

// console.log(firstNameArray)



// - Create new array with all the full names (ex: "Joe Blogs")

// let fullNameArray = customers.map((el)=>{
//     return el.firstname.concat(" ", el.lastname)
// })
// console.log(fullNameArray)
    let fullNameArray = customers.map((el)=>{
        return el.firstname + " " + el.lastname;
    })

    // console.log(fullNameArray)


// - Sort the array created above alphabetically
   let sortedArray = fullNameArray.sort()
//    console.log(sortedArray)


// - Create a new array that contains only user who has at least one vowel in the firstname.
let vowelArray = customers.filter((el)=>{
    // return el.some((vowel)=>vowel.includes("a"))
    // if(el.firstname.includes("a") || el.firstname.includes("e") || el.firstname.includes("i") || el.firstname.includes("o") || el.firstname.includes("u")){
    //     return el
    // }
    if(el.firstname.includes("a","e","i","o","u")){
        return el
    }
})

console.log(vowelArray)








let words = [
    "mystery",
    "brother",
    "aviator",
    "crocodile",
    "pearl",
    "orchard",
    "crackpot",
    "rhythm",
  ];
  
  // - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
//   let findLongestWord = 
  
  // - Convert the above array "words" into an array of length of word instead of word.
  let wordsLen = words.map((el)=>{
    return el.length;
  })
  console.log(wordsLen)
  
  // - Create a new array that only contains word with atleast one vowel.
  let vowelWordArray = words.reduce((acc,curr)=>{
    if(curr.includes("a")|| curr.includes("e") || curr.includes("i") || curr.includes("o") || curr.includes("u")){
        acc.push(curr)
    }
       return acc
  },[])
  console.log(vowelWordArray)
  
  
  // - Find the index of the word "rhythm"
  console.log(words.indexOf("rhythm"))
  
  
  // - Create a new array that contians words not starting with vowel.
  let notVowel = words.reduce((acc,curr)=>{
    if(!curr.startsWith("a") && !curr.startsWith("e") && !curr.startsWith("o") && !curr.startsWith("u") && !curr.startsWith("i")){
        acc.push(curr)
    }
    return acc
  },[])
  console.log(notVowel)
  
  // - Create a new array that contianse words not ending with vowel
  
 
  
//   let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
  
  // - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
  
  
  // - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
  
  
  // - Create a new array that contains only even numbers
  
  
  // - Create  a new array that contains only odd numbers.
  
  // - Create a new array that should have true for even number and false for odd numbers.
  
  
  // - Sort the above number in assending order.

  
  // - Does sort mutate the original array?
  
  //yes it mutate the original array
  
  // - Find the sum of the numbers in the array.
  
  
  
  //- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
  
  
  
  let strings2 = [
    "seat",
    "correspond",
    "linen",
    "motif",
    "hole",
    "smell",
    "smart",
    "chaos",
    "fuel",
    "palace",
  ];
  
  // - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.