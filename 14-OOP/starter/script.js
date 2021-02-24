'use strict';

/*
///////////////////////////////////////////
// Constructor function and new operator

const Person = function (firstName, birthYear) {
  //   console.log(this); // Person {}

  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never create methods like this bc this will be called multiple times depending on the objects created
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const jonas = new Person('Jonas', 1993);
console.log(jonas);
console.log(jonas instanceof Person); // true

// 1. New empty object {} is created
// 2. Function is called, this keyword points to {}
// 3. {} linked to prototype
// 4. Function automatically return {}

Person.hey = function () {
  console.log('Hey there!');
  console.log(this); // constructor function
};

Person.hey(); // It's not prototype
// jonas.hey(); // so hey() is not inherited. error
*/

/*
///////////////////////////////////////////
// Prototype

// Add methods
console.log(Person.prototype); // calcAge is already in constructor function

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
jonas.calcAge(); // All objects created by using Person constructor inherite calcAge

console.log(Person.prototype === jonas.__proto__); // true bc prototype of jonas object is prototype property of Person constructor function
console.log(Person.prototype.isPrototypeOf(jonas)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false bc prototype property of Person is not same as prototype of Person

// Add objects
Person.prototype.species = 'Homo Sapiens';
console.log(jonas); // 'Homo Sapiens' is now in __proto__
console.log(jonas.hasOwnProperty('species')); // false bc species is in __proto__

console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__); // Object.prototype property (top of the scope chain)
console.log(jonas.__proto__.__proto__.__proto__); // null bc Object.prototype is already top of the scope chain

console.log(Person.prototype.constructor); // Person constructor itself

const arr = [1, 1, 7, 2, 2, 8, 0];
console.log(arr.__proto__); // all methods we can use with array like forEach(), map()...
console.log(arr.__proto__.__proto__); // Object.prototype property (top of the scope chain)

//////////////// BAD BEHAVIOR DO NOT DO THIS ////////////////
// // 1. Create prototype
// Array.prototype.unique = function () {
//   return [...new Set(this)]; // remove duplicated nums
// };

// // 2. All the arrays can use above by using prototype inheritance
// console.log(arr.unique()); // [1,7,2,8,0]

const h1 = document.querySelector('h1');
console.dir(h1); // prototype chain: HTMLHeadingElement <- Element <- Node <- EventTarget <- Object
*/

/*
///////////////////////////////////////////
// Class - syntax sugar of constructor

// Class expression
// const PersonCl = class {}; // no argument

// Class declaration
class PersonCl {
  // no argument
  // 1. Declare constructor method of class
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // 2. Instance Method - unlike constructor function, methods will be added to .prototype property =  newly created object's __proto__
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // If we wanna use setter for already-existing property, use _ in front of property name
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  // To function jessica.fullname (undefined) -> Jessica Davis
  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there!');
    console.log(this); // constructor function
  }
}

// 3. Create object using class declaration
const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge(); // 41
console.log(jessica.__proto__ === PersonCl.prototype); // true
console.log(jessica.age); // 41
PersonCl.hey(); // points to entire class

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens (pass into functions and return from functions)
// 3. Classes are excuted in strict mode
*/

/*
///////////////////////////////////////////
// Setters and Getters
const account = {
  owner: 'Jonas',
  movements: [230, 500, 150, 300],

  // Getters - put get keyword in front of methods
  get latest() {
    return this.movements.slice(-1).pop(); // copy with slice, remove and return the last element
  },

  // Setters
  set latest(mov) {
    // must have one param
    return this.movements.push(mov);
  },
};

// To call getters method, no need to call with get keyword
console.log(account.latest); // 300

// To call setters method
account.latest = 50;
console.log(account.movements); // [230,500,150,300,50]
*/

/*
///////////////////////////////////////////
// Object.create()
const PersonProto = {
  // Methods we want all the Person object to inherit
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();
console.log(steven.__proto__ === PersonProto); // true

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1974);
sarah.calcAge();
*/

/*
///////////////////////////////////////////
// Inheritance between 'Classes': Constructor functions

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  ////// How to like Student and Person constructor //////

  // 1. Below part is duplicated  in Person constructor function
  // this.firstName = firstName;
  // this.birthYear = birthYear;

  // 2. This returns undefined bc constructor function works with new operator and without it, this is a regular function call in where this keyword sets to undefined
  // Person(firstName, birthYear);

  // 3. What we need to do is set the this keyword in this function then
  Person.call(this, firstName, birthYear);

  this.course = course;
};

// Before adding any methods, chain __proto__ until Person.prototype, without this step, __proto__ points Object and  objects created by Student cannot use Person methods like calcAge
Student.prototype = Object.create(Person.prototype); // __proto__ is Person

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}.`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge(); // 17

// Set constructor property as Student
console.dir(Student.prototype.constructor); // Currently it points to Person
Student.prototype.constructor = Student; // Sets as Student
console.dir(Student.prototype.constructor); // Currently it points to Student
console.log(mike instanceof Student); // true
console.log(mike instanceof Person); // true
*/

/*
///////////////////////////////////////////
// Inheritance between 'Classes': ES6 Classes

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there!');
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always need to happen first to create this keyword in this sub class
    super(fullName, birthYear); // here no need to call the PersonCl bc we have already called it above, just pass arguments from Parent class (PersonCl)

    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}.`);
  }

  // Overwrite calcAge()
  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl('Marth Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge(); // 25, inherited from PersonCl class
*/

/*
///////////////////////////////////////////
// Inheritance between 'Classes': Object.create()

const PersonProto = {
  // Methods we want all the Person object to inherit
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto); // PersonProto is prototype of StudentProto
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}.`);
};

const jay = Object.create(StudentProto); // StudentProto is prototype of jay
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();
*/

/*
///////////////////////////////////////////
// Another class example

class Account {
  // 1) Public field (instances, not methods)
  locale = navigator.language;

  // 2) Private field (instances)
  #movements = []; // cannot be accessible outside of the class
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;

    // Protected property with _
    this.#pin = pin;
    // this._movements = []; // We can create new params here
    // this.locale = navigator.language;
  }

  // 3) Public methods
  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this; // returning this makes methods chainable
  }

  withdraw(val) {
    this.deposit(-val);
    return this; // returning this makes methods chainable
  }

  _approveLoan(val) {
    return true;
  }

  // Only this method should be accessible
  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved!`);

      return this; // returning this makes methods chainable
    }
  }

  static helper() {
    console.log('Helper'); // Usually use as helper function bc it's only available at Class itself and not all the instances
  }

  // 4) Private methods is not yet supported by any browser
  // #approveLoan(val) {
  //   return true;
  // }
}

const acc1 = new Account('Emily', 'EUR', 1111);
console.log(acc1);

// BAD PRACTICE bc it's accessible from outside of the class
// acc1.movements.push(250);
// acc1.movements.push(-50);

// GOOD PRACTICE create method like below
acc1.deposit(80);
acc1.withdraw(30);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
Account.helper();

// SyntaxError: Private field bc it's protected
// console.log(acc1.#movements);
// console.log(acc1.#pin);

// Chaining
acc1.deposit(300).deposit(200).withdraw(50).requestLoan(3000).withdraw(2000);
console.log(acc1.getMovements());
*/
