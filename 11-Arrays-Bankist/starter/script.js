'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*
// SLICE - IMMUTATE ORIGINAL ARRAY
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2)); // ['c', 'd', 'e']
console.log(arr.slice(2, 4)); // ['c', 'd']
console.log(arr.slice(-2)); // ['d', 'e']
console.log(arr.slice(-1)); // ['e'], last elm
console.log(arr.slice(1, -1)); // ['b', 'c', 'd'] prints until the last elm
console.log(arr.slice()); // shallow copy
console.log([...arr]); // shallow copy
console.log(arr); // ['a', 'b', 'c', 'd', 'e']

// SPLICE - MUTATE ORIGINAL ARRAY
// console.log(arr.splice(2)); // prints and deletes ['c', 'd', 'e'] from original arr
console.log(arr.splice(-1)); // prints and deletes ['e'] from original arr
console.log(arr);

// Compared to .slice(), 2nd argument is exact num of elms we want to delete
console.log(arr.splice(1, 2)); // prints and deletes ['b', 'c'] from original arr
console.log(arr); // ['a', 'd']

// REVERSE - MUTATE ORIGINAL ARRAY
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); // ["f", "g", "h", "i", "j"]
console.log(arr2); // ["f", "g", "h", "i", "j"]

// CONCAT
const letters = arr.concat(arr2);
console.log(letters); // ['a', 'b', 'c', 'd', 'e', "f", "g", "h", "i", "j"]
console.log([...arr, ...arr2]); // same as above

// JOIN
console.log(letters.join(' - ')); // a - b - c - d - e - f - g - h - i - j
*/

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
