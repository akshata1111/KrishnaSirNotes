/*
// scope var -> G, F

  var a = 10;
  console.log(a); // 10

  function scope() {
    console.log(a); // 10
    var a2 = "fun variable";
    console.log(a2);  //  "fun variable"
  }
  scope();
  // console.log(a2);  //ReferenceError: a2 is not defined*********************


  // Block scope - if, for loop
  if (true) {
    var block = "block variable";
    console.log(block); // "block variable"
  }
  console.log("outsideBlock", block);  // "block variable"

  console.log("---For Loop-----")
  // for (let i=0; i<=5; i++){

  //   console.log(i) // 0-5
  // };

  // console.log(i) // ReferenceError: i is not defined

  for (var i = 0; i <= 5; i++) {
    console.log(i) // 0-5
  };
  console.log("outside of block---------")
  console.log(i) // 6  ??


  // everything in js is object:
  // console --> object
  // log() --> method
  // object.method()
  // .log(arug)

  // arr -> object
  // str -> object

  <script>

  const a = 10;
  console.log(a); // 10


  function scope(){
    console.log(a); // 10
    const a2 = "fun variable";
    console.log(a2);  //  "fun variable"

  }
  scope();
  console.log(a2);  // a2 not defined


  if(true){

    const block = "block variable";
    console.log(block); // "block variable"
  }
  console.log(block);  //  block not defined


</script>

//  # js is case sensitive:- 

//  H & h is different in js
console.log("h"=="H")  // false
console.log("h"==="H") // false

// Acme values



# What is js?
-Dynamically typed
-Synch
-Single thread
-Versatile
-object oriented- in everything is object. { { { }}}
-js case sensitive
*/

