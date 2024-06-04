/* // 3. Comparison Operators: <, >, <=, >=, ==, ===, !=, !==
// LHS operator RHS --> Boolean --> T/F

console.log(1 > 2)  // false
console.log(1 < 2)  //  true

// = --> Assigne operator, like let a = 10
// when using with other operator its equal to (==) operator
// <=
console.log(1 < 1) // false
console.log(1 <= 1) // less than OR equal to // true
// OR (||) --> T || T --> T
console.log(1 <= 2) // less than OR equal to // true
console.log(2 <= 1) // false

// >=
console.log(4 >= 4) // true
console.log(4 >= 2)  // true
console.log(4 >= 5)  // flase


/* 
=, ==, ===
= --> Assigne operator
== --> Loos Comparision operator : return --> Boolean
    LHS == RHS
    let a = 10;
    value comparision
    Datatype conversion (with coercion)
    comparision


=== --> strict Comparision operator (2 things comparing)
    value && datatype comparision
    comparing without coercion
*/
// // ==
// console.log(1 == 1) // true
// console.log(1 == "1") // true
// // 1
// // "1" --> coercion happening --> "1" --> 1
// console.log(1 == "") // false
// console.log(false == "") // true
// console.log(1 == true)  //  true
//-----------------------------
// ===
console.log(1 === 1) // true 
// value --> 1, datatype --> number (LHS, RHS)
console.log(1 === "1") // false
// Value && datatype --> T && T --> T
// value --> 1, datatype --> Number and string
// Without coercion comparision

console.log(1 === "") // false
// T && T --> T
console.log(false === "") // false
console.log(1 === true)  //  false

/* 
Q. Diff ==, === ?

            ==                                          ===
1. Loose comparision bt LHS and RHS          Strict comparision bt LHS and RHS
2. Value comparision                         value and(&&) datatype comparision
3. LHS and RHS entities converting           3. comparing LHS and RHS without coercion 
   into values with coercion then 
   comparing                
  
*/


//  !=, !==
// ! --> Not
// = --> ==
// == --> ===
// Combination --> !=, !==

console.log(1 != 1)