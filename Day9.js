/* 
// scope: let -> G,F,B

// Global---------------------
let a = "Global A";
let a2 =  "Global A2";
console.log(a);      //  "Global A"
console.log(a2);  // "Global A2"

// Function ----------------------
function scope(){
    console.log("--Fun start--");
    console.log(a2);  // "Global A2"
    a2 = "Global updated A2-Function"
    console.log(a2);  // "Global updated A2-Function"
    

    let a = "Function A";
    console.log(a);  // "Function A"

    console.log("--Fun End--")
};
console.log("--Before Fun calling--")
console.log(a2); // "Global A2"
scope();
console.log("--Fun Outside--")
console.log(a);   // "Global A"   
console.log(a2);  // "Global updated A2-Function"

// // Block -----------------------------------
// if(true){
//     console.log("--Block start---")
//       console.log(a2); //  "Global A2"
//       a2 = "Global updated A2-Block"
//       console.log(a2); // "Global updated A2-Block"


//     let a = "Block A"
//     console.log(a); // "Block A"

//     console.log("--Block End---")
// }

# Temporal dead zone: (TDZ)=> Time/space in bt script load or memory creation and variable initialization.****
    // var - No TDZ
    // let, const - Yes TDZ


    console.log(a) // undefined
    // console.log(b) // ReferenceError: Cannot access 'b' before initialization
    // console.log(c) // ReferenceError: Cannot access 'c' before initialization
    // TDZ -  For let (line 8 to 14) and const (line 9 to 15);

    var a = 10;
    let b = 20;
    const c = 30;

    console.log(a) // 10
    console.log(b)
    console.log(c)



    // Function hoisting:-
    // Function decleration=>

    // funName();
    // function funName(){
    //     //
    // };
    // funName()*/