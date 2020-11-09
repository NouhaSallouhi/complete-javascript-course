/**
alert("Mau desu");
console.log(10 + 20 + 30 - 5);
let PI = 3.1415;
*/

// section 2 part 1 - 18
// const age = 12;
// if (age >= 18) {
//   // cmnd + ctrl + space emojis!
//   console.log("Mau can have a driving license😎🚘");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Mau is too young. Wait another ${yearsLeft} years😭`);
// }

// const birthYear = 1989;

// let century; // i have to declare century here to access it globally
// if (birthYear <= 2000) {
//   century = 20; // do not put let here otherwise it shows as undefined
// } else {
//   century = 21; // do not put let here otherwise it shows as undefined
// }
// console.log(century); // i can log out century because i have declared it outside of if else statement

// section 2 part 1 - 21
// const money = 0;
// if (money) {
//   console.log("I have money");
// } else {
//   console.log("I have no money"); // logs this one because anything in the parenthesis in if else statement is converted into boolean and 0 is falsy value!
// }

// let height;
// if (height) {
//   console.log("Yay height is defined");
// } else {
//   console.log("height is UNDEFINED"); // logs this one because no value is assigned to variable height
// }

// section 2 part 1 - 21
// const favorite = Number(prompt("What is your favorite number?")); // without Number(), input is string
// console.log(favorite);
// console.log(typeof favorite);

// if (favorite === 23) {
//   console.log("Cool!");
// } else if (favorite === 7) {
//   console.log("OK!");
// } else {
//   console.log("Number is neither 23 or 7, your not cool😩");
// }

// section 2 part 1 - 24
// const hasDriversLicense = true;
// const hasGoodVision = false;
// const isTired = true;

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log("Sarah can drive");
// } else {
//   console.log("Someone else should drive");
// }

// sectiom 2 - part 1 - 26
// const userInput = prompt("What is your favorite day?");
// switch (userInput) {
//   case "monday":
//     alert("You are such a motivated person!");
//     break;
//   case "tuesday":
//     alert("why? what is special on tuesday? i don't understand😩");
//     break;
//   case "wednesday":
//   case "thursday":
//     alert("Ah weekend is close, I know it's exciting.");
//     break;
//   case "friday":
//     alert("You are a party guru!");
//     break;
//   case "saturday":
//   case "sunday":
//     alert("You are such a relaxed person🐙");
//     break;
//   default:
//     alert("Hey you gotta enter a valid day!");
// }

// // rewrite the course code
// const day = "monday";
// if (day === "monday") {
//   console.log("Plan course structure");
//   console.log("Go to coding meetup");
// } else if (day === "tuesday") {
//   console.log("Prepare theory videos");
// } else if (day === "wednesday" || day === "thursday") {
//   console.log("Write code examples");
// } else if (day === "friday") {
//   console.log("Record videos");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("Enjoy the weekend :D");
// } else {
//   console.log("Not a valid day!");
// }

// section 2 part 1 - 28

// Ternary operator is sometimes better than if else statement but it does not mean it can be replacement of if else statement
const age = 31;
const drinkingIsAllowed =
  age >= 18 ? console.log("Alcohol🍻") : console.log("Non alcohol🥤");

// especially with template literals!
console.log(`I like drinking ${age >= 18 ? "Alcohol🍻" : "Non alcohol🥤"}`);

// this is same output but writing above code is recommended for better readability
let drink2;
if (age >= 18) {
  drink2 = "Alcohol🍻";
} else {
  drink2 = "Non alcohol🥤";
}
console.log(drink2);
