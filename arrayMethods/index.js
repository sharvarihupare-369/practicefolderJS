//-flat           ---> not mutates
//-concat         ---> mutates
//-push           ---> mutates
//-pop            ---> mutates
//-shift          ---> mutates
//-unshift        ---> mutates
//-indexOf        ---> not mutates
//-lastIndexOf    ---> not mutates
//-includes       ---> not mutates
//-reverse        ---> mutates
//-splice         ---> mutates
//-slice          ---> not mutates

let colors = ["Aqua","Brown","Black","Gold"]
let colors2= ["Green","Purple","Blue","Red"]
let nums = [1,2,[3,4,[5,6,[7,8]]]]
let nums1 = [1,2,3,4,5,6,3]

//flat (not mutate)
//  nums = nums.flat()
//  console.log(nums)

//concat (mutate the array)
// colors = colors.concat(colors2,nums)
// console.log(colors)

//push (mutate) ==> add element at end of array

// colors = colors.push("Silver")
// console.log(colors)

// colors.push("Silver")
// console.log(colors)


//pop() (mutate) 
// colors.pop()
// console.log(colors)

//shift() ==> removes element from start of array and respective elements pushed at lower index ==> mutates
// colors.shift()
// console.log(colors)

//unshift ==> adds element from start of array and respective elements pushed at higher index ==> mutates
// colors.unshift("Aqua")
// console.log(colors)

//indexOf ==> used to find first index of the element and returns the index and if that element is not present then it returns -1 ==> not mutate
// console.log(colors.indexOf("Aqua"))


//lastIndexOf ==> used to find last index of the element and returns the index and if that element is not present then it returns -1 ==> not mutate
// console.log(nums1.lastIndexOf(3))


//includes ==> returns boolean value that is true or false ==> not mutate
// console.log(colors.includes("Gold"))


//reverse ==> reversing index of array i.e. first index becomes last and last becomes the first ==> mutates
// console.log(colors.reverse())

//splice and slice is used for removing any specific element from array 

//splice ==> from starting index it will remove everything   ==>mutates arrray
//returns the array of those elements which are deleted
//splice(whentoStart,howManyelementsWanttoDelete,addSomething)
//splice(StartIndex,DeleteCount,AddElements)

// let newColors=colors.splice(1,2,"White")
// console.log(newColors)


// slice ==> does not mutates array ==> return element that got deleted from array ==> return array after deleteing the elements
//slice(start,end)
// console.log(colors)
// let ncolors = colors.slice(0,3)
// console.log(ncolors)


