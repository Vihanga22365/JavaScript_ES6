// Store unique values

let subject = new Set();

subject.add('Sinhala');
subject.add('Tamil');
subject.add('English');
subject.add('Chemistry');
subject.add('Maths');
subject.add('Sinhala');

console.log(subject);

console.log(subject.has('Tamil'));
console.log(subject.has('Bio'));

for (let a of subject) {
  console.log(a);
}
