'use strict';

// // section 3 part 2 - 32
// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true; // we can assign value to let variable more than once
// if (hasDriversLicense) console.log("I can drive!");

// // section 3 part 2 - 33
// function makeSmoothie(apples, oranges) {
//   const smoothie = `Smoothie made with ${apples} apples and ${oranges} oranges.`;
//   return smoothie;
// }
// // calling, invoking, running function
// const appleOrangeSmoothie = makeSmoothie(2, 3);
// console.log(appleOrangeSmoothie);

// // section 3 part 2 - 34
// // function declaration
// const age1 = calcAge1(1989);
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// // function expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };
// const age2 = calcAge2(1989);
// console.log(age1, age2);

// // arrow function with one param and one line of code
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1989);
// console.log(age3);

// // arrow function with one param and more than one line of code
// const yearsUntilRetirement = birthYear => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return retirement;
// };
// console.log(yearsUntilRetirement(1989));

// // arrow function with multiple params and more than one line of code
// const yearsUntilRetirement = (birthYear, firstName) => {
// 	const age = 2020 - birthYear;
// 	const retirement = 65 - age;
// 	//   return retirement;
// 	return `${firstName} retires in ${retirement} years.`;
// };
// console.log(yearsUntilRetirement(1989, 'Mau'));
// console.log(yearsUntilRetirement(1984, 'Pau'));

// // section 3 part 2 - 36
// function cutFruitPieces(fruit) {
// 	return fruit * 3;
// }

// function makeSmoothie(apples, oranges) {
// 	const applePieces = cutFruitPieces(apples);
// 	const orangePieces = cutFruitPieces(oranges);
// 	const smoothie = `Smoothie made with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
// 	return smoothie;
// }
// // calling, invoking, running function
// const appleOrangeSmoothie = makeSmoothie(2, 3);
// console.log(appleOrangeSmoothie);

// // s3 p2 - 37
// const calcAge = function (birthYear) {
// 	return 2037 - birthYear;
// };

// // arrow function with one param and more than one line of code
// const yearsUntilRetirement = (birthYear, firstName) => {
// 	const age = calcAge(birthYear);
// 	const retirement = 65 - age;
// 	if (retirement > 0) {
// 		return retirement; // return statement immediately exits the function
// 		console.log('This is not executed'); // after return no code will be executed
// 	} else {
// 		console.log(`${firstName} is already retired!`);
// 		return -1; // in programming -1 or 9999 is common to show that it has no meaning
// 	}
// };
// console.log(yearsUntilRetirement(1950, 'Bon'));

// // s3p2-39
// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends[0]); // logs out 'Michael'

// const years = new Array(1989, 1984, 2020);

// // to get actual number of elements
// console.log(years.length); // logs out 3

// // to get the last element in the array
// console.log(friends[friends.length - 1]); // .length is not zero based so we need to use -1

// friends[2] = 'Jay'; // to mutate elements in index 2
// console.log(friends);

// // friends = ['Alice', 'John']; // this is not working to mutate elements because variable 'friends' is defined with const

// const firstName = 'Mau';
// const mau = [firstName, 'Lala', 2020 - 1989, 'Web developer', friends]; // we can put strings, numbers, expressions(2020-1989), other arrays, function calls
// console.log(mau);

// // exercise
// const calcAge = function (birthYear) {
// 	return 2037 - birthYear;
// };
// const testYears = [1990, 1967, 2002, 2010, 2018];
// // calcAge(testYears) // this does't work because argument is array with multiple elements

// const age1 = calcAge(testYears[0]);
// const age2 = calcAge(testYears[1]);
// const age3 = calcAge(testYears[testYears.length - 1]);
// console.log(age1, age2, age3);

// const ages = [
// 	calcAge(testYears[0]),
// 	calcAge(testYears[1]),
// 	calcAge(testYears[testYears.length - 1]),
// ];
// console.log(ages);

// // s3p2-40
// const friends = ['Michael', 'Steven', 'Peter'];

// // Add elements
// const newLength = friends.push('Jay'); // add a new element at the end of the array and store it to a new variable, this variable is to see how many elements in the array
// console.log(friends); // to see actual elements in the array, use original varaible
// console.log(newLength); // returns the length of the array, here is 4

// friends.unshift('John'); // add a new element at the beginning of the array but this is not stored
// console.log(friends);

// // Remove elements
// friends.pop(); // remove the last element, no need to define which one
// const popped = friends.pop();
// console.log(popped); // returns removed value, here it is Peter
// console.log(friends);

// friends.shift(); // removes the first element, no need to define which one
// console.log(friends);

// // Check if a specific element is in the array
// console.log(friends.indexOf('Steven')); // index where the given element is located in index
// console.log(friends.indexOf('Bob')); // if not existing element is given, it returns -1

// console.log(friends.includes('Steven')); // returns true if the element exists or false if does't exist
// console.log(friends.includes('Bob')); // here returns false because Bob does not exists in the friends array

// if (friends.includes('Steven')) {
// 	console.log('You have a friend called Steven');
// }

// // s3p2-42
// const mau = {
// 	firstName: 'Mau', // property: value
// 	lastName: 'Maumau',
// 	age: 2020 - 1989,
// 	job: 'Billionaire Web developer',
// 	friends: ['Schmi', 'Schma', 'Schmu'],
// };
// console.log(mau);

// // how to retrieve data from object and change data un ibject
// console.log(mau.lastName);
// console.log(mau['lastName']);
// const nameKey = 'Name';
// console.log(mau['first' + nameKey]);
// console.log(mau['last' + nameKey]);

// const interestedIn = prompt(
// 	'What do you want to know abot Mau? Choose between firstName, lastName, age, job, and friends'
// );

