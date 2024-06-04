// ======================================================
// # Corecion: forcefully datatype conversion

console.log(1 < false) // 1 < 0 // false
console.log("" < 1)    // 0 < 1 // true
// jS truthy/falsy value
// "" --> false --> 0 --> wrong

console.log("Hi" > false)  // 1 > 0  // Expected result :true, but result : false
// "Hi"--> true --> 1

// Datatype conversion ---> processing --> Corecion
// Comparison on quantity like max, min --> Number
// Finally converting in number for comparision
console.log("Hi" > false)  // 0 > 0 --> false
// Data conversion -->
// "Hi" --> Convert number --> Number("Hi") --> NaN(falsy)--> 0

// console.log("" < 0)  // 0 < 0 // false
// console.log("Data conversion",Number("")) // 0

console.log("3" > true) // 3 > 1 // true
// "3" --> 3
// true-> 1
// console.log("Data conversion",Number("3")) // number 3

// ----------------------------------------------------------
// #string concatination : adding string  [Particularly + operator]

/* 
    str + str = str
    str + num = str
    num + str = str
    -----------------
    str - str = num
    str - num = num
    num - str = num
    -Same with *,/
*/

console.log("2" + "2")  // 22
console.log("Hi" + "JS")  // "HiJS"
console.log("2" + 2 + 1)  // 221  
console.log(2 + 1 + "2")   // 3+"2" // 32
console.log(2 + 1 + "HI") // 3HI

console.log(true + 1 + 1 + "HI")  // 1+1+1+"HI" // 3+"HI"// 3HI

console.log("2" - "2") // 0
console.log("2" - "HI") // NaN
console.log("2" * "2") // 4
console.log("2" / "2") // 1