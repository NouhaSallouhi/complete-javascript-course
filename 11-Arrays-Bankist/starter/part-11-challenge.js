'use strict';

/*
////////////////////////////////////
// Coding challenge - 4
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1. Create recommendedFood property and add it to the object
dogs.forEach(
  dog => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28))
);
console.log(dogs);

// 2. Find Sarah's dog -> some()
const sarahsDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(sarahsDog);
console.log(
  `Sarah's dog eats ${
    sarahsDog.curFood > sarahsDog.recommendedFood ? 'too much' : 'too less'
  } (Current portion: ${sarahsDog.curFood}g, Recommended portion: ${
    sarahsDog.recommendedFood
  }g)`
);

// 3.
const ownersEatTooMuch = dogs
  .filter(dog => dog.recommendedFood < dog.curFood)
  .flatMap(dog => dog.owners);
const ownersEatTooLittle = dogs
  .filter(dog => dog.recommendedFood > dog.curFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch, ownersEatTooLittle);

// 4.
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 5.
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

// 6.
const checkEatingOkay = dog =>
  dog.curFood > dog.recommendedFood * 0.9 &&
  dog.curFood < dog.recommendedFood * 1.1;

const dogEatsOkayAmount = dogs.some(checkEatingOkay);
console.log(dogEatsOkayAmount);

// 7.
const dogsOkay = dogs.filter(checkEatingOkay);
console.log(dogsOkay);

// 8. .slice() is copying and create a new array
const dogs2 = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogs2);
*/

/*
////////////////////////////////////
// Coding challenge - 3
const calcAverageHumanAge = dogAges => {
  const humanAges = dogAges
    .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
  console.log(humanAges);
  return humanAges;
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
*/

/*
////////////////////////////////////
// Coding challenge - 2
const calcAverageHumanAge = ages => {
  // 1 - map
  const humanAge = ages.map(age => (age <= 2 ? age * 2 : 16 + age * 4));
  console.log(humanAge);

  // 2 - filter
  const above18Yo = humanAge.filter(age => age >= 18);
  console.log(above18Yo);

  // 3 - reduce
  //   const average =
  //     above18Yo.reduce((acc, cur) => acc + cur, 0) / above18Yo.length;
  //   console.log(average);

  // 3 - another way
  const average = above18Yo.reduce(
    (acc, cur, i, arr) => acc + cur / arr.length,
    0
  );
  console.log(average);
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
*/

/*
////////////////////////////////////
// Coding challenge - 1
const arr1 = [3, 5, 2, 12, 7];
const arr2 = [4, 1, 15, 8, 3];

const arr3 = [9, 16, 6, 8, 3];
const arr4 = [10, 5, 6, 1, 4];

const checkDogs = (dogsJulia, dogsKate) => {
  // 1
  const correctJulia = dogsJulia.slice(1, -2);
  console.log(correctJulia);

  // 2
  const juliaAndKate = [...correctJulia, ...dogsKate];
  console.log(juliaAndKate);

  // 3
  juliaAndKate.forEach(function (age, i) {
    console.log(
      age >= 3
        ? `Dog number ${i + 1} is an adult, and is ${age} years old`
        : `Dog number ${i + 1} is still a puppy🐶`
    );
  });
};

checkDogs(arr1, arr2);
checkDogs(arr3, arr4);
*/
