class Vehicle {
  constructor(model) {
    this.model = model;
  }

  start() {
    console.log(`Vehicle can be start....`);
  }
}

class Mitsubhishi extends Vehicle {
  constructor(model, brand) {
    super();
    this.brand = brand;
  }

  start() {
    console.log(`Car is not starting....`);
  }
}

let veh = new Mitsubhishi('Mitshubhishi', 'CS1');
veh.start();
