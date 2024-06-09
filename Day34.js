/* 
** Control Flows in JS:
    1. Conditional statements --> if-else, switch case
    2. Loops --> for, while, do-while, for-in, for-of
 */

// 3. if else-if statement:

// console.log("Code Before the if statement...")
// if (true) {
//     console.log('if block of code executing for first true condition')
// } else if (true) {
//     console.log('else-if block of code executing for second true condition')
// } else {
//     console.log('else block of code executing for false condition/default')
// }
// console.log("Code After the if statement...")

// 4. if if (nested if statement):

// if (true) {
//     console.log("if 1")
//     if (false) {
//         console.log("if 2")
//     } else {
//         console.log("Else:if 2")
//     }
// } else {
//     console.log("Else:if 1")
// }

// if-else: 
// For nested
// for check multiple conditions

// switch case:

// switch (key) {
//     case value:
//         console.log('case1')

//     case value:
//         console.log('case2')

//     default:
//         console.log('Default case')
// }
// key == value --> true/false --> case code execute
// fall out error --> problem
// break;

// switch (1) {
//     case 0:
//         console.log('case1')
//         break;
//     case 1:
//         console.log('case2')
//         break;
//     default:
//         console.log('Default case')
// }
// console.log("Hi, I am out of statement");
// jump keywords: break, continue, return

/*

let day = 11; 
let dayName;
switch (day) {
    case 1:
        dayName = 'Monday';
        break;
    case 2:
        dayName = 'Tuesday';
        break;
    case 3:
        dayName = 'Wednesday';
        break;
    case 4:
        dayName = 'Thursday';
        break;
    case 5:
        dayName = 'Friday';
        break;
    case 6:
        dayName = 'Saturday';
        break;
    case 7:
        dayName = 'Sunday';
        break;
    default:
        dayName = 'Invalid day';
}
console.log(Today is ${dayName});*/


/*
Assignment: 
Above switch case example, get day variable value from the user


Assignments: Conditional statements -->

1. Ask user to enter a number and check if that number is even or odd.
2. Ask user to enter 3 numbers, find the largest amongst 3. (ternary & if-else)
3. Ask user to enter 3 marks (Sci,Eng,Maths). Find Avg mark.
      if avg > 60  first class
      if avg > 50  second class
      if avg > 30  Pass
      if avg < 30	 Fail   
4. Ask user to enter the electricity units consumed. Find the total bill amount.
      1-100   	2rs/unit
      100-200  3rs/unit    
      >200     5rs/unit   
5. You are shopping from flipkart, below are the discount rates applicable.
   Ask user to enter gross-amt and calculate net-amt.
      1-2000  0% discount
      >2000   5% discount
      >5000   10% discount
   
  or     Month

Q7. Ask user person1 age & Person2 age, according to it show msg young/old/equals too
*/