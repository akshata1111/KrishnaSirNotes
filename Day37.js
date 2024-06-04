// for-in, for-of : ES6
// No condition check
// No updation

// 1. for-in loop -->
// for(let variableNmae in objectName){
// // Block of code
// }
// // in --> iterating propertyName/key or index from the object

let obj = {
    fname: "JS",
    lname: "AA",
    age: 20,
}
let str = "Hi JS"
let arr = [10, 20, 30, "str"]


// for (let key in obj) {
//     console.log(key) // fname, lname,   age
//     console.log(obj[key]) // JS, AA, 20
// }

// for (let index in arr) {
//     console.log(index) //0,1,2,3 
//     console.log(arr[index]) // 10,20,30,str
// }

// for (let index in str) {
//     // console.log(index) //0,1,2,3,4 s
//     console.log(str[index]) // H,i, ,J,S
// }

//========================================
// 2. for-of loop -->
// for(let variableNmae of objectName){
// // Block of code
// }
// // of --> iterating values from the object

// for (let value of arr) {
//     console.log(value) //10,20,30,str
// }

// for (let value of str) {
//     console.log(value) // H,i, ,J,S
// }