
let persons = [
    { name: "John", grade: 8, sex: "M" },
    { name: "Sarah", grade: 12, sex: "F" },
    { name: "Bob", grade: 16, sex: "M" },
    { name: "Johnny", grade: 2, sex: "M" },
    { name: "Ethan", grade: 4, sex: "M" },
    { name: "Paula", grade: 18, sex: "F" },
    { name: "Donald", grade: 5, sex: "M" },
    { name: "Jennifer", grade: 13, sex: "F" },
    { name: "Courtney", grade: 15, sex: "F" },
    { name: "Jane", grade: 9, sex: "F" },
    { name: "John", grade: 17, sex: "M" },
    { name: "Arya", grade: 14, sex: "F" },
  ];
  
  // Create an array peopleName and store value of sex key from persons array
   let peopelName = persons.reduce((acc,curr)=>{
    acc.push(curr.name)
    return acc
   },[])
   console.log(peopelName)
  
  // Create an array peopleGrade and store the value of grade key from persons array
   let peopleGrade = persons.reduce((acc,curr)=>{
    acc.push(curr.grade)
    return acc;
   },[])
   console.log(peopleGrade)
  
  // Create an array peopleSex and store the value of sex key from persons array
  let peopleSex = persons.reduce((acc,curr)=>{
    acc.push(curr.sex)
    return acc
   },[])
   console.log(peopleSex)

  
  // Log the filtered named of people in peopleName that starts with 'J' or 'P'
  console.log(peopelName.filter((el)=>el.startsWith("J") || el.startsWith("P")))
  
  // Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
  console.log(peopelName.filter((el)=>el.startsWith("A")||el.startsWith("C")))
  
  // Log all the filtered male ('M') in persons array
  console.log(persons.filter((el)=>el.sex==="M"))
  
  // Log all the filtered female ('F') in persons array
  console.log(persons.filter((el)=>el.sex==="F"))
  
  // Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
  console.log(persons.filter((el)=>(el.sex==="F") && (el.name.startsWith("C") || el.name.startsWith("J"))))

  
  // Log all the even numbers from peopleGrade array
  console.log(peopleGrade.filter(el=>el%2==0))
  
  // Find the first name that starts with 'J' in persons array and log the object
  console.log(persons.filter((el)=>el.name.startsWith("J")))
  
  // Find the first name that starts with 'P' in persons array and log the object
  console.log(persons.filter((el)=>el.name.startsWith("P")))
  // Find the first name that starts with 'J', grade is greater than 10 and is a female
  console.log(persons.filter(el=>el.name.startsWith("J") && el.grade > 10 && el.sex=="F"))
   
  // Filter all the female from persons array and store in femalePersons array
  let femalePersons = persons.filter((el)=>el.sex==="F")
  console.log(femalePersons)

  // Filter all the male from persons array and store in malePersons array
  let malePersons = persons.filter((el)=>el.sex==="M")
  console.log(malePersons)

  // Find the sum of all grades and store in gradeTotal
  let gradeTotal = persons.reduce((acc,curr)=>{
    acc = acc + curr.grade
    return acc
  },0)
  console.log(gradeTotal)
  
  // Find the average grade
   let averageGrade = Math.floor(gradeTotal/persons.length)
   console.log(averageGrade)

  
  // Find the average grade of male
  let gradeMaleSum =0;
  let gradeMale = persons.filter((el)=>{
   
    if(el.sex === "M"){
        gradeMaleSum += el.grade
        return el
    }
  })
//   console.log(gradeMale)
//   console.log(gradeMaleSum)
 console.log(Math.floor(gradeMaleSum/gradeMale.length))
  
  // Find the average grade of female
  let gradeFemaleSum =0;
  let gradeFemale = persons.filter((el)=>{
   
    if(el.sex === "F"){
        gradeFemaleSum += el.grade
        return el
    }
  })
//   console.log(gradeFemale)
//   console.log(gradeFemaleSum)
 console.log(Math.floor(gradeFemaleSum/gradeFemale.length))
 
  
  // Find the highest grade
  let highestGrade = persons.reduce((acc,curr)=>{
    acc = Math.max(acc,curr.grade)
    return acc
  },-Infinity)
  console.log(highestGrade)
 
  
  // Find the highest grade for people whose name starts with 'J' or 'P'
  let highestGradeWithJP = persons.reduce((acc,curr)=>{
    if(curr.name.startsWith("J") || curr.name.startsWith("P")){
        acc = Math.max(acc,curr.grade)
    }
    return acc
  },-Infinity)
  console.log(highestGradeWithJP)

  // Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
//   let sortPeopleGradeAsc = [...peopleGrade].sort((a,b)=>a-b)
//   console.log(sortPeopleGradeAsc)
console.log(peopleGrade.sort((a,b)=>a-b))
  
  // Sort the peopleGrade in descending order
 console.log(peopleGrade.sort((a,b)=>b-a))
  
  
  // Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
  let sortPeopleGradeDesc = [...peopleGrade].sort((a,b)=>b-a)
  console.log(sortPeopleGradeDesc)
  
 
  // Sort the array peopelName in ascending `ABCD..Za....z`
  console.log(peopelName.sort())

  
  // Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
  let sortNameAsc = [...peopelName].sort()
  console.log(sortNameAsc)  