// // add new properties to the object
// mau.location = 'Stuttgart';
// mau['github'] = 'https://www.github/com/emiribegic';

// if (mau[interestedIn]) {
// 	console.log(mau[interestedIn]);
// } else {
// 	console.log(
// 		'Wrong request! Choose between firstName, lastName, age, job, and friends'
// 	);
// }

// console.log(mau);

// //challenge
// const numOfFriends = mau.friends.length;
// console.log(numOfFriends);

// console.log(
// 	`${mau.firstName} has ${numOfFriends} friends, and her best friend is called ${mau.friends[0]}.`
// );

// // s3p2-44
// const mau = {
// 	firstName: 'Mau', // property: value
// 	lastName: 'Maumau',
// 	birthYear: 1989,
// 	job: 'Billionaire Web developer',
// 	friends: ['Schmi', 'Schma', 'Schmu'],
// 	hasDriversLicense: true,
// 	// calcAge: function (birthYear) {
// 	// 	return 2020 - birthYear;

// 	// calcAge: function (birthYear) {
// 	// 	return 2020 - this.birthYear; // it is equalt to mau.birthYear, reference to its own property
// 	// },

// 	calcAge: function (birthYear) {
// 		this.age = 2020 - this.birthYear; // it is bad practice we calculate function using console.log below multiple times (heavier computation) so calcualte once and store it as a new property and retrieve it when we need it
// 		return this.age;
// 	},
// 	// challenge
// 	getSummary: function (license) {
// 		return `${this.firstName} is a ${this.calcAge()} year-old ${
// 			this.job
// 		}, and she has ${
// 			this.hasDriversLicense ? 'a' : 'no'
// 		} driver's license.`;
// 		// if statement can be used but ternary operator is better here
// 	},
// 	// any function that is attached to an objects is called a method, only expression is allowed and no declaration
// };
// mau.calcAge(); // without this method call, mau.age would not be available!
// console.log(mau.age);
// console.log(mau.getSummary());
// console.log(mau.hasOwnProperty('age'));

// // s3p2 - 46
// for (let i = 1; i <= 10; i++) {
// 	console.log(`Lifting weights repetition ${i} 🏋️‍♀️`);
// }

// const mauArray = [
// 	'Mau',
// 	'Maumau',
// 	2020 - 1989,
// 	'Web developer',
// 	['Schmi', 'Schma', 'Schsch'],
// 	true,
// ];

// // to create a new array which has all types for all elements, this is not useful for real life but for educational purpose
// const types = [];

// // to loop each elements in the array
// // start from 0 because the array is zero based when it comes to reading elements out of the array
// for (let i = 0; i < mauArray.length; i++) {
// 	// to read values
// 	console.log(mauArray[i], typeof mauArray[i]);

// 	// to fill newly created array which is called types with types of mauArray

// 	// types[i] = typeof mauArray[i];
// 	// this is equal to:
// 	// types[0] = typeof mauArray[0]
// 	// types[1] = typeof mauArray[1]
// 	// and so on

// 	// this is better and cleaner to fill elements into the array
// 	types.push(typeof mauArray[i]);
// }
// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
// 	ages.push(2020 - years[i]);
// }
// console.log(ages);

// // continue and break statement
// for (let i = 0; i < mauArray.length; i++) {
// 	// only log string to the console
// 	// basically everything else will be skipped for iteration
// 	// if the typeof current element is not a string, then exit current iteratio and continue to the next one
// 	if (typeof mauArray[i] !== 'string') continue;
// 	console.log(mauArray[i], typeof mauArray[i]);
// }

// for (let i = 0; i < mauArray.length; i++) {
// 	// logs until it reaches type of number (number is not logged), then completely terminate the whole iteration after that
// 	// here, when the loop reaches the number 31, it stops iterating and logging
// 	if (typeof mauArray[i] === 'number') break;
// 	console.log(mauArray[i], typeof mauArray[i]);
// }

// console.log(mauArray);

// // s3p2-48
// const mauArray = [
// 	'Mau',
// 	'Maumau',
// 	2020 - 1989,
// 	'Web developer',
// 	['Schmi', 'Schma', 'Schsch'],
// 	true,
// ];

// // looping backwards
// // can be written let i = 4 but hardcode is not recommended that's why writing using .length
// for (let i = mauArray.length - 1; i >= 0; i--) {
// 	console.log(i, mauArray[i]);
// }

// // loops in loops
// // there are 3 exercises and in each exercise i want to have 5 repetition
// for (let exercise = 1; exercise <= 3; exercise++) {
// 	console.log(`---------- Starting exercise ${exercise}`);
// 	for (let repetition = 1; repetition <= 5; repetition++) {
// 		console.log(`Exercise ${exercise}: Starting repetition ${repetition}`);
// 	}
// }

// s3p2 -49
// for (let repetition = 1; repetition <= 5; repetition++) {
// 	console.log(`Starting repetition ${repetition}`);
// }

// manually define start point
let repetition = 1;
// while loop has only condition and it will run while this condition is true
while (repetition <= 5) {
	console.log(`Starting repetition ${repetition}`);
	// manually define counter (how to move on to the next element)
	repetition++;
}

// we want to keep running the loop until we roll a 6
// first define start point
let dice = Math.trunc(Math.random() * 6) + 1; // The Math.trunc() function returns the integer part of a number by removing any fractional digits.

// if the dice is different from 6, keep runnin the loop and stop when it is 6
while (dice !== 6) {
	console.log(`You rolled a ${dice}`);
	// define how to move on to the next elements
	dice = Math.trunc(Math.random() * 6) + 1;
	// when the dice is 6, logs msg as below
	if (dice === 6) console.log('Loop is about to end');
}
