'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// Starting conditions
const init = () => {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0; // the score of active player should shown as 0
  currentScore = 0; // set the stored score back to 0
  activePlayer = activePlayer === 0 ? 1 : 0; // now switch to the next player
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    //   console.log(dice);

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for if it's 1: if true
    if (dice !== 1) {
      // Add dice to the current score
      // currentScore = currentScore + dice
      currentScore += dice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
      // current0El.textContent = currentScore; // above is same code but select the active player dynamically
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore; // is equal to scores[0 or 1] = score[0 or 1] + currentScore

    console.log(scores[activePlayer]);

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2. Check if the player's score is >= 100
    if (scores[activePlayer] >= 20) {
      // Finish the game

      playing = false; // when score is >=100 playing will be false and next time a user clicks any button, none of this and above btnRoll will be executed

      diceEl.classList.add('hidden'); // when the game finishes, hide the dice again

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

// Resetting the game - This is official answer!
btnNew.addEventListener('click', init);

// // Resetting the game - This is my answer!
// const clearScore = idName => {
//   document.getElementById(idName).textContent = 0;
// };

// btnNew.addEventListener('click', function () {
//   // 1. Set all scores to 0 (current and hold)

//   // Below is my code but they are already stored as variable at the beginning!
//   currentScore = 0;
//   clearScore('current--0');
//   clearScore('current--1');

//   scores = [0, 0];
//   clearScore('score--0');
//   clearScore('score--1');

//   // 2. Set back the background color

//   // Below is my code but they are already stored as variable at the beginning!
//   document.querySelector('.player--0').classList.remove('player--winner');
//   document.querySelector('.player--1').classList.remove('player--winner');

//   // 3. Hide dice
//   diceEl.classList.add('hidden');

//   // 4. Set player 0 as starting player
//   if (activePlayer === 1) {
//     player0El.classList.add('player--active');
//     player1El.classList.remove('player--active');
//   }
//   playing = true;
// });
