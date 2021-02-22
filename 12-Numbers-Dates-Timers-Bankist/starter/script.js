'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2021-02-15T17:01:17.194Z',
    '2021-02-19T23:36:17.929Z',
    '2021-02-21T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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
// Functions

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24)); // ms * 60secs * 60 mins * 24hrs, absolute numbers
  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return 'today';
  if (daysPassed === 1) return 'yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // If any of above is not executed, then this

  // const year = date.getFullYear();
  // const month = `${date.getMonth() + 1}`.padStart(2, '0');
  // const day = `${date.getDate()}`.padStart(2, '0');
  // return `${day}/${month}/${year}`;

  return new Intl.DateTimeFormat(locale).format(date);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__date">${displayDate}</div>
      <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

// FAKE ALWAYS LOGGED IN
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Create current date and time
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric', // 'numeric', 'long', '2-digit', 'short'
      year: 'numeric', // 'numeric', '2-digit'
      // weekday: 'short', // 'long', 'short'
    };
    // const locale = navigator.language;
    // console.log(locale);
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now); // 2021/2/22

    // const now = new Date();
    // const year = now.getFullYear();
    // const month = `${now.getMonth() + 1}`.padStart(2, '0');
    // const day = `${now.getDate()}`.padStart(2, '0');
    // const hour = `${now.getHours()}`.padStart(2, '0');
    // const min = `${now.getMinutes()}`.padStart(2, '0');
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  // If a user inputs decimal value, always round down to the nearest value, e.g., 150.53 -> 150
  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////
// Remainer operator (%)

// Check if the value is even or odd
const isEven = n => n % 2 === 0;
console.log(isEven(8)); // true
console.log(isEven(23)); // false
console.log(isEven(514)); //true

labelBalance.addEventListener('click', () => {
  // just selecting returns NodeList so use spread operator (...) to put them in an array
  [...document.querySelectorAll('.movements__row')].forEach((row, i) => {
    // orangered for even rows (0,2,4,...)
    if (i % 2 === 0) row.style.background = 'orangered';

    // lightblue for every third rows (0,3,6,...)
    if (i % 3 === 0) row.style.background = 'lightblue';
  });
});

/*
/////////////////////////////////////////////////
// Math and rounding

// Conversion (Str -> Num)
console.log(Number('23')); // number 23 *purple on console is num
console.log(+'23'); // number 23

// Parsing (Str -> Num)
console.log(Number.parseInt('30px', 10)); // automatically take only num and 2nd argument is regex, which we use base 10
console.log(Number.parseInt('e23', 10)); // NaN, num must come first

// ⭐️ Very useful to use with CSS
console.log(Number.parseFloat('2.5rem')); // 2.5 - floating point
console.log(Number.parseInt('2.5rem')); // 2 - integer

// ⭐️ Check if the value is number
console.log(Number.isFinite('20')); // false
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite(+'20px')); // false, is not number
console.log(Number.isFinite(23 / 0)); // false, is infinity

// Square root (二乗根)
console.log(Math.sqrt(25)); // 5
console.log(25 ** (1 / 2)); // 5
console.log(8 ** (1 / 3)); // 2

// Get max / min value
console.log(Math.max(1, 5, 8, 10, 100, 23)); // 100
console.log(Math.max(1, 5, 8, 10, '100', 23)); // 100, do type coersion
console.log(Math.max(1, 5, 8, 10, '100px', 23)); // NaN -  no parsing
console.log(Math.min(1, 5, 8, 10, 100, 23)); // 1

// Get random nums between two specified values
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

console.log(randomInt(10, 20)); // random num between 10 and 20

// Rounding integers - all do type coersion
console.log(Math.round(23.3)); // 23 - 四捨五入
console.log(Math.round('23.9')); // 24 - 四捨五入, type coersion

console.log(Math.ceil(23.3)); // 24 - round up to the nearest integer
console.log(Math.ceil(23.9)); // 24 - round up to the nearest integer

console.log(Math.floor(23.3)); // 23 - round down to the nearest integer
console.log(Math.floor(23.9)); // 23 - round down to the nearest integer

console.log(Math.trunc(23.9)); // 23 - cut decimal part

// Diff between .trunc and .floor, floor is better
console.log(Math.trunc(-23.3)); // 23 - cut decimal part
console.log(Math.floor(-23.3)); // 24 - round down

// Rounding decimals (floating point)
console.log((2.7).toFixed(0)); // 3 as string, 0 means decimal part which is rounded, after . is 0
console.log((2.4).toFixed(0)); // 2 as string, 0 means decimal part which is rounded
console.log((2.7).toFixed(3)); // 2.700 as string
console.log(+(2.345).toFixed(2)); // 2.35 as as number
*/

/*
///////////////////////////////////////
// BigInt
console.log(Number.MAX_SAFE_INTEGER); // max number which can be represented safely in JS
console.log(28470129427453561703471207492874628194618n);

// Operator - cannot mix bigint and normal num
console.log(1000000n + 1000000n);
const huge = 28470129427453561703471207492874628194618n;
const num = 23;
// console.log(huge * num); // error - cannot mix bigint and normal num
console.log(huge * BigInt(num));

// Exception
console.log(20n > 15); // true
console.log(20n === 20); // false
console.log(20n == '20'); // true
console.log(huge + ' is really huge num!'); // works

// Divisions
console.log(10n / 3n); // 3n - returns to the closest integer (cut off the decimal part)
*/

/*
///////////////////////////////////////
// Dates and Time

// Create a date
const now = new Date();
console.log(now);
// Typing string is not recommended tho😵
console.log(new Date('November 17, 1989'));
// parsing data is fine
console.log(new Date(account1.movementsDates[0]));
console.log(new Date(2021, 3, 1, 16, 5)); // Thu Apr 01 2021 16:05 - month is 0 based so +1
console.log(new Date(0)); // Jan 01 1970
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // Jan 04 1970 - 3 days later from 0 * hrs / mins / secs / milisecs

// Working with dates
const future = new Date(2021, 1, 27, 10, 16);
console.log(future); // Sat Feb 27 2021 10:16:00 GMT+0100
console.log(future.getFullYear()); // 2021 - always use getFullYear to get year
console.log(future.getMonth()); // 1 but it means 2
console.log(future.getDate()); // 27
console.log(future.getDay()); // 6 - from MON, SAT is 6th
console.log(future.getHours()); // 10
console.log(future.getMinutes()); // 16
console.log(future.getSeconds()); // 00
console.log(future.getTime()); // 1614417360000 - time stamp from 1/1/1970
console.log(new Date(1614417360000)); // Sat Feb 27 2021 10:16:00 GMT+0100
console.log(Date.now()); // 1613670250129 - time stamp of current date and time

// Convert Date into String
console.log(future.toISOString()); // 2021-02-27T09:16:00.000Z

// Setting year, month, date, day ... as well
console.log(future.setFullYear(2040));
console.log(future);
*/

/*
///////////////////////////////////////
// Calculate days between two dates
const future = new Date(2037, 1, 27, 10, 16);
console.log(Number(future)); // time stamp
const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
const day1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24));
console.log(day1); // 10 (days )
*/
