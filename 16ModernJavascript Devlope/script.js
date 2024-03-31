
//😍EXPORTING AND IMPORTING IN ES6...........................

//TYPE--01;
import { addToCart, shippingCart as scart } from "./shoppingCar.js";

console.log("Import module");
addToCart("bread", 4);
console.log(scart); //10


//TYPE --02;
// import * as Variable from "./shoppingCar.js";
// Variable.addToCart('egg Omlet', 5);
// console.log(Variable.totalprice);
// console.log(Variable.tq);

//default type-3
// import add from "./shoppingCar.js";
// add('pizza',7)

//type-4
import add, { cart } from "./shoppingCar.js";
add("pizza", 7);
add("burgir", 3);
add("pasta", 7);
console.log(cart);


/*
// 😍TOP LEVEL AWAIT ...............
//1...
// console.log("start fetching");
// const res = await fetch("https://jsonplaceholder.typicode.com/posts");
// const data = await res.json();
// console.log(data);

//2...
const getLastPost = async function () {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  //   console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};

//return 1 (not very clean)...
// const lastPost = getLastPost();
// const res = lastPost.then(function(a){
//     console.log(a);
// })
// console.log(res);

//return -2 (clean)...
const lastPost2 = await getLastPost();
console.log(lastPost2);

*/
/*
//😍 THE MODULE PATTERN

const shippingCart2 = (function () {
  const cart = [];
  const shippingCart = 10;
  const totalPrice = 237;
  const totalQuantiy = 23;
  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to Cart`);
  };
  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered From supplier`);
  };

  return {addToCart,orderStock, cart, shippingCart, totalPrice, totalQuantiy };
})();

shippingCart2.addToCart("egg", 5);
shippingCart2.addToCart("pizza", 15);
shippingCart2.orderStock("pizza", 15);
console.log(shippingCart2);
*/

/*
//😍 COMMON JS MODULE....................

export.addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to Cart`);
  };

const { addToCart } = require('./shoppingCar.js');


//😍 A brief Introduction To The command Line:

// ls : current directory
// cd .. : move previous folder
// cd folder_Name : move next folder
//  cd ../.. : move previous 2 folder
//clear :  all clear
// mkdir folderName : create new folder
//live-server :  file running live server
//ctrl+c :  exit liver server

*/
/*
//😍 Ittroduction to NPM....
//npm -v  :to check npm version
//npm init  : download package
//npm i packName : download any package

import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";

const state = {
  cart: [
    {
      product: "bread",
      quantity: 5,
    },
    {
      product: "pizza",
      quantity: 3,
    },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);
*/

//😍Bundling with parcel and NPM scripts......


