class Car {
  constructor(brand) {
    this.brand = brand;
  }

  static model = 'Toyota';

  static getPrice = (tax) => {
    console.log(`Price is ${tax + 1000}`);
  };
}

console.log(Car.model);
Car.getPrice(200);
