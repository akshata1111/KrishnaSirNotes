/* CURD:
    D --> Delete object properties
    syntax : delete objectName.keyName
*/
let obj = {
    a: 10,
    b: "hi",
    c: true
}
// console.log(obj) // { a: 10, b: 'hi', c: true }
// delete obj.c
// console.log(obj) // { a: 10, b: 'hi' }

/* 
# check is key present or not in object:
    1. hasOwnProperty():  objectName.hasOwnProperty('keyName')   
        Action: checking key present
        Return: Boolean
*/
// console.log(obj.hasOwnProperty("a")) // true
// console.log(obj.hasOwnProperty("fname")) // false

/* 
2. Object.keys(objectName)
    Action: collecting object keys
    Return: array

3. Object.values(objectName)
    Action : collecting object values
    Return : array

4. Object.entries(objectName)
    Action : collecting object keys and values
    Return : 2D array

5. Object.fromEntries(objectName)
    Action : creating object from 2D array
    Return : object
*/
// console.log(Object.keys(obj)) // [ 'a', 'b', 'c' ]
// console.log(Object.values(obj))  // [ 10, 'hi', true ]
// let arrayEntries = Object.entries(obj)
// console.log(arrayEntries) // [ [ 'a', 10 ], [ 'b', 'hi' ], [ 'c', true ] ]
// console.log(Object.fromEntries(arrayEntries))  // { a: 10, b: 'hi', c: true }

/* 
6. Object.create(arg)
    Action: creating object
    Return: object

7. Object.assign(arg1, arg2, ...)  
    arg1 --> Target object
    arg2, arg3, ... --> source objects
    Action: Creating object by using source object
    Return: object
*/

let obj2 = Object.create(null); // arg --> null, undefine, {}, {a:10}
console.log(obj2, typeof obj2)  //  [Object: null prototype] {} object

let combineObj = Object.assign(obj, {z:100}, {fname:"JS"});
console.log(combineObj)  // { a: 10, b: 'hi', c: true, z: 100, fname: 'JS' }