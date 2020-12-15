'use strict';

// ES6 enhanced object literals - property names can be computed as below, not hard coding like thu, fri, sat...
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const hours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals - no need to write like hours; hours, for outer object
  hours,

  // ES6 enhanced object literals - no need to write function keyword and : for methods like ones from one below
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/*
/////////////////////////////////////////
// Working with Strings - Part 3

// Split and join
console.log('a+bery+nice+string'.split('+')); // split elements by the ordered string into an array
console.log('Emilia Lala Puripuri Purikyua'.split(' '));
const [firstName, lastName] = 'Emilia Lala'.split(' ');
console.log(firstName, lastName); // Emilia Lala

const newName = ['Ms.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName); // Ms. Emilia LALA

const capitalizeName = function (name) {
  const names = name.split(' '); // split and put the into an array
  const newNames = []; // create an empty array to put modified name
  for (const n of names) {
    // newNames.push(n[0].toUpperCase() + n.slice(1));
    newNames.push(n.replace(n[0], n[0].toUpperCase())); // above and here are same result
  }
  console.log(newNames.join(' ')); // convert into strings with spaces
};

capitalizeName('emilia mau lala purikyua');
capitalizeName('pau punjara punta buta');

// Padding (to add symbols and letters before/after particular string)
const msg = 'Go to gate 23!';
console.log(msg.padStart(25, '+').padEnd(30, '+')); // padEnd is total length, + before msg and msg itself are length of 25
console.log('Maumau'.padStart(25, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  // const str = String(number);
  const str = number + ''; // + makes everything string
  const last = str.slice(-4); // takes last 4 digits
  return last.padStart(str.length, '*'); // padded with * except last 4 digits
};

console.log(maskCreditCard(271286491283));

// Repeat
const msg2 = 'Bad weather... All Departures Delayer... ';
console.log(msg2.repeat(5)); // repeating 5 times

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(12);
*/

/*
/////////////////////////////////////////
// Working with Strings - Part 2

const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'jOnAS'; // should print as Jonas
const passengerLower = passenger.toLowerCase(); // first comvert them into lowercase
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1); // make the first letter uppercase and add lowercase
console.log(passengerCorrect);

const fixPassengerName = function (name) {
  const lowercase = name.toLowerCase();
  const correct = lowercase[0].toUpperCase() + lowercase.slice(1);
  console.log(correct);
};

fixPassengerName('mAuMAu');
fixPassengerName('dAVoR');
fixPassengerName('eLIzaBetH');

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = ' Hello@Jonas.Io \n';
// const lowerEmail = email.toLowerCase();
// const trimmedEmail = lowerEmail.trim();

const normalizedEmail = email.toLowerCase().trim();
console.log(normalizedEmail);

// // Checking emails
// const userInput = prompt('Enter your email address 💌');
// console.log(userInput);

// const checkEmail = function (email) {
//   const correctEmail = email.toLowerCase().replace(/\s/g, '');
//   if (email === correctEmail) {
//     alert('Thank you!');
//     // console.log(email);
//   } else {
//     alert('Wrong email address, type again!');
//   }
//   // console.log(
//   //   email === correctEmail ? email : 'Wrong email address, type again!'
//   // );
// };

// checkEmail(userInput);

// Replacing
const priceGB = '288,97€'; // option + shift + 2 = euro symbol
const priceUS = priceGB.replace('€', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replaceAll('door', 'gate')); //
console.log(announcement.replace(/door/g, 'gate'));

// Output
const regexTest = 'This is funny LOL';
console.log(regexTest.replace(/[aeiou]/g, '')); // output: Ths s fnny LOL
console.log(regexTest.replace(/[aeiou]/gi, '')); // output: Ths s fnny LL

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320')); // true
console.log(plane.includes('boeing')); // false
console.log(plane.startsWith('Air')); // true

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase(); // Always better convert user input into lowercase
  if (baggage.includes('knife') || baggage.includes('gun'))
    console.log('You are not allowed on board⛔️');
  else console.log('Welcome aboard💁🏻‍♀️');
};

checkBaggage('I have a laptop, some food, and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got osme snacks and a Gun for protection');
*/

