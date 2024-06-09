/* 
Q. Find number factorial.
     4! = 4*3*2*1
*/

function factorial(num) {
    // console.log(num) // 4, 3, 2, 1, 0
    if (num == 0) return true;
    return num * factorial(num - 1);
  }
  // console.log(4 * 3 * 2 * 1)  // 24
  // console.log(factorial(4)) // 24
  
  /* 
  # wait in cypress :
   1. Static/implicit wait
   2. Dynamic/Explicit wait
  
    timeout --> command wait
    for script wait -->
    cy.wait(1000) -->  Static/implicit wait
    cy.intercept()  --> Dynamic/Explicit wait 
  */
  
  function wait(button) {
    cy.get("body").then(body => {
      if (body.find(button).length == 0) {
        cy.wait(1000);
        wait();
      } else {
        return true;
      };
    });
  };
  // use:
  wait("button css");
/*
  Topic : functions
Completed......


JavaScript :

** Topic covered ==>


1.	JavaScript introduction
2.	What JavaScript is?
3.	Application of JavaScript
4.	First JavaScript script.
5.	Comments in JS
6.	How JS script executes: 
1)	Internal JS
2)	External JS File

7.	Variables in JS:
1)	| ├── var
2)	| ├── let
3)	| └── const
4)	| const for object.

8.	Strict mode in js
9.	Variable Hoisting, TDZ

10.	variable scopes:
1)	| ├── Global scope
2)	| ├── Local scope
3)	| ├── Block scope

11.	Data types in JS:

12.	Primitive/immutable Data types(6):- 
1)	string 
2)	Boolean
3)	Undefined
4)	Null
5)	Number
6)	Bigint
7)	Symbol

13.	Non-Primitive/mutable data types:- 
1)	Object (E.g.Date,);
2)	Array
3)	Function  
4)	RegEx 

14.	window methods: String(), Number(), Maths Methods
a.	Dialogue boxes : alert(),confirm(),prompt()

15.	Operators:
1)	| ├── Arithmetic
2)	| ├── Assignment
3)	| ├── Comparison
4)	| ├── Logical
5)	| ├── Unary
6)	| └── Ternary (Conditional)

16.	Coercion:

17.	Control Flow/Conditionals:
1)	| ├── if statement
2)	| ├── else statement
3)	| ├── else if statement
4)	| ├── switch statement(case, default)

18.	Loops
1)	| ├── for loop
2)	| ├── while loop
3)	| └── do-while loop
4)	| ├── for...in
5)	| └── for...of (Object methods)
6)	| break
7)	| continue
8)	| return
9)	| Nested for loop (Pattern print)

19.	Functions:
1)	| ├── Function declaration
2)	| ├── Function expression
3)	| ├── Arrow function
4)	| ├── IIFE (Immediately Invoked Function Expression)
5)	| ├── Higher order function
6)	| ├── Callback function
7)	| └── Constructor Function 
8)	| └── Generators function
9)	| └── Function Hoisting:
10)	| └── Closures (Lexical scope)
11)	| └── Default Parameters in function-ES6
12)	| └── 'this' In short 
13)	| └── function recursion (factorial)

Confirm and revise...
*/