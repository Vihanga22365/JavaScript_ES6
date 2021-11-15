const student = {
  studentName: 'Vihanga Mihiranga',
  age: 26,
  campues: 'SLIIT',
  modules: ['IP', 'MC', 'OOP', 'IWT', 'OOC'],
  gpa: {
    firstYesr: 2.5,
    secondYear: 2.7,
    thirdYear: 3.0,
  },
};

//Normal method get values from object
console.log(student.studentName);
console.log(student.modules[3]);
console.log(student.gpa.firstYesr);

//Object Destructured method for get value from object
const { studentName, age } = student;
const { modules } = student;
const { studentName: sn, campues: cp } = student; //Use short form
const {
  gpa: { firstYesr, secondYear },
} = student;

console.log(studentName);
console.log(age);
console.log(firstYesr, secondYear);

for (let i = 0; i < modules.length; i++) {
  console.log(modules[i]);
}

console.log(sn);
console.log(cp);