/*
/////////////////////////////////////////
// Working with Strings - Part 1

const airline = 'TAP Air Portugal';
const plen = 'A320';

console.log(airline.indexOf('r')); // returns 6 (count spaces as well)
console.log(airline.lastIndexOf('r')); // returns 10 (count spaces as well)
console.log(airline.indexOf('portugal')); // returns -1 cos case sensitive (can't find)

// Slice method - does not change original string
console.log(airline.slice(4)); // returs Air Portigal, 4 is indexed nunmber where slice method starts to extract string
console.log(airline.slice(4, 10)); // returs Air PO, 4 is the start and 10 is the end, end is no included
// extracted strings (num of letters) are always end - beginning (10-4=6)

console.log(airline.slice(0, airline.indexOf(' '))); // returns TAP, starts with index 0 and end with the firdst space
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // returns Portugal, starts after the last space
console.log(airline.slice(-2)); // returns al, starts from the end (right side)
console.log(airline.slice(1, -1)); // returns AP Air Portuga, starts from the end (right side)

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat 😩');
  else console.log('You got lucky 😎');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');
*/

/*
/////////////////////////////////////////
// Maps
const rest = new Map(); // easy way to use is first create a empty Map
rest.set('name', 'Classico Italiano'); //.set method is like .add method in Sets, 1st element is the name of the key and 2nd is the value
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal')); // up until here, this Map has above data and logs them as well

// Chaining .set method
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

// Read data from Maps, use .get method
console.log(rest.get('name')); // pass in the name of the key
console.log(rest.get('true'));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); // inside of () means that is time greater than 11 and less than 23 = true

console.log(rest.has('categories')); // if rest has 'categories' = true
rest.delete(2); // delete 'Lisbon, Portugal'
// rest.clear(); // delete all the elements
console.log(rest);
console.log(rest.size); // 7

// Arrays or Objects as Map keys

// rest.set([1, 2], 'Test');
// console.log(rest.get([1, 2])); // returns 'undefined' because [1,2] inside of .set method and the one inside of .get method are not same!!! They do not refer to the same place in the memory.

// To get 'Test' by passing the name of the key, first define the array
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr));

// HTML element as Map keys
console.log(rest.set(document.querySelector('h1'), 'Heading'));

// Another way to create Maps
const question = new Map([
  ['question', 'What is the best programming language in the world?'], // first: name, second: value
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);
console.log(question);

// Convert object to map
console.log(Object.entries(hours));
const hoursMap = new Map(Object.entries(hours));
console.log(hoursMap);

// Iterate map
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

const answer = 3;
// const answer = Number(prompt('Your answer'));
console.log(answer);
// const check =
//   answer === question.get('correct') ? question.get(true) : question.get(false);
// console.log(check);
console.log(question.get(question.get('correct') === answer));

// Convert map to array
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);
*/

/*
/////////////////////////////////////////
// Sets
const orderSet = new Set(['Pizza', 'Pasta', 'Pasta', 'Risotto', 'Pizza']);
console.log(orderSet); // returns {"Pizza", "Pasta", "Risotto"}

console.log(new Set('Mau')); // returns {"M", "a", "u"}

console.log(orderSet.size); // how many elements = 3
console.log(orderSet.has('Pizza')); // if orderSet has 'Pizza' = true
console.log(orderSet.has('Bread')); // false
orderSet.add('Garlic Bread'); // add a new element
orderSet.add('Garlic Bread'); // only one 'Garlic Bread' will be added
orderSet.delete('Risotto'); // delete 'Risotto' from orderSet
// orderSet.clear(); // delete all elements in the Set
console.log(orderSet);

for (const order of orderSet) console.log(order);

// Example - remove duplicated elements over an array, create a Set and convert Set to array
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)]; // convert Set to array (spread operator!!! can be used with Set as well)
console.log(staffUnique);
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
); // count how many kind of strings = 3
console.log(new Set('jonasschmedtmann').size); // count how many letters = 11
*/

/*
/////////////////////////////////////////
// Optional chaining
// To get property NAMES of object
const properties = Object.keys(hours);
console.log(properties); // returns an array ["thu", "fri", "sat"]

let openStr = ` We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr); // returns openStr with thu, fri, sat,

// To get property VALUES of object
const values = Object.values(hours);
console.log(values); // returns an array with values

// To get entire object (property NAMES and VALUES together)
const entries = Object.entries(hours);
// console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
*/

