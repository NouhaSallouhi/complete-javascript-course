// coding challenge #1
const weightsOfMark = 78;
const heightOfMark = 1.69;
const marksBMI = Math.round(weightsOfMark / heightOfMark ** 2);
console.log(`Mark's BMI is ${marksBMI}.`);

const weightsOfJohn = 92;
const heightOfJohn = 1.95;
const johnsBMI = Math.round(weightsOfJohn / heightOfJohn ** 2);
console.log(`John's BMI is ${johnsBMI}.`);

const markHigherBMI = marksBMI > johnsBMI;
console.log(`Is Mark's BMI higher than John's?; ${markHigherBMI}`);

// select and command + / makes codes commented out!
// const calculateBMI = (weight, height) => {
//   return weight / height ** 2;
// };

// const marksBMI_1 = Math.round(calculateBMI(78, 1.69));
// console.log(`Mark's BMI is ${marksBMI_1}.`);

// const johnsBMI_1 = Math.round(calculateBMI(92, 1.95));
// console.log(`John's BMI is ${johnsBMI_1}.`);

// const marksBMI_2 = Math.round(calculateBMI(95, 1.88));
// console.log(`Mark's BMI2 is ${marksBMI_2}.`);

// const johnsBMI_2 = Math.round(calculateBMI(85, 1.76));
// console.log(`John's BMI2 is ${johnsBMI_2}.`);

// coding challenge #2
let answer;
if (marksBMI > johnsBMI) {
  answer = `Mark's BMI (${marksBMI}) is higher than John's (${johnsBMI})!"`;
} else {
  answer = `John's (${johnsBMI}) is higher than Mark's BMI (${marksBMI})!"`;
}
console.log(answer);

// coding challenge #3
// const dolphins = (96 + 108 + 89) / 3;
// const koalas = (100 + 91 + 110) / 3;
// console.log(dolphins, koalas);

// if (dolphins === koalas) {
//   console.log("It is draw");
// } else if (dolphins > koalas) {
//   console.log("Dolphins won the game!");
// } else {
//   console.log("Koalas won the game!");
// }

// coding challenge #3 - bonus 1
// const dolphins = (30 + 112 + 101) / 3;
// const koalas = (60 + 95 + 123) / 3;
// console.log(dolphins, koalas);

// if (dolphins === koalas) {
//   console.log("It is draw");
// } else if (dolphins > koalas && dolphins >= 100) {
//   console.log("Dolphins won the game!");
// } else if (koalas > dolphins && koalas >= 100) {
//   console.log("Koalas won the game!");
// } else {
//   console.log("Neither of them won😤");
// }

// coding challenge #3 - bonus 2
// const dolphins = (30 + 112 + 101) / 3;
// const koalas = (30 + 95 + 106) / 3;
// console.log(dolphins, koalas);

// if (dolphins === koalas && dolphins >= 100 && koalas >= 100) {
//   console.log("It is draw");
// } else if (dolphins > koalas && dolphins >= 100) {
//   console.log("Dolphins won the game!");
// } else if (koalas > dolphins && koalas >= 100) {
//   console.log("Koalas won the game!");
// } else {
//   console.log("Neither of them won😤");
// }

// coding challenge #4
const bill = 275;
// const tipPercentage15 = bill * 0.15;
// const tipPercentage20 = bill * 0.2;
// const tip = bill >= 50 && bill <= 300 ? tipPercentage15 : tipPercentage20;
// const total = bill + tip;
// console.log(
//   `The bill was $${bill}, the tip was $${tip}, and the total value was $${total}`
// );
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was $${bill}, the tip was $${tip}, and the total value was $${
    bill + tip
  }`
);
