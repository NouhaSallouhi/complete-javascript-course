'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTO = document.querySelector('.btn--scroll-to');
const section1 = document.getElementById('section--1');

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////
// Button scrolling (Smooth scroll 🥺)

btnScrollTO.addEventListener('click', e => {
  // Get Y of section 1
  const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);
  // console.log(e.target.getBoundingClientRect()); // e.target points btnScrollTO
  console.log('Current scroll (X/Y), ', window.pageXOffset, window.pageYOffset);
  // console.log(
  //   'height/width viewport',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  // Scrolling

  // Old way
  // window.scrollTo(s1coords.left, s1coords.top);
  // To scroll to the section 1, no matter where the page is scroll down, add pageOffset
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scroll({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  // New way
  section1.scrollIntoView({ behavior: 'smooth' });
});

///////////////////////////////////////
// Page navigation

// Attaching same event handler to multiple elements is bad practice -> USE EVENT DELEGATION
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({
//       behavior: 'smooth',
//     });
//   });
// });

// Event delegation
// 1. Add event handler to common parent element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Event happens only nav__link is clicked
  if (e.target.classList.contains('nav__link')) {
    // e.target is where the event occurs
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
    });
  }
});

/*
///////////////////////////////////////
// Selecting, Creating, and Deleting Elements

// Selecting elements
console.log(document.documentElement); // <html></html>
console.log(document.head); // <head></head>
console.log(document.body); // <body></body>

// Selecting all tags and classes and return as HTMLCollection
// Not used so often
console.log(document.getElementsByTagName('button')); // Select all tags
console.log(document.getElementsByClassName('btn')); // Select all classes

// Creating and inserting elements
// insertAdjacentHTML()
// const h4 = document.querySelector('h4');
// h4.insertAdjacentHTML(
//   'beforeend',
//   `<h3>I just want to test if this will be rendered correctly!</h3>`
// );

// Prepend - insert Node object b4 the first child of the ParentNode
const header = document.querySelector('header');
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent =
//   'We use cookies for imporoved and functionality and analytics.';
message.innerHTML =
  'We use cookies for imporoved and functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
// header.prepend(message);

// Append - insert Node object after the last child of the ParenetNode
header.append(message);

// before / after methods
// header.before(message);
// header.after(message);

// Deleting elements
const closeCookie = document.querySelector('.btn--close-cookie');
closeCookie.addEventListener('click', () => message.remove());
*/

/*
///////////////////////////////////////
// Styles, attributes and classes

// Styles
message.style.background = '#37383d';
message.style.width = '120%';

// Thoes inline styles can be logged like this
console.log(message.style.background);

// But styles in CSS, we need to use getComputedStyle
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// message.style.height = getComputedStyle(message).height + 30 + 'px'; // this doesn't work, because returns value is string
console.log(message.style.height);

// Change CSS value
// To change color declared in the root
document.documentElement.style.setProperty('--color-primary', 'pink');

// Attribute
const logo = document.querySelector('.nav__logo');
// To get standard attribute
console.log(logo.src); // absolute path
console.log(logo.alt);
console.log(logo.className);

// To get non-standard
console.log(logo.getAttribute('src')); // relative path

// Set attribute
logo.setAttribute('designer', 'Mau');
console.log(logo.getAttribute('designer')); // Mau

// Data attribute
console.log(logo.dataset.versionNumber); // 3.0

// DO NOT set classes like this, this overrides the existing class
// logo.className = 'Mau'
// USE classList.add / remove / toggle / contains
console.log(logo.classList.contains('nav__logo')); // true
*/

/*
///////////////////////////////////////
// Event handlers
const h1 = document.querySelector('h1');
const alertH1 = e => {
  alert('Eventhandler');

  // Prevent from listening after one time
  // h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter', alertH1);
// Prevent from liestening after cetrain time
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 5000);
*/

/*
///////////////////////////////////////
// Event propagation

// Create random color - rgb(255, 255, 255)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// grandchild, event is also happened at child and parent bc event bubbles up until the parent element
document.querySelector('.nav__link').addEventListener('click', function (e) {
  // arrow function does not work
  this.style.background = randomColor();
  console.log('LINK', e.target, e.currentTarget);

  // Stop event propagation, prevents event from arriving the parent element - NOT GOOD PRACTICE THO!
  // e.stopPropagation();
});

// child, event is also happened at parent bc event bubbles up to the parent element
document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.background = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
});

// parent, event is happened here only
document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.background = randomColor();
  console.log('NAV', e.target, e.currentTarget);
});
*/
