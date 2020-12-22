'use strict';

/*
//////////////////////////////////////////
// Closures

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker(); // 1
booker(); // 2
booker(); // 3

console.dir(booker);

// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

g();
f(); // without f there is nothing returned
console.dir(f);

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

h();
f();
console.dir(f);

// Example 2

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);
  // setTimeOUT(callback function, milisecs), 1000 milisecs = 1 sec, will be called after specified secs

  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3);
*/

/* 
//////////////////////////////////////////
// IIFE - Functions which called immediately and will not be used again

// Function expression
(function () {
  console.log('This will never run again');
})(); // Wrap function expression in () and immediately call with another ()

// Arrow function
(() => console.log('This will ALSO never run again'))();
*/

/*
//////////////////////////////////////////
// Call, Apply, Bind method & partial application

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {} // this is old syntax
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name }); // create obj and push it into an []
  },
};

lufthansa.book('239', 'Emilia Lala');
lufthansa.book('632', 'John Smith');
console.log(lufthansa.bookings);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
// book(23, 'Sarah Williams'); // Uncought TypeError because of this keyword

// Call method - SOLUTION: functions are just object, so functions can have methods too!
book.call(eurowings, 23, 'Sarah Williams'); // first argument  is this keyword which we want to point at, other arguments are for original function
console.log(eurowings);

book.call(lufthansa, 330, 'Mary Cooper');

// Apply method - old Syntax better use below new syntax with call method
const flightData = [583, 'George Cooper'];
book.apply(lufthansa, flightData);
console.log(lufthansa);

book.call(lufthansa, ...flightData); // spread operator

// Bind method - like call method, manually set this keyword, but more practical
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
bookEW(23, 'Steven Williams');

// Set the 1st argument as 23 so only name should be set when calling
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Emilia Lala');
bookEW23('Martha Cooper');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // Partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// // Preset the rate using bind method
// const addVAT = addTax.bind(null, 0.23); // no this keyword thus use 'null'
// console.log(addVAT(100));

// Rewrite bind method with function returning funtion
const addTax = value => rate =>
  console.log(`Price: ${value}, with tax: ${value + value * rate}`);

addTax(200)(0.1);
*/

/*
//////////////////////////////////////////
// Functions returning functions

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting}, ${name}`);
//   };
// };

// Rewrite in arrow function
const greet = greeting => name => console.log(`${greeting}, ${name}`);

const greeterHey = greet('Hey');
greeterHey('Mau');
greet('Guten Tag')('Mau'); // writing in one line for above two codes
*/

/*
//////////////////////////////////////////
// Callback functions

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase(); // / /g means all spaces, takes all the spaces
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(''); // (' ') splits by words, ('') splits by characters
  return [first.toUpperCase(), ...others].join('');
};

console.log(oneWord('mau likes to eat icecream in the bathtub'));
console.log(upperFirstWord('mau likes to eat icecream in the bathtub'));

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transpormed string: ${fn(str)}`);
  console.log(`Transformed by ${fn.name}`); // logs out the name property which is upperFirstWord
};

transformer('JavaScript is the best!', upperFirstWord); // not calling upeerFirstWord function but passing in transformer function to execute = callback function, upperFirstWord is executed in the line 2 of transformer function, fn(str)

// JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5);



// output of 129

let userInput;

// TODO show error msg when a user inputs something besides days
do {
  userInput = prompt('What is your favorite day of the week?').toLowerCase();
  alert('Wrong input, try only with days from monday to sunday📆');
} while (
  userInput !== 'sunday' &&
  userInput !== 'monday' &&
  userInput !== 'tuesday' &&
  userInput !== 'wednesday' &&
  userInput !== 'thursday' &&
  userInput !== 'friday' &&
  userInput !== 'saturday'
); // under these conditions, do statement keeps iterating, ref: https://javascript.info/task/repeat-until-correct

const convertFirstUpper = str => {
  const [first, ...others] = str.split(''); // (' ') splits by words, ('') splits by characters
  return [first.toUpperCase(), ...others].join('');
};

const checkDay = (day, fn) => {
  let answer = '';

  switch (day) {
    case 'sunday':
      answer = 'Really? Sunday makes me sad!';
      break;
    case 'monday':
      answer = 'You are motivated person!';
      break;
    case 'tuesday':
      answer = 'OK OK!';
      break;
    case 'wednesday':
      answer = '2 more days to go for the weekend buddy!';
      break;
    case 'thursday':
      answer = '1 more day to go for the weekend buddy!';
      break;
    case 'friday':
      answer = 'Party like a ROCKSTAAAAAAHHHHHHH!';
      break;
    case 'saturday':
      answer = "Oh don't drink too much, or you'll be regret about it!";
      break;
  }
  console.log(`${fn(day)}? ${answer}`);
  return answer;
};

checkDay(userInput, convertFirstUpper);
*/

/*
//////////////////////////////////////////
// How Passing Arguments Works: Value vs. Reference

const bookings = [];

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 2345678910,
};

const checkIN = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name; // Change sth in reference value (object) here reflects in jonas object

  if (passenger.passport === 2345678910) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

checkIN(flight, jonas); // checked in
console.log(flight); // LH234, LH999 is overwritten
console.log(jonas); // Mr. Jonas Schmedtmann, Mr. is added to jonas object

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
}; // Change sth in reference value (object) here reflects in jonas object
newPassport(jonas);
console.log(jonas); // new passport number
checkIN(flight, jonas); // wrong passport!
*/

/*
//////////////////////////////////////////
// Default params

// Setting default params, 四則演算 can be also used! - ES6 (recommended)
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // Setting default params - ES5 (NOT recommended anymore)
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 1, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', 1000); // cannot skip the argument!, 1000 here be read as numPassengers
createBooking('LH123', undefined, 1000); // if i want to skip the argument, set it as 'UNDEFINED', here numPassengers returs as 1, since default value is 1

// Output 126
// Managing newly purchased items
const products = [];
const managePurchase = function (
  item,
  numItem = 1,
  totalPriceItem = 30 * numItem
) {
  const product = {
    item,
    numItem,
    totalPriceItem,
  };
  console.log(product);
  products.push(product);
};

managePurchase('Beanie', 36);
managePurchase('Goggle', 100);
managePurchase('Glove', undefined, 200);
*/
