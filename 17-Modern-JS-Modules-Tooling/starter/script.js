/*
////////////////////////////
// Importing module

// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log('Importing module');

// addToCart('bread', 5);
// console.log(price, tq);

// To import every variables
import * as ShoppingCart from './shoppingCart.js';
ShoppingCart.addToCart('bread', 5);
console.log(ShoppingCart.tq);
*/

// To import default export - we can name as we want
import add from './shoppingCart.js';
add('pizza', 2);

/*
////////////////////////////
// Module pattern

const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return { addToCart, cart, totalPrice, totalQuantity };
})();

ShoppingCart2.addToCart('apple', 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost);
*/

////////////////////////////
// Introduction to NPM
// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);

// To prevent reload but keep the existing logs
if (module.hot) {
  module.hot.accept();
}
