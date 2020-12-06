'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const firstName = 'Emilia';
//       const str = `Oh, and you're a millenial, ${firstName}`; // JS tries to look up in the current scope
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }

//       output = 'NEW OUTPUT!';
//     }
//     // console.log(str); // str is block scoped variable so only accessible within block scope {}
//     console.log(millenial); // var is function scoped and ignores block
//     console.log(output);

//     // add(3, 5); // add() function is block scoped so cannot be accessed outside of the if block {} when we use strict mode, if not, can be accessible
//   }
//   printAge();

//   return age;
// }

// const firstName = 'Mau';
// calcAge(1989);
// // console.log(age);
// printAge();

// // Variables
// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'Mau';
// let job = 'teacher';
// const year = 1989;

// // Functions
// console.log(addDecl(2, 3));
// // console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// // Function declaration
// function addDecl(a, b) {
//   return a + b;
// }

// // Function expression
// const addExpr = function (a, b) {
//   return a + b;
// };

// // Arrow function
// var addArrow = (a, b) => a + b; // one line

// // Example
// if (!numProducts) deleteShoppingCart(); // falsy means 0
// var numProducts = 10;
// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// console.log(this);

// // Regular function
// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear); // returns 48
//   //   console.log(this); // returns undefined
// };
// calcAge(1989);

// // Arrow function
// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear); // returns 57
//   //   console.log(this); // returns window
// };
// calcAgeArrow(1980);

// // Method
// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// jonas.calcAge(); // returns jonas object for the 1st and 46 for the 2nd line

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge(); // returns 20

// const f = jonas.calcAge;
// f(); // Uncaught typeError

// var firstName = 'Matilda';

// // Function inside of method
// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);

//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },

//   greet: () => console.log(`Hey, ${this.firstName}`),
// };
// jonas.greet();
// jonas.calcAge();

// const me = {
//   name: 'Jonas',
//   age: 30,
// };

// const friend = me;
// friend.age = 27;

// console.log('Friend:', friend); // returns age of 27
// console.log('Me:', me); // returns age of 27

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName);
console.log(oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log(jessica);
console.log(marriedJessica);
// marriedJessica = {} // this is not working because marriedJessica is defined with const

// Copying obejects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log(jessica2);
console.log(jessicaCopy);
