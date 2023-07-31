//charAt
//toUpperCase
//toLowerCase
//trim
//trimEnd
//trimStart
//concat
//endsWith
//includes
//indexOf
//lastIndexOf
//padEnd
//padStart
//repeat
//replace
//slice
//split
//substring

const username = "Sharvari"
const sentence = "Quick fox jumps over the lazy dog"

//charAt --> Method that gives the character at specific index

console.log(username.charAt(1))

//toUpperCase 
console.log(username.toUpperCase())

//toLowerCase
console.log(username.toLowerCase())

//trim --> Removes all the white spaces in the start(leading) and in the end(lagging)
let msg = "   Hello World    "
// console.log(msg)
console.log(msg.trim())
console.log(msg.trimStart())
console.log(msg.trimEnd())

//concat --> concatinating multiple string values
console.log(username.concat(" ",sentence))

//endsWith ==> returns true or false based on the string ends with that specific character or value or not 
console.log(username.endsWith("Hello"))
console.log(username.endsWith("i"))

//startsWith ==> returns true or false 
console.log(username.startsWith("s"))
console.log(username.startsWith("S"))

//includes ==> returns true or false
console.log(sentence.includes("fox"))

//indexOf
console.log(sentence.indexOf("r"))

//lastIndexOf
console.log(sentence.lastIndexOf("a"))

//padEnd ==> add padding at end of string
//padEnd(count,character)
console.log(username.padEnd("20","."))
console.log("24".padEnd("5",0))

//padStart ==> add pading at start of string
console.log(username.padStart("20","."))
console.log("24".padStart("5",0))


//repeat ==> repeating same string multiple times
//repeat(count)
console.log(username.repeat(3))

//replace ==> replace a character or specific set of characters from string
//replace(whatDoyouwantToreplace,replacementValue)
console.log(sentence.replace("fox","dog"))

//replaceAll ==> replaceAll the characters
// console.log(username.replaceAll("a","i"))

//slice ==> returns all the characters from startIndex to one less to endIndex
// If we dont pass second param then it will startfrom given index and go till end
//slice(startIndex,endIndex)

console.log(username.slice(0,4))
// console.log(username.slice(0))

//split ==> split into small chunks ==> return an array
console.log(sentence.split(" "))

//substring ==> used to taking out small portion from string
//substring(Start,End)
console.log(username.substring(0,4))
