
let start = [
    "Justin",
    "Andy",
    "Jenn",
    "Zack",
    "Scott"
]

// Console.log a sub array containing only "J" names 

let res = start.filter((name) => {
    return name[0] === "J"
})
console.log(res)

console.log(start.filter(name =>  name[0] === "J"))


let newArr = []
for (let i = 0; i< start.length; i++){
    if (start[i][0] === "J"){
        newArr.push(start[i])
    }
}

console.log(newArr)

// Find the average of all the students grades 

let students = [
    {
        name: "Andy",
        grade: 3.0
    },
    {
        name: "Bill",
        grade: 3.0
    },
    {
        name: "Jackie",
        grade: 2.8
    },
    {
        name: "Eli",
        grade: 4.0 
    },
    {
        name: "Zack",
        grade: 2.1 
    }
]
//1
let total = 0 
for (let student of students){
    console.log(student.grade)
    total += student.grade
}
let average = total / students.length

console.log(average)

//2
let total2 = 0
students.forEach(S => total2  += S.grade) 
let average2 = total2 / student.length

console.log(average2)

//3 
console.log(
    students.reduce((gpa, sg) => gpa += s.grade, 0) / students.length 
)

/*
let x = [1, 2, 3]
let res = x.map((x) => x * x) 
res.reduce((totalVal, curValue) => {totalVal += curValue}, 0)
*/ 

let result3 = [1, 2, 3]
.map((x) => x * x) 
.reduce((totalVal, curValue) => totalVal += curValue, 0) 

console.log(result3)


