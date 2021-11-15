
//------------------------------------------------------
//---------------------- Var -----------------------
//------------------------------------------------------

var num1 = 10;

function multi() {
    var num2 = 40;
    console.log(num1); //Global Variable
    console.log(num2); //Local Variable

    num1 = 50; // If we remove var keyword we can change global variable value and above num1 variable value not show as undefined
    console.log(num1); // Above num1 variable undifined now
}

multi();
console.log(num1);
// console.log(num2); Cannot use local variable out function

console.log("--------------------------------------------");

//------------------------------------------------------
//---------------------- Let -----------------------
//------------------------------------------------------



let num3 = 20;

if(num3 > 10){
    let num3 = 100;
    console.log(num3);
    num3 = 30; //can replace
    console.log(num3); //Can access outside num3 variable

}

console.log(num3);

function add() {

    let num3 = 100;
    console.log(num3);
}

add();

console.log("--------------------------------------------");

//------------------------------------------------------
//---------------------- Const -----------------------
//------------------------------------------------------


const num4 = 40;

if(num4 > 10){
    const num4 = 500;
    // num4 = 50; Cannot replace value
    console.log(num4);
    //const num4 = 50; Cannot re declare variable
}

// num4 = 50; Cannot replace value outside