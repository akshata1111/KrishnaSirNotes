/*
# What ? Why ? How ?

# Front end technologies- HTML,CSS, JS
- HTML ?
- CSS ?
- Js ? Make dynamic web page - js help

# DOM - Document Object Model
- Modify the HTML structure, styling, content of web page, user input


# Js scripts:- .js file

# locations to put js code:-
- with HTML
1. inline js - onClick, onload
2. internal js
3. external js


# js Comments? use?
1. single line comment // [ctrl+/]
2. multiline comment /* */ [shift+alt+a]
/*
# synch Execution ?

# Read the js code:
-split it (keywords,variable, operators,value)
-variable stages:
 undeclared?
 declared?
 Initialization?
 update/change/reassign?
 Redeclared?

# variables:
 defination?

# variable declaration keywords diff: var, let const

                                var                        let             const
1. In js                        begining                   ES6              ES6
2. Initialization              N required                  N  required      Y required
2. value update                   Y                        Y                N(mutate only)
4. Redeclared variable            Y                        N                N
5. TDZ                            N                        Y                Y
6. Scope:                       F,G                       F,G,B            F,G,B  

#NOTE: Exception for undeclared variable and const keyword

# Js strict mode: 'use strict'
# Scope: G?, F?, B?
# Js object oriented lang

#Js Event loop:
EC?
phase?


#Hoisting in js?(variable and fun)*/

/* -split it (keywords,variable, operators,value)
-variable stages:
 undeclared- not define in script
 declared- Define in script
 -variable decleration : var, let const
 Initialization - Assign first time value
 update/change/reassign- Change first time value
 Redeclared- decleared variable second time
  */

// read variable:
//  console.log(str) // str is not defined
//  let str;
//  console.log(str)  // undefined
//  str = "hi"  // Initialization
//  console.log(str)  // hi
//  str = 10  // update/change/reassign
//  console.log(str) // 10

// //  Redeclared-
// var a = 100;
// console.log(a)  // 100
// var a = "JS";  //  Redeclared
// console.log(a)  //  JS


// let -> js keyword
// str -> variable / memory address
// = -> operator
// "js" -> value


//Initialization : required or not
// var a; // N
// let b; // N
// const c;  // Y
// console.log(c)

// change/update/reassign

// var a = 20;
// a = "hi"   // can update with var

// let b = 20;
// b = "hi";  // can update with let

// const c = 20;
// // TypeError: Assignment to constant variable.
// c = "hi";   // can not update with const keyword

// Redeclared
// var a =20;
// console.log(a);
// var a = 10;
// console.log(a);  // can redeclared with var

// let a =20;
// console.log(a);
// // SyntaxError: Identifier 'a' has already been declared
// let a = 10;
// console.log(a);  // can not redeclared with let

// const a = 20;
// c
// // SyntaxError: Identifier 'a' has already been declared
// const a = 10;
// console.log(a);  // can not redeclared with const


// // Variable decleration: Exception
// // G scope
// b = 10
// console.log(b); // 10

// // js strict mode
// 'use strict'

// a = 10
// console.log(a); // ReferenceError: a is not defined


//  scope: Global, Function, Block
// Global- window object ( can access in that object)
// Function - 

// function funName(){
//     // statement
//     // function scope
// }

// // Block- if(), for loop

// if(true){
//     // block scope
// }

// 1. var scope: G,F
// scope- can called restriction
// Can access in globally
// var a = 10;
// console.log(a);

// function funName() {
//     var b = "HI VAR";
//     console.log(b);  //   "HI VAR"
// }
// console.log(b);  // ReferenceError: b is not defined
// funName();

// Var not have block scope:
if (true) {
    var c = "HI Var in block";
    console.log(c); //  "HI Var in block"
}
console.log("outside BLOCK", c);  //outside BLOCK HI Var in block


// 2. let scope: G,F,B

// let a = 10; // Global
// console.log(a);

// function funName() {
//     let b = "HI LET";
//     console.log(b);  //   "HI LET"
// }
// // console.log(b);  // ReferenceError: b is not defined
// funName();

// if(true){
//     let c = "HI LET in block";
//     console.log(c); //  "HI LET in block"
// }
// console.log(c);  //ReferenceError: c is not defined

// 3. const scope: G,F,B