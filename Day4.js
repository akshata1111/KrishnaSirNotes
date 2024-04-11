//Day4

// let a = 20;
// let a; --> variable decleration
// let a = 20; --> First time value assign to variable --> initialization 
// a = 10; --> value update ---> reassign value to variable

// let a = 10 --> redeclare the variable


// Variable initialization:

// var x;
// console.log(x); // undefined
// Default variable value is undefined

// let x;
// console.log(x); // undefined

// const x;
// console.log(x); // SyntaxError: Missing initializer in const declaration

// Redeclare variable:

// // Can not be redeclare variable with let keyword
// let a = 2;
// let a = "Hi"; // SyntaxError: Identifier 'a' has already been declared
// console.log(a);

// // Can not be redeclare variable with const keyword
// const a = 2;
// const a = "Hi"; // SyntaxError: Identifier 'a' has already been declared
// console.log(a);

// Can redeclare variable with var keyword
var a = 2;
console.log(a); // 2
var a = "Hi";   // value update for variable
console.log(a); // Hi

// Reassign/change/update variable value for variables:

// // can Reassign/change/update variable value with let keyword:
// let a = 20; // variable declared with initialize 20 value
// console.log(a);  // 20
// // Reassign/change/update variable
// a = "HI"   // HI
// console.log(a);

// // can not Reassign/change/update variable value with const keyword:
// const a = 20; // variable declared with initialize 20 value
// console.log(a);  // 20
// // Reassign/change/update variable
// a = "HI"   // TypeError: Assignment to constant variable.

// can Reassign/change/update variable value with var keyword:
var a = 20; // variable declared with initialize 20 value
console.log(a);  // 20
// Reassign/change/update variable
a = "HI"   // HI
console.log(a);

//  js is the object oriented lang
// Everything in js is a object

// js object
// let obj = {
//     // key : value
//     // key : value{
//     // key : value
//     // }
// };
// in js we have nested {{}} object structue
// outer big object is a window --> BOM, DOM....etc


// Scope: global, function, block/script scope.

// global => window object.

// function => 
// function funName() {
//     // script
//     // function scope
// }
// funName();

// block/script scope =>

// if (true) {
//     // block scope
// }

// for () {
//     // block scope
// }
