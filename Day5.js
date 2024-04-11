//Day5

/*let a = 20;   // G,F,B
    const b = 10; // G,F,B
    var c = 5;  // G,F

    console.log("Global",a, b, c);  // Access globally

    function checkScope() {
        console.log("Fun",a, b, c); // Access in function scope
    };
    checkScope();

    if(true){
        console.log("Block",a, b, c); // Access in block scope
    };
	
	let a = 20;   // G,F,B
    const b = 10; // G,F,B
    var c = 5;  // G,F

    // let x = "let x Global scope";
    // const y = "const y Global scope";
    // var z = "var z Global scope";

    console.log("Global scope", a, b, c); // 20, 10, 5

    function checkScope() {
        console.log("Function start scope", a, b, c); // 20, 10, 5
        console.log("Function start scope", x, y, z); // 20, 10, 5
        // // Function scope:
        // let a = "let fun scope";
        // const b = "const fun scope";
        // var c = "var fun scope";

        let x = "let x fun scope";
        const y = "const y fun scope";
        var z = "var z fun scope";
        // console.log("Function End scope", a, b, c);
    };
    checkScope();

    console.log("Global scope (After function)", a, b, c); // 20, 10, 5
    // variable declared, let, const, var --> (G,F,B) --> searching according to its own scope


</script>*/