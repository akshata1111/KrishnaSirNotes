let num = 10;
num = "HI"; // updating value

let obj = {
    a: 10,
    abc: "JS",
    b: {
        c: {
            d: 2,
            e: [1, 3, 4]
        }
    },
    'f name': "TS"
}

/* 
    R --> Retrive/get object property
        1.Dot notation --> objectName.keyName
           #limitations: 
            -Dynamically not able to retrive data (in loop)
            -Not able to use for where in key contain space
        2.Bracket notation --> objectName['keyName']
*/

console.log(obj.a); // 10
console.log(obj.b.c.d); // 2
console.log(obj['b']['c']['d']); // 2
console.log(obj['abc']); // 'JS'
// console.log(obj.f name); // not able to use dot notation
console.log(obj['f name']); // 'TS'

//   U --> Update object property
obj.a = 20; // If property exist then we can update it
console.log(obj)
obj.z = 20; // If property Not exist then new property will add inside the object
console.log(obj)