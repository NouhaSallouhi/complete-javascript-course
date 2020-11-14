'use strict';

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// // there is only one line so no {} nor return needed
// // of course i can still write as below tho
// // {
// // return (score1 + score2 + score3) / 3;
// // }

// // test 1
// let averageDolphins = calcAverage(44, 23, 71);
// let averageKoalas = calcAverage(65, 54, 49);
// console.log(averageDolphins, averageKoalas);

// const checkWinner = (avgDolhins, avgKoalas) => {
// 	if (avgDolhins >= avgKoalas * 2) {
// 		console.log(`Dolphins win (${avgDolhins} vs. ${avgKoalas})`);
// 	} else if (avgKoalas >= avgDolhins * 2) {
// 		console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`);
// 	} else {
// 		console.log('Neither team wins this time😭');
// 	}
// };

// checkWinner(averageDolphins, averageKoalas);

// // test 2
// averageDolphins = calcAverage(85, 54, 41);
// averageKoalas = calcAverage(23, 34, 27);
// console.log(averageDolphins, averageKoalas);
// checkWinner(averageDolphins, averageKoalas);

// // challenge 2
// const calcTip = bill => {
// 	let tip;
// 	if (bill >= 50 && bill <= 300) {
// 		tip = bill * 0.15;
// 	} else {
// 		tip = bill * 0.2;
// 	}
// 	return tip;
// };

// // const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2; // this is also correct

// const testFunction = calcTip(100);
// console.log(`Test Bill is $100 and the tip is $${testFunction}`);

// const bills = [125, 555, 44];
// const tips = [
// 	calcTip(bills[0]),
// 	calcTip(bills[1]),
// 	calcTip(bills[bills.length - 1]),
// ];

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(bills, tips, total);

// // chanllenge 3
// const mau = {
// 	fullName: 'Mau Begic',
// 	mass: 43,
// 	height: 1.57,
// 	// method has no params because we will take the data directly from the object using 'this' variable
// 	calcBMI: function () {
// 		this.BMI = this.mass / this.height ** 2;
// 		return this.BMI;
// 	},
// };
// mau.calcBMI(); // without this method call, mau.BMI would not be available!
// console.log(mau.BMI);

// const pau = {
// 	fullName: 'Pau Begic',
// 	mass: 85,
// 	height: 1.93,
// 	// method has no params because we will take the data directly from the object using 'this' variable
// 	calcBMI: function () {
// 		this.BMI = this.mass / this.height ** 2;
// 		return this.BMI;
// 	},
// };
// pau.calcBMI(); // without this method call, pau.BMI would not be available!
// console.log(pau.BMI);

// if (mau.BMI > pau.BMI) {
// 	console.log(
// 		`${mau.fullName}'s BMI (${mau.BMI}) is higher than ${pau.fullName}'s BMI (${pau.BMI}).`
// 	);
// } else {
// 	console.log(
// 		`${pau.fullName}'s BMI (${pau.BMI}) is higher than ${mau.fullName}'s BMI (${mau.BMI}).`
// 	);
// }

// // challenge 3
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// // my answer
// // for (let i = 0; i < bills.length; i++) {
// // 	const calcTip = bill =>
// // 		bills[i] >= 50 && bills[i] <= 300 ? bills[i] * 0.15 : bills[i] * 0.2;
// // 	tips.push(calcTip());

// // 	const mealCost = (bill, tip) => bills[i] + tips[i];
// // 	totals.push(mealCost());
// // }
// // console.log(tips, totals);

// // official answer
// const calcTip = bill => (bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2);

// for (let i = 0; i < bills.length; i++) {
// 	const tip = calcTip(bills[i]);
// 	tips.push(tip);
// 	totals.push(bills[i] + tip);
// }
// console.log(bills, tips, totals);

// const calcAverage = arr => {
// 	let sum = 0;
// 	for (let j = 0; j < arr.length; j++) {
// 		sum += arr[j];
// 	}
// 	return sum / arr.length;
// };
// console.log(calcAverage(totals));
