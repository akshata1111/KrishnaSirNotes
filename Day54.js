/* 
Object is non-primitive datatype.
Object class methods to control object CURD operations:
        Object.preventExtensions()
        Object.isExtensible()
        Object.seal()
        Object.isSealed()
        Object.freeze()
        Object.isFrozen()

*/
let obj = {
    fname: "JS",
    num: 10
}
console.log(obj)
obj.printName = function (){
    return this.fname
}  // Add - Yes
obj.fname = "TS"  // Update - Yes
// delete obj.num // Delete - Yes
console.log(obj.printName()) //  invoke
console.log(obj)

/* 
8. Object.preventExtensions(objectName)
    Action : Not allow to add properties
    Return : object

9. Object.isExtensible(objectName)
    Action : checking object is Extensible or not
    Return : Boolean
*/
// console.log(Object.isExtensible(obj)) // true
// Object.preventExtensions(obj)
// obj.lName = "Hi" // Add - No
// console.log(obj.fname = "JS") // Update - Yes
// delete obj.num // Delete - Yes
// console.log(obj)
// console.log(Object.isExtensible(obj)) // false

/*
10. Object.seal(objectName)
        Action : Not allow to add and delete properties
        Return : object

11. Object.isSealed(objectName)
        Action : checking object is seal or not
        Return : Boolean
*/
// console.log(Object.isSealed(obj))  //  false
// Object.seal(obj)
// obj.lName = "Hi" // Add - No
// console.log(obj.fname) // invoke - Yes
// console.log(obj.fname = "JS") // update - Yes
// delete obj.num // Delete - No
// console.log(obj)
// console.log(Object.isSealed(obj)) // true

/* 
12. Object.freeze(objectName)
     Action : Not allow to add, update & delete properties
     Return : object

13. Object.isFrozen(objectName)
        Action : checking object is freez or not
        Return : Boolean
*/
console.log(Object.isFrozen(obj))  //  false
Object.freeze(obj)
obj.lName = "Hi" // Add - No
console.log(obj.fname = "JS") // update - No
delete obj.num // Delete - No
console.log(obj)
console.log(Object.isFrozen(obj)) // true