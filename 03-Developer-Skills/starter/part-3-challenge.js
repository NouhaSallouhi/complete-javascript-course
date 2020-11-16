'use strict';

// 1) Understanding the problem
// Is -5 maximum temp?
// How to type degree symbol on mac? Answer: Press and hold the SHIFT OPTION 8 keys
// How to log out values of an array in one line? Answer: https://stackoverflow.com/questions/33089739/javascript-for-loop-console-print-in-one-line/33089779
// This is same like below but with string:
//
// const test = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i < test.length; i++) {
//   sum += test[i];
// }
// console.log(sum);

// 2) Breaking up into sub-problems
// Return string in one line (transform array into string)
// String should be printed out based on the index + 1

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = arr => {
  let msg = '';
  for (let i = 0; i < arr.length; i++) {
    msg += `... ${arr[i]}°c in ${i + 1} day(s) `;
  }
  console.log(msg + '...');
};

printForecast(data2);
