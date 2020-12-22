'use strict';

/////////////////////////////////////////
// Challenge 2

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
// IIFE is already executed by the time the callback function at the eventhandler is executed so why this callback function can still access to header variable?
// This worked because of a closure, which gives a callback function access to header variable even after its parent function is executed

/*
/////////////////////////////////////////
// Challenge 1

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],

  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  registerNewAnswer(userInput) {
    // const [a, b, c, d] = this.options;
    // userInput = Number(
    //   prompt(`${this.question}\n${a}\n${b}\n${c}\n${d}\n(Write option number)`)
    // );
    userInput = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(userInput);

    // if (userInput === 0) {
    //   this.answers[0] += 1;
    // } else if (userInput === 1) {
    //   this.answers[1] += 1;
    // } else if (userInput === 2) {
    //   this.answers[2] += 1;
    // } else if (userInput === 3) {
    //   this.answers[3] += 1;
    // }

    typeof userInput === 'number' &&
      userInput < this.answers.length &&
      this.answers[userInput]++;

    //Problem 1 - cannot read this keyword, returns undefined - SOLVED with bind method
    // console.log(this.answers);
    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll)); // if there is no bind method here, this keyword points to .poll element, so we need to bind object at which we want to point

// BONUS
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
// 1st argument is what we want to point at and 2nd argument is original argument for displayResults (either 'array' or 'string')
// [5, 2, 3];
// [1, 5, 3, 9, 6, 1];
*/
