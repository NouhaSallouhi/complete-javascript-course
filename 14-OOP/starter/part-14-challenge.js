'use strict';

/*
///////////////////////////////////////////
// Coding challenge 4

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    console.log(`${(this.speed += 10)} km/h`);
  }

  brake() {
    console.log(`${(this.speed -= 5)} km/h`);
  }

  // 2
  get speedUS() {
    return `${this.speed / 1.6} mi/h`;
  }

  // 3
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

// 1
class EVCl extends CarCl {
  // 2
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }

  brake() {
    this.speed -= 10;
    this.#charge++;
    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
rivian.accelerate().accelerate().chargeBattery(50).accelerate().brake();
console.log(rivian.speedUS);
*/

/*
///////////////////////////////////////////
// Coding challenge 3
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} going at ${this.speed} km/h`);
};

// 1
const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV;
console.dir(EV.prototype.constructor);
console.log(EV);

// 2.
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

// 3.
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

const tesla = new EV('Tesla', 120, 23); // charge: 23
tesla.chargeBattery(90);
console.log(tesla); // charge: 90
tesla.accelerate(); // If there are two same name methods, JS uses the 1st one appears in chain, so EV
tesla.accelerate();
tesla.accelerate();
*/

/*
///////////////////////////////////////////
// Coding challenge 2

// 1
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    console.log(`${(this.speed += 10)} km/h`);
  }

  brake() {
    console.log(`${(this.speed -= 5)} km/h`);
  }

  // 2
  get speedUS() {
    return `${this.speed / 1.6} mi/h`;
  }

  // 3
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS); // 75 mi/h but speed property is still 120
console.log(ford);

ford.accelerate();
ford.brake();
ford.brake();
ford.accelerate(); // speed property is now 130
console.log(ford);

ford.speedUS = 50; // speed property is now set as 50 * 1.6 = 80
console.log(ford); // speed property is now 80
*/

/*
///////////////////////////////////////////
// Coding challenge 1

// 1
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

// 2 accelerate by 10km/h +=
Car.prototype.accelerate = function () {
  console.log(`${(this.speed += 10)} km/h`);
};

// 3 brake by 5km/h -=
Car.prototype.brake = function () {
  console.log(`${(this.speed -= 5)} km/h`);
};

// 4
const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);
console.log(bmw, mercedes);
bmw.accelerate(); // 130
bmw.accelerate(); // 140
bmw.brake(); // 135
mercedes.brake(); // 90
mercedes.brake(); // 85
mercedes.accelerate(); // 95
*/
