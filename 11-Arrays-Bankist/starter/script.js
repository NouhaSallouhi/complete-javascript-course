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

const displayMovements = function (movements) {
    containerMovements.innerHTML = ''; // delete existing contents

    movements.forEach(function (mov, i) {
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

const updateUI = function(acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);
  
  // Display summary
  calcDisplaySummary(acc);
}

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
    labelWelcome.textContent = `Welcome back ${currentAccount.owner.split(' ')[0]}`
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    // Assignment operator works from right to left

    // Remove blinking arrow in input area
    inputLoginPin.blur();

    updateUI(currentAccount)
  }
});

btnTransfer.addEventListener('click', function(e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value)
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value)
  console.log(amount, receiverAcc);

  inputTransferTo.value = inputTransferAmount.value = '';

  if (amount > 0 && receiverAcc && amount <= currentAccount.balance && receiverAcc?.username !== currentAccount.username) {
    // console.log('Valid transfer');
    currentAccount.movements.push(-amount)
    receiverAcc.movements.push(amount)
  }

  updateUI(currentAccount)
})


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const eurToJpy = 126.712;

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
