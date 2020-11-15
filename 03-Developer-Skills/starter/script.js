// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = '23';
if (x === 23) console.log(23);

const calcAge = birthYear => 2020 - birthYear;
console.log(calcAge(1989));

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors? Answer: calcTempAmplitude should only run if values in the array are numbers
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = temps => {
  let max = temps[0]; // to get the greatest value in the array, assuming the first value of the array is max
  let min = temps[0]; // to get the smallest value in the array, assuming the first value of the array is min
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i]; // since we use it a lot, lets create a variable
    if (typeof curTemp !== 'number') continue; // if the value is not a number, skip it and move on the next one
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
// calcTempAmplitude([3, 7, 4, 1, 8]);
// max is now 3, iteration starts as 3 > 3, it stays 3
// 7 > 3, it overrides max as 7
// 4 > 7, no, so max stays as 7

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);