/*
/////////////////////////////////////////
// Optional chaining
if (restaurant.hours && restaurant.hours.mon)
  console.log(restaurant.hours.mon.open);

// WITH optional chaining (better code than above)
console.log(restaurant.hours.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.hours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`); // If the particular day exists, logs open time
}

// Methods WITH optional chaining
console.log(restaurant.order?.(0, 1)) ?? 'Method does not exist';
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays WITH optional chaining
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
console.log(users[0]?.name ?? 'User array empty');
*/

/*
/////////////////////////////////////////
// For of Loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item); // Focaccia Bruschetta and so on...

// Old school way
for (const item of menu.entries()) console.log(`${item[0] + 1}: ${item[1]}`); // 1: Focaccia 2: Bruschetta

// Better way
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`); // 1: Focaccia 2: Bruschetta
}
*/

/*
/////////////////////////////////////////
// Nullish Coalescing Operator (??)
restaurant.numGuests = 0;
// Even the num of guests is actually 0, JS takes 0 as falsy value and returns 10
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/

/*
/////////////////////////////////////////
// Short Circuiting (&& and ||)
console.log('-------- OR --------');
// Use and return ANY data type, short-circuiting
console.log(3 || 'Jonas'); // returns 3
console.log('' || 'Jonas'); // returns Jonas
console.log(true || 0); // returns true
console.log(undefined || null); // returns null, because there is no truthy value so it returns the last one

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // returns Hello

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

// Instead doing above ternary operator, can be rewritten as below using short-circuiting
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('-------- AND --------');
console.log(0 && 'Jonas'); // returns 0
console.log(7 && 'Jonas'); // returns Jonas

console.log('Hello' && 23 && null && 'Jonas'); // returns null

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

// Instead of above if statement, can be rewritten as below using short-circuiting
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach'); // If the LEFT side does not exists (=falsy) then nothing will happen but if exists, RIGHT side will be evaluated (LEFT and RIGHT are both truthy value so it returns the last value!)
*/

/*
/////////////////////////////////////////
// Rest Pattern and Parameters
// 1) Destructuring

// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // it's called REST because it will take the rest of the elements

const [Pizza, , Risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(Pizza, Risotto, otherFood); // Pizza Risotto ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'] It shows selected elements as strings and the rest in an array (the rest after the last selected element)

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays); // logs out anything except sat as weekdays

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x); // same as writing add(23, 5, 7) manually

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach'); // logs out mushroom in string as main and others in rest syntax as others

restaurant.orderPizza('mushrooms'); // logs out mushroom in string as main and create an empty array as others because it's NaN
*/

/*
/////////////////////////////////////////
// Spread operator
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr); // returns [1, 2, 7, 8, 9]
console.log(...newArr); // returns 1 2 7 8 9

// Expand based on the original array and add an another el
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterbales: arrays, strings, maps, sets, NOT objects
const str = 'Jonas';
const letters = [...str, '', 'S.'];
console.log(letters);
console.log(...str);
// console.log(`${...str}`); // SyntaxError

const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3?'),
];
console.log(ingredients);

// How to call orderPasta() method?
restaurant.orderPasta(...ingredients);

// Objects (NOT iterables but spread operator works on it since 2018)
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Genarro' }; // copies the original object and add new properties
console.log(newRestaurant);

// Copy object
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name); // Ristorante Roma
console.log(restaurant.name); // Classico Italiano
*/

/*
/////////////////////////////////////////
// Destructuring objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// What if we want variable names to be different from property names?
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// If there is no such a property, avoid returning undefined but return [] by assigning a default value as []
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables while destructuring objects
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b); // logs 23 7

// Nested objects
const { fri } = openingHours;
console.log(fri); // logs {open: 11, close: 23}

// To retrieve only time?
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});
*/

/*
/////////////////////////////////////////
// Destructuring Arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[0];
const c = arr[0];

const [x, y, z] = arr;
console.log(x, y, z); // destructuring an array, unpacking

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables (main and secondary)
[main, secondary] = [secondary, main];
console.log(main, secondary);

console.log(restaurant.order(2, 0));

// Destructuring (receive 2 return values from a function)
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j); logs [2, [5, 6]]

const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // logs out 8, 9, 1
*/
