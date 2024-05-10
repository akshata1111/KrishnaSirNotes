console.log("5" + -"5");

// corecion --> forfully datatype conversion
console.log(2 + 2) // 4
// String concatination (string)
// LHS  art operators RHS ---> string addition --> (+ only)
console.log("5" + "5"); // 55

// + --> converting in number
console.log(+"5")  // 5
console.log(-"5") // -5

console.log("5" + 2 + 1); // 521
console.log("5" + 5);   // 55
console.log("5" + -5);  // 5-5
console.log("5" + -"5"); // "5" + -5 // 5-5
// LHS -> "5"
// RHS -> -"5" --> -5
console.log(-"5" + "5"); // -5 + "5" // -55
//----------------------------

let a = 4;
let ans = a++ + --a + ++a + a--;  // 4+
console.log("ans :", ans)  //ans : 18

let x = 4; let y = 4;
let ans2 = x++ + --y + ++y + --x;  //4+3+4+4   //5+3+4+4 // 16


// console.log(++x) // 5
// console.log(x++)  // 5
console.log("ans2 :", ans2) // ans2 : 15
