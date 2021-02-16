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

// When a user clicks, sort will be true
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = ''; // delete existing contents

  // Make a copy with .slice(), spread operator is not good example here for chaining methods
  // When sort is true, sort ascendingly, if false, display movements
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
      <div class="movements__type movements__type--${type}">
        ${i} ${type}
      </div>
      <div class="movements__date">24/01/2037</div>
      <div class="movements__value">${mov}€</div>
    </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  // Create new property called balance
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${incomes}€`;

  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;

  // Bank gives 1.2% of interest for each deposit if the interest is greater than or equal to 1 eur
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  // forEach - just iterate without creating a new array
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ') // divides a String, puts and returns an array
      .map(str => str[0]) // iterate and create a new array
      .join(''); // creates and returns a new string by concatenating all of the elements in an array
  });
};
createUsernames(accounts);
console.log(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

// Event handler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // To prevent from submitting form (refreshing page)
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  // optional chaining - if currentAccount exists then read the pin of it
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // console.log('LOGIN');
    // Display UI and message
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    // Assignment operator works from right to left

    // Remove blinking arrow in input area
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  console.log(amount, receiverAcc);

  inputTransferTo.value = inputTransferAmount.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    amount <= currentAccount.balance &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // console.log('Valid transfer');
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
  }

  updateUI(currentAccount);
});

// Loan
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  // If the loan amount >0, any deposit => 10% of the loan amount
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add loan amount as deposit in movements array
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }

  // Clear input field
  inputLoanAmount.value = '';
});

// Close account
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);

    // Delete account
    accounts.splice(index, 1); // 1 element at index will be deleted (mutate original array)

    // Hide UI
    containerApp.style.opacity = 0;
  }

  // Clear input field
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
// Sort movements
btnSort.addEventListener('click', function (e) {
  e.preventDefault();

  // If sorted is false / true, it will be true / false
  displayMovements(currentAccount.movements, !sorted);

  // If sorted is false / true, it will be true / false
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToJpy = 126.712;

/*
/////////////////////////////////////////////////
// Array methods practive

// 1. Get all movements from all the accounts (arrays) and create a new array (level 1 ) -> filter only deposits -> sum
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0); // 0 is starting point
console.log(bankDepositSum);

// 2. Count how many movements which are more than 1000euros
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;

// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, cur) => (cur >= 1000 ? acc + 1 : acc), 0);
// when current element is >= 1000, acc+1(bc starting from 0, incremented by 1)

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, cur) => (cur >= 1000 ? ++acc : acc), 0);
// acc++ increment the value but still returns previous value, so use prefixed operator (++acc)
console.log(numDeposits1000);

//Prefixed ++ operator
let a = 10;
// console.log(a++); // returns 10, not 11
console.log(++a);
console.log(a); // returns 11

// 3. Create object
const sums = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sum, cur) => {
      // cur > 0 ? (sum.deposits += cur) : (sum.withdrawls += cur);
      sum[cur > 0 ? 'deposits' : 'withdrawls'] += cur;
      return sum;
    },
    { deposits: 0, withdrawls: 0 }
    // This is accumlator = sum so if we want to increment either depos or withdrawals, we can use sum.depos or sum.withdrawls
  );
console.log(sums);

// 4. this is a nice title -> This Is a Nice Title
const convertTitleCase = title => {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = [
    'a',
    'an',
    'the',
    'and',
    'but',
    'or',
    'on',
    'in',
    'of',
    'with',
  ];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');

  // If one of exceptions comes the first, the first letter should be capitalized so we call capitalize function once more (x and This, o And This)
  return capitalize(titleCase);
};

console.log(convertTitleCase('this is a nice title'));
console.log(
  convertTitleCase(
    'this is indeed the nice title of LONG title but not tOO long'
  )
);
console.log(convertTitleCase('and here is another titel with an EXAMPLE'));
*/

/*
/////////////////////////////////////////////////
// Fill method
const x = new Array(7); // Create an empty array with 7 elements
console.log(x);
x.fill(1, 3, 5); // Fill 1 at position 3 and 4 (before 5)
console.log(x); // [empty x 3,1,1,empty x 2]
x.fill(1); // Fill 1 7 times
console.log(x); // [1,1,1,1,1,1,1]

const arr = [1, 2, 3, 4, 5, 6, 7];
arr.fill(23, 4, 6); // Mutate arr at position 4 and 5 (before 6)
console.log(arr); // [1,2,3,4,23,23,7]

// Array.from() - programmatically create an array, second param is mapping callback
const y = Array.from({ length: 7 }, () => 1); // set the length of array as 7, and fill with 1 at callback function
console.log(y); // [1,1,1,1,1,1,1]

const z = Array.from({ length: 7 }, (_, i) => i + 1); // params are already defined like .map() but i dont need first one (cur) so i can use throw away variable _
console.log(z); // [1,2,3,4,5,6,7]

// Create 100 numbers from 1 to 100 randomly in an array
const randomNum = Array.from(
  { length: 100 },
  () => Math.trunc(Math.random() * 100) + 1
);
console.log(randomNum);

// When clicking Current balance, logs movements in an array
labelBalance.addEventListener('click', () => {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    ele => Number(ele.textContent.replace('€', ''))
  );
  console.log(movementsUI);
});
*/

/*
/////////////////////////////////////////////////
// Sorting arrays

// Strings 
const owners = ['Jonas', 'Zach', 'Adam', 'Martha']
console.log(owners.sort()); // mutate the original array
console.log(owners);

// 😰 .sort() is sorting based on strings so number is converted to strings and sorted like [-1, -40, 0, 1, 20, 350]

// Numbers
console.log(movements.sort());

// Ascending
// movements.sort((a, b) => {
//   if(a > b) return 1;
//   if(a < b) return -1;
// })
movements.sort((a, b) => a - b) // if a > b, a - b is always positive
console.log(movements);

// Descending
// movements.sort((a, b) => {
//   if(a > b) return -1;
//   if(a < b) return 1;
// })
movements.sort((a, b) => b - a) // if a > b, b - a is always negative 
console.log(movements);
*/

/*
/////////////////////////////////////////////////
// .flat() and .flatMap()

// .flat() - ES2019 syntax, flatten one level deep of arrays
const arr = [[1, 2, 3], [4, 5, 6], 7, 8] // Take out all the elements and put all together in a new array
console.log(arr.flat());
console.log(arr);

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8]
console.log(arrDeep.flat(2)); // give the level and it will flatten thoes level of arrays as well

// // 1. Take out only movements from each account and create a new array
// const accountMovements = accounts.map(acc => acc.movements)
// console.log(accountMovements);
// // 2. Put them all into a new array (flatten)
// const allMovements = accountMovements.flat()
// console.log(allMovements);
// // 3. Sums up all elements in the array
// const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0)
// console.log(overallBalance);

// Chaining all the above methods
const overallBalance = accounts.map(acc => acc.movements).flat().reduce((acc, mov) => acc + mov, 0)
console.log(overallBalance);

// .flatMap() - ES2019 syntax, map and flat at the same time BUT ONLY FOR ONE LEVEL DEEP ELEMENTS
const overallBalance2 = accounts.flatMap(acc => acc.movements).reduce((acc, mov) => acc + mov, 0)
console.log(overallBalance2);
*/

/*
/////////////////////////////////////////////////
// Some and Every

// Check the equality in the array
console.log(movements.includes(-130)); // true

// Check if any of elements meets the condition (returns true/false)
const anyDeposits = movements.some(mov => mov > 1500)
console.log(anyDeposits); // true

// Check if every elements meet the condition (return true/false)
console.log(movements.every(mov => mov > 0)) // false
console.log(account4.movements.every(mov => mov > 0)); // true

// ⭐️ Separate callback - BETTER FOR DRY CODE!
const deposit = mov => mov > 0
console.log(movements.some(deposit));
*/

/*
/////////////////////////////////////////////////
// .find() - returns first element which meets the condition, diff from /filter() is that .filter() returns a new array while .find() returns only the first element which meets the condition
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

// Find a object which owner property is Jessica Davis
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);
*/

/*
/////////////////////////////////////////////////
// PIPELINE
// To debug current method, check in the next method, e.g., check if filter method works proper;y, check map method
const totalDepositsJpy = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    console.log(arr); // prints 5 times because there are 5 elements in the array and it will be called each one of them
    return mov * eurToJpy;
  })
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsJpy);
*/

/*
/////////////////////////////////////////////////
// .reduce() - accumlator 累算器,
// param order (accumlator, current element, index, whole array)
const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0); // 0 is starting point
console.log(balance);

// Maximum value using reduce method
const max = movements.reduce((acc, mov) => {
  if (acc > mov) {
    return acc;
  } else {
    return mov;
  }
}, movements[0]);
console.log(max);
*/

/*
/////////////////////////////////////////////////
// .filter() iterates and returns a new array, not mutate the original
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);
*/

/*
/////////////////////////////////////////////////
// .map() - iterates and returns a new array, not mutate the original

const eurToUsd = 1.1;
// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });
// Refactor with arrow function
const movementsUSD = movements.map(mov => mov * eurToUsd);

console.log(movements); // prints original
console.log(movementsUSD); // prints original * 1.1

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);
*/

/*
/////////////////////////////////////////////////
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

/*
/////////////////////////////////////////////////
// forEach method

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('----- FOREACH ------');
// params in callback function must be always in following order when iterating arrays: current element, index and entire array
movements.forEach(function (movement, i, arr) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
});
*/

/*
/////////////////////////////////////////////////
// Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// params in callback function must be laways in following order when iterating maps: value, key, map
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
// There is no key in Set so use _ as key param (variable which is unnecessary)
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
*/
