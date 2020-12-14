'use strict';

////////////////////////////////////
// Challenge 4

/*
// test data
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

// 1. Get the user input data - OK
const btn = document.querySelector('button');
const arr = [];

// convert them into lowercase - toLowerCase()
// put them into an array, 5 diff ones - replace new lines into ',' and split with ','
// ------ iterate ------
// replace _ with space - OK
// remove beginning & end spaces - OK
// convert them into camelCase

// 5 different strings
// into 5 different arrays

btn.addEventListener('click', function () {
  const userInput = document.querySelector('textarea').value;
  const items = userInput.split('\n');
  console.log(items);

  for (const [i, item] of items.entries()) {
    const [first, second] = item.toLowerCase().trim().split('_');
    // console.log(first, second);
    const output = `${first}${second[0].toUpperCase()}${second.slice(1)}`;

    console.log(`${output.padEnd(20)}${'💪'.repeat(i + 1)}`);
  }
});

/*
////////////////////////////////////
// Challenge 1-3
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
*/

/*
////////////////////////////////////
// Challenge 3
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1
const events = new Set([...gameEvents.values()]);
console.log(events);

// 2
gameEvents.delete(64);
console.log(gameEvents);

// 3 TODO Review needed
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

// 4
// const first45 = '[FIRST HALF]';
// const second45 = '[SECOND HALF]';
// for (const [key, value] of gameEvents) {
//   key < 45
//     ? console.log(`${first45} ${key}: ${value}`)
//     : console.log(`${second45} ${key}: ${value}`);
// }
// Official answer
for (const [key, value] of gameEvents) {
  const half = key <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${key}: ${value}`);
}
*/

/*
////////////////////////////////////
// Challenge 2

const odds = game.odds;

// 1
// const players = [...game.scored];
// for (const [i, player] of players.entries()) {
//   console.log(`Goal ${i + 1}: ${player}`);
// }

// Official answer
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

// 2
const odd = Object.values(odds);
console.log(odd);

let sum = 0;
for (const value of odd) {
  sum += value;
}
const avrg = sum / odd.length;
console.log(`Average odd: ${avrg}`);

// 3 - TODO how to print team name???
const entries = Object.entries(odds);
// console.log(entries);

for (const [team, oddValue] of entries) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of victory ${teamStr}: ${oddValue}`);
}
// game[team] to get value (team name) of team1 and team2

// 4
const scorers = {};
scorers.Gnarby = 1;
scorers.Hummels = 1;
scorers.Lewandowski = 2;
console.log(scorers);
*/

/*
////////////////////////////////////
// Challenge 1

// 1 - Review needed (destructuring)
// const players1 = [...game.players[0]];
// const players2 = [...game.players[1]];
// console.log(players1, players2);
// Officail answer
const [players1, players2] = game.players;
console.log(players1, players2);

// 2 - OK
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3 - OK
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4 - OK
const subPlayers1 = ['Thiago', 'Coutinho', 'Perisic'];
const players1Final = [...players1, ...subPlayers1];
console.log(players1Final);

// 5 - Review neede (destructuring)
// const team1 = game.odds.team1;
// const draw = game.odds.x;
// const team2 = game.odds.team2;
// console.log(team1, draw, team2);
// Official answer
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6
const printGoals = function (...players) {
  for (let i = 0; i < players.length; i++) console.log(players[i]);
  console.log(`${players.length} goals were scored`);
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

// 7 Review neede - short circuiting
// const win = team1 > team2 || team1 < team2;
// console.log(win);
team1 < team2 && console.log('Team 1 is more likele to win');
team1 > team2 && console.log('Team 2 is more likele to win');
*/
