//------------------------------------------------------
//---------------------- Symboles -----------------------
//------------------------------------------------------

let fname = Symbol();
console.log(fname);

let mName = Symbol('mName');
let lName = Symbol('mName');
console.log(mName);
console.log(lName);

console.log(mName === lName); //Symbloes are same
console.log(mName.toString());
