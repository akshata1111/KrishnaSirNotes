//  !=, !==
// ! --> Not
// = --> ==
// == --> ===
// Combination --> !=, !==

console.log(1 == 1)  // true
console.log(!(1 == 1))  // false
console.log(1 != 1)  // !  == // != // false

console.log(1 !== 1) // !  === // !==  // false
console.log(1 === "1")  // false
console.log(1 !== "1")  // !false // true

// Q. Value comparison & address(referance) comparison ?
let a = 1;
console.log(a == a)
console.log(1 == 1)  // true
// values datatype --> number
console.log("Hi" == "Hi") // true
// values datatype --> string
// RHS ==> value 
// can interact direct with values

// going to compare objects
// RHS ==> value ==> object (array, object)

let obj = {
    a: 10,
    b: "hi"
}
// value ==> object ==> values stored in key
// Nested structure for storing values
// obj.a -->  particular value can get

let arr = [1, 2, 3]
// arr[0] --> particular value can get
// value ==> object/Array ==> values stored in index number
// cant compare values directly by == operator

console.log([5] == [5])  // false

let aa = [5];
let bb = [5];

// solution for compare object: compare address(referance)
console.log(aa == bb) // false
console.log(aa == aa) // true
console.log(bb == bb) // true

    //-------------------------------------------------
    // 3. Ternary operators:  3 operands
    //     1. conditional operator.

    // Ternary --> 3 --> 3 operands


    (1 < 2) ? console.log("Condition:True") : console.log("Condition:False");