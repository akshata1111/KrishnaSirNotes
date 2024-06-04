// 3. Ternary operators:  3 operands
//     1. conditional operator.

// Ternary --> 3 --> 3 operands

true ? console.log("Condition:True") : console.log("Condition:False");  // Condition:True
false ? console.log("Condition:True") : console.log("Condition:False"); // Condition:False
// Entity ?
// Last Boolean entity
// true/false, condition
(1 < 2) ? console.log("Condition:True") : console.log("Condition:False"); // Condition:True
"" ? console.log("Condition:True") : console.log("Condition:False"); // Condition:False
// return
"" ? 10 : 100;

console.log("" ? 10 : 100)  // 100 --> return
let val = "" ? 10 : 100; // return and assign to val
console.log(val)  //  100

// Q. 4,1,8 find max value using conditional operator --> 11,90,50    87,23,33

let x = 87
let y = 23
let z = 33

let grt1 = x > y ? x : y;
let grt2 = grt1 > z ? grt1 : z;
console.log(grt2);

/* 
** Js code running line by line---> But,
    1. Want to run some block code as per the contion/requirement
    2. Want to Repeat the code of block as per the contion/requirement
-Solution : Use JS control flows.

** Conrol Flows in JS:
    1. Conditional satements --> if-else, switch case
    2. Loops --> for, while, do-while, for-in, for-of
 */