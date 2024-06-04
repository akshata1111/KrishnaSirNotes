// Global methods:
// String(), Number(), Math(), alert(), confirm(), prompt()

// Methods Receiving user input from the browser : 
// alert(), confirm(), prompt()

// alert(arg) --> arg = msg
// Action: showing msg to user on browser
// Return: undefined

// console.log(alert("I am alert method")) // undefined

// confirm(arg)--> arg = msg
// Action: showing msg to user on browser and collecting user input
// Return: Boolean --> true/false
// Press OK --> true
// Press cancel --> false

// E.g: Feedback from user
console.log(confirm("Are you completed js cource ?")) // true/false

// prompt(arg1, arg2)
// arg1 -> msg
// arg2 -> inputbox default text
// Action: collecting data from user
// Return: string
// DOM, Browser --> all are in string


// let var const
// const --> cant update value(immutable datatype)
// mutable datatype--> we can update the value

// const a = "JS"
// mutable -> can update
// immutable --> can not update
// const --> Cant update value with const
//  a = 10
//  console.log(a)  // TypeError: Assignment to constant variable.

 // With const can mutate value/data
 // With the mutable datatype-> e.g array, object

const arr4 = [1, 2, 3]
console.table(arr4)
arr4.length = 0;  // can mutate
console.log(arr4)  // []
console.table(arr4)

const obj = { fName: "Js" }
obj.fName = "TS"  // mutate
console.log(obj) // { fName: "TS"}