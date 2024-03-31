//😍EXPORTING AND IMPORTING IN ES6

console.log("Export Module");

const shippingCart = 10;
export { shippingCart };
const cart = [];
export { cart };
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to Cart`);
};
// addToCart("bread", 5);

const totalprice = 237;
const totalQuantiy = 23;
export { totalprice, totalQuantiy as tq };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to Cart`);
}

// 😍TOP LEVEL AWAIT ...............
