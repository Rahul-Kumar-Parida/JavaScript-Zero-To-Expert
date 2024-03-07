//TYPES OF EVENT AND EVENT HANDLER.......

/*
const h1 = document.querySelector("h1");

// //mouseenter method........
// h1.addEventListener("mouseenter", function (e) {
//   alert("addEventListener: great! You are reading the heading");
// });

// //another way
// h1.onmouseenter = function (e) {
//   alert("onmouseenter: great! You are reading the heading");
// };

//another way
const alertH1 = function (e) {
  alert("another way 3: great! You are reading the heading");

  //remove alert immediately....
  //   h1.removeEventListener("mouseenter", alertH1);
};
h1.addEventListener("mouseenter", alertH1);

//i want remove after 10 sec
setTimeout(() => h1.removeEventListener("mouseenter", alertH1), 10000);

//we also create in html tag
*/
// {/* <h1 onclick="alert('html alert')">he llo</h1> */}

//EVENT PROPAGATION : BUBBLING AND CAPTURING................

//😍😍😍😍😍 Random color generator..
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 225)},${randomInt(0, 225)},${randomInt(0, 225)})`;

document.querySelector(".nav__link").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("LINK", e.target, e.currentTarget.style.backgroundColor);
  console.log(e.currentTarget === this); //true

  //STOP PROPAGATION...
//   e.stopPropagation();
});

//parrent element
document.querySelector(".nav__links").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("CONTAINER", e.target, e.currentTarget);
});

////parrent element
document.querySelector(".nav").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("NAV", e.target, e.currentTarget);
});
