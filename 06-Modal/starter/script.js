'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClosedModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnOpenModal); // logs everything with tags

const openModal = () => {
  //   console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// To open the modal window
for (let i = 0; i < btnOpenModal.length; i++)
  // no need to use {} for only one line of code
  btnOpenModal[i].addEventListener('click', openModal);
// Can be written as below but above is more DRY!
//   btnOpenModal[i].addEventListener('click', function () {
//     console.log('Button clicked');
//     modal.classList.remove('hidden'); // can be selected multiple classes separated with ','
//     overlay.classList.remove('hidden');
//   });

// To close the modal window
btnClosedModal.addEventListener('click', closeModal); // no () after function otherwise JS excutes the function immediately witout click event
// Can be written as below but then its duplicated
// btnClosedModal.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

// To close the modal window by clicking outside of the modal window
overlay.addEventListener('click', closeModal); // no () after function otherwise JS excutes the function immediately witout click event
// Can be written as below but then its duplicated
// overlay.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

// To close the modal window by hitting esc key
document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
