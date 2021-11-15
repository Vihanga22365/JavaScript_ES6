function sum(a, b) {
  // Normal function
  return a + b;
}
console.log(sum(5, 7));

let myName = function (name) {
  // Anonymous function
  console.log(`My name is ${name}`);
};
myName('Vihanga');

let myAge = (age) => {
  //Arrow function
  console.log(`My age is ${age}`);
};

myAge(26);
