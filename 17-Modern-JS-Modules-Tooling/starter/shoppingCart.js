// Exporting module - executed first
console.log('Exporting module');

const shippingCost = 10;
const cart = [];

// Named exports
// Keyword 'export' must be at the top of the block
// e.g., if(!shippingCost) is not working
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

// Change name by using as
export { totalPrice, totalQuantity as tq };

// Default exports - no name needed, just value
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
