// varible declaration: var, let, const

    // ES6:
    // Not best practice to write js

    // without keyword when declared variable he have global scope- no matter where its declared
    // e.g: Global,Function,Block
    
    //a = 10;  // undeclared variable
    //console.log("without keyword", a);

    // js strict mode- js applied standard/best practices
    // normal js running in without strict mode

    'use strict'
    // js script will execte in strict mode
    // Where its introduce from there strict mode activates

    a = 10;
    // With strict mode : Uncaught ReferenceError: a is not defined
    // Without strict mode : 10
    console.log(a);

    // variable initialization: variable declare and value assign

    console.log(ax);  // undefined
    // console.log(y);  // Cannot access 'y' before initialization
    // console.log(z);  // Cannot access 'z' before initialization

    var ax = "I am var";
    let y = "I am let";
    const z = "I am const";

    // getting values
    console.log(ax);
    console.log(y);
    console.log(z);

    // We can access var variable before the initialization.
    // Bcoz with var variable declared with undefined
    // We can not access let, const variables before the initialization.


    // Event loop in js:
    // Have phase:
    // 1. Memory creation
    // 2. Code execution */