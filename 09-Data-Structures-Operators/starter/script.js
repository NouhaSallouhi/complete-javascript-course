'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

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
