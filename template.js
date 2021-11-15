//------------------------------------------------------
//---------------------- Concatination -----------------------
//------------------------------------------------------

let name = "Vihanga";
let age = 25;

let des = "My name is "+name+" and age is "+age;
console.log(des);

console.log("--------------------------------------------");

//------------------------------------------------------
//---------------------- String Literal -----------------------
//------------------------------------------------------
let fName = "Vihanga";
let lName = "Mihiranga";

console.log(`My first name is ${fName} and last name is ${lName}`);

function displayFullName(name){
    return `${name.toUpperCase()}`;
}

console.log(displayFullName("Vihanga Mihiranga"));

