/*---------------------------------------------------
•	value copy : different addresses pointing to the different values
*/
// let arr1 = [10, 20]
// let arr2 = arr1.slice(0);
// console.log(arr1, arr2);  //[ 10, 20 ] [ 10, 20 ]
// arr2.push(5);
// console.log(arr1, arr2); // [ 10, 20 ] [ 10, 20, 5 ]
// arr1.push("Hi");
// console.log(arr1, arr2); // [ 10, 20, 'Hi' ] [ 10, 20, 5 ]
//----------------------------------
// let arr1 = [10, 20]
// arr1.slice(0); 
// console.log(arr1); // [ 10, 20 ] 
// arr1.push(0); 
// console.log(arr1); // [ 10, 20, 0 ] 
//------------------------------------

// Nested object structure:
// shallow copy:
// let arr4 = [10, 20, [1, 2]]
// let arr5 = arr4.slice(0);
// console.log(arr4, arr5) // [ 10, 20, [ 1, 2 ] ], [ 10, 20, [ 1, 2 ] ]
// arr4.push(50);
// console.log(arr4, arr5) // [ 10, 20, [ 1, 2 ], 50 ], [ 10, 20, [ 1, 2 ] ]
// arr4[2].push(0);
// console.log(arr4, arr5) // [ 10, 20, [ 1, 2, 0 ], 50 ] [ 10, 20, [ 1, 2, 0 ] ]

// Deep copy:
let arr4 = [10, 20, [1, 2]]
let arr5 = structuredClone(arr4)
console.log(arr4, arr5) // [ 10, 20, [ 1, 2 ] ], [ 10, 20, [ 1, 2 ] ]
arr4.push(30);
console.log(arr4, arr5) // [ 10, 20, [ 1, 2 ], 30 ] [ 10, 20, [ 1, 2 ] ]
arr4[2].push(10);
console.log(arr4, arr5) // [ 10, 20, [ 1, 2, 10 ], 30 ] [ 10, 20, [ 1, 2 ] ]
arr5[2].push(100);
console.log(arr4, arr5) // [ 10, 20, [ 1, 2, 10 ], 30 ] [ 10, 20, [ 1, 2, 100 ] ]


/*

# Working with Primitive and Non-Primitive datatypes:
    1. comparsion
    2. Pass by
    3. Copy
---------------------------------
// Primitive datatype: Direct value stored on the address
    let a = 10;
// Non-Primitive datatype: Nested address-values pairs stored on the address
    let arr = [1, 2, 3]
    let arry = [1, 2, 3]

--------------------------------
1. comparsion:  
  # value comparison: comparsion operator can directly compare values
    1 == 1  // true
    arr == arr // true

  # address comparison: comparsion operator can not compare nested stored values
    [1,2] == [1,2] // false
    arr == arry // false
    arr == arr // true
-----------------------------------

2. Pass by: At time of function calling

        function update(para) {
            // If para primitive its creating new memory in block
            // If para Non-primitive its creating new address (para) in block and pointing to the arr value
            // update operations
        }
        update(a) // Primitive --> Value copy --> Passing value (Pass by value)
        update(arr) // Non-Primitive --> address copy --> Passing address (Pass by address)
------------------------------------

3. Copy:
     A. value : Memory Allocation (1 seperate address for 1 seperate value)
        # Types of value copy:
          1. Shallow copy : combination of value and address copy for nested object structure
          2. Deep copy : Totally seperate value copy with all nested object structure
     B. address/refrance/variableName : 1 value(memory creation) for multipal addresses

*/