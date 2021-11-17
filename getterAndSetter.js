const name = {
  fname: 'Vihanga',
  lname: 'Mihiranga',
  get fullName() {
    return `${this.fname} ${this.lname}`;
  },
};

console.log(name.fullName);

class Area {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }

  set area(value) {
    let newVal = value.split(',');
    this.width = newVal[0];
    this.height = newVal[1];
  }
}

let land = new Area(5, 10);
console.log(land.area);
land.area = '100,50';
console.log(land.area);
