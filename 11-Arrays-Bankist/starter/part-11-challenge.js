'use strict';

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
