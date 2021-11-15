//Store data as key value pairs.

let details = new Map();

details.set('fname', 'Vihanga');
details.set('lname', 'Mihiranga');
details.set('phone', 0765462043);

console.log(`My name is ${details.get('fname')} ${details.get('lname')}`);
console.log(details.size);

for (let s of details) {
  console.log(`${s[0]} : ${s[1]}`);
}

console.log(details.has('lname'));
console.log(details.has('email'));
