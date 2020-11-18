'use strict';

// // s1 challenge 3
// const dolphinsAvg = Math.trunc((97 + 112 + 101) / 3);
// const koalasAvg = Math.trunc((109 + 95 + 123) / 3);
// const msg = `Dolphins (${dolphinsAvg}) vs. Koalas (${koalasAvg}):`;
// console.log(dolphinsAvg, koalasAvg);

// if (dolphinsAvg === koalasAvg && dolphinsAvg >= 100 && koalasAvg >= 100) {
//   console.log(`${msg} It's a draw!😉`);
// } else if (dolphinsAvg >= 100 && dolphinsAvg > koalasAvg) {
//   console.log(`${msg} Dolphins won!🏆`);
// } else if (koalasAvg >= 100 && koalasAvg > dolphinsAvg) {
//   console.log(`${msg} Koalas won!🏆`);
// } else {
//   console.log(`${msg} Neither team reached to 100😫`);
// }

// // s1 challenge 4
// const bill = 430;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(
//   `The bill was $${bill}, the tip was $${tip}, and the total value was $${
//     bill + tip
//   }`
// );

// // s2 challenge 1
// const calcAverage = (s1, s2, s3) => Math.trunc((s1 + s2 + s3) / 3);
// let dolphins = calcAverage(44, 23, 71);
// let koalas = calcAverage(65, 54, 59);

// const checkWinner = (avgDolhins, avgKoalas) => {
//   if (avgDolhins >= avgKoalas * 2) {
//     console.log(`Dolphins won (${avgDolhins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= avgDolhins * 2) {
//     console.log(`Koalas won (${avgKoalas} vs. ${avgDolhins})`);
//   } else {
//     console.log(
//       `Neither team won: Dolphins (${avgDolhins}) vs. Koalas (${avgKoalas})`
//     );
//   }
// };

// checkWinner(dolphinsAvg, koalas);

// dolphins = calcAverage(85, 54, 41);
// koalas = calcAverage(23, 34, 27);

// checkWinner(dolphinsAvg, koalas);

// // s2 challenge 2
// const bills = [125, 555, 44];
// const tips = [];
// const total = [];

// const calcTip = bill => (bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2);

// // calcTip(100);
// tips.push(calcTip(bills[0]));
// tips.push(calcTip(bills[1]));
// tips.push(calcTip(bills[2]));

// total.push(bills[0] + tips[0]);
// total.push(bills[1] + tips[1]);
// total.push(bills[2] + tips[2]);

// console.log(bills, tips, total);

// // s2 challenge 3
// const mark = {
//   fullName: 'Mark Miller',
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = Math.trunc(this.mass / this.height ** 2);
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: 'John Smith',
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = Math.trunc(this.mass / this.height ** 2);
//     return this.bmi;
//   },
// };

// mark.calcBMI();
// john.calcBMI();

// if (mark.bmi === john.bmi) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.bmi}) is same as ${john.fullName}'s BMI (${john.bmi})!`
//   );
// } else if (mark.bmi > john.bmi) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})!`
//   );
// } else if (john.bmi > mark.bmi) {
//   console.log(
//     `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})!`
//   );
// } else {
//   console.log(`Something went wrong...`);
// }

// // individual needs
// const rebkuchen = 207 * 4;
// const santa = 64 * 4;
// const esset = 86 * 4;
// const mon = 214;
// const bear = 65;
// const tee = 89 * 4;
// const memory = 590;
// const stollen = 601;
// const cafe = 157 * 2;
// const advents = 375 * 4;
// const papier = 100;
// const box = 650;
// let items = [
//   rebkuchen,
//   santa,
//   esset,
//   mon,
//   bear,
//   tee,
//   memory,
//   stollen,
//   cafe,
//   advents,
//   papier,
//   box,
// ];
// console.log(items);

// let sum = 0;
// const calcWeight = arr => {
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// };
// console.log(calcWeight(items));

// s2 challenge 4
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

// mau's way
// const calcTip = (arrBill, arrTip) => {
//   for (let i = 0; i < arrBill.length; i++) {
//     let tip = 0;
//     tip =
//       arrBill[i] >= 50 && arrBill[i] <= 300
//         ? arrBill[i] * 0.15
//         : arrBill[i] * 0.2;
//     tips.push(tip);
//   }
//   for (let i = 0; i < arrTip.length; i++) {
//     let total = 0;
//     total = arrTip[i] + arrBill[i];
//     totals.push(total);
//   }
//   console.log(tips, totals);
// };
// calcTip(bills, tips);

// default answer
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  const total = tips[i] + bills[i];
  totals.push(total);
}
console.log(bills, tips, totals);

const calcAverage = arr => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
};
console.log(calcAverage(totals));
