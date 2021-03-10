'strict mode';

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

// To make object immutable
const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

spendingLimits.jay = 200; // jay is not added bc it's freezed
console.log(spendingLimits);

// const getLimit = user => spendingLimits?.[user] ?? 0; // avoid using external variables from the outer scope
const getLimit = (limits, user) => limits?.[user] ?? 0;

// Pure function :D
const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  // if (!user) user = 'jonas';
  const cleanUser = user.toLowerCase();

  // let lim;
  // if (spendingLimits[user]) {
  //   lim = spendingLimits[user];
  // } else {
  //   lim = 0;
  // }
  // 👇 clever
  // const limit = spendingLimits[user] ? spendingLimits[user] : 0;
  // 👇 more clever
  // const limit = getLimit(user);

  return value <= getLimit(limits, cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state; // copy budjet object and add a new object

  // budget.push({ value: -value, description: description, user: user });
  // budget.push({ value: -value, description, user: cleanUser }); // Manipulating original object should be avoided
};

const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');

const newBudget2 = addExpense(
  newBudget1,
  spendingLimits,
  100,
  'Going to movies 🍿',
  'Matilda'
);
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');

// const checkExpenses = function (state, limits) {
//   return state.map(entry => {
//     // 1. create a new state based on original one
//     return entry.value < -getLimit(limits, entry.user) // 2. when value is above the limit
//       ? { ...entry, flag: 'limit' } // 3. original copy and set new property
//       : entry;
//   });
//   // let lim;
//   // if (spendingLimits[entry.user]) {
//   //   lim = spendingLimits[entry.user];
//   // } else {
//   //   lim = 0;
//   // }
//   // const limit = spendingLimits?.[entry.user] ?? 0;

//   // for (const entry of newBudget3)
//   //   if (entry.value < -getLimit(limits, entry.user)) entry.flag = 'limit';
// };

const checkExpenses = (state, limits) =>
  state.map(entry =>
    // 1. create a new state based on original one
    entry.value < -getLimit(limits, entry.user) // 2. when value is above the limit
      ? { ...entry, flag: 'limit' } // 3. original copy and set new property
      : entry
  );

const finalBudget = checkExpenses(newBudget3, spendingLimits);
console.log(finalBudget);

const logBigExpenses = function (state, bigLimit) {
  const bigExpenses = state
    .filter(entry => entry.value <= -bigLimit)
    .map(entry => entry.description.slice(-2))
    .join(' / ');
  console.log(bigExpenses);

  // let output = '';
  // for (const entry of budget)
  //   output +=
  //     entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : ''; // Emojis are 2 chars so -2
  // output = output.slice(0, -2); // Remove last '/ '
  // console.log(output);

  // if (entry.value <= -bigLimit) {
  //   output += `${entry.description.slice(-2)} / `;
};

logBigExpenses(finalBudget, 500);
