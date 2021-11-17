const students = [
  { name: 'Vihanga', age: 26 },
  { name: 'Kamal', age: 27 },
  { name: 'Nadun', age: 37 },
  { name: 'Saman', age: 22 },
  { name: 'Nalin', age: 34 },
  { name: 'Mahinda', age: 26 },
];

const filterArray = students.filter((std) => std.age > 30);
console.log(filterArray);

const findName = students.find((std) => std.name == 'Vihanga');
console.log(findName);

const getNameList = students.map((std) => std.name);
console.log(getNameList);

let ageSum = 0;
const addAges = students.forEach((std) => {
  ageSum = ageSum + std.age;
  console.log(ageSum);
});

let minAge = students.some((std) => std.age > 25);
console.log(minAge);

let checkAllAge = students.every((std) => std.age > 25);
console.log(checkAllAge);

let reduceAge = students.reduce((total, std) => {
  return total + std.age;
}, 0);

console.log(reduceAge);

const marks = [33, 45, 21, 66, 7, 5, 21, 4, 88];

const sortMark = marks.sort(sortCreate);
function sortCreate(a, b) {
  return a - b;
}
console.log(sortMark);

const sortAges = students.sort((std1, std2) => std1.age - std2.age);
console.log(sortAges);

console.log(marks.includes(66));
