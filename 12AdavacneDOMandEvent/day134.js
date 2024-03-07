//EVENT DELEGATION: implementating Page Navigation.....

//😍😍Page Navigation.....

//😇😇😇😇Smooth Scrolling...........
document.querySelectorAll(".nav__link").forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    // console.log("LINK");

    const id = this.getAttribute("href");
    console.log(id);

    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});


//😇Another Method Scrolling......
//Note: Add event listener to common present element
//Note: Determine what element originated the event

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  //if it contains or not....
  //matching strategy....
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
/*
//😍😍DOM TRAVERSING................

const h1 = document.querySelector("h1"); //NodeList(2) [span.highlight, span.highlight]

//🤔---->Going Downwards: child..
console.log(h1.querySelectorAll(".highlight"));
console.log(h1.childNodes);
//NodeList(9) [text, comment, text, span.highlight, text, br, text, span.highlight, text]

console.log(h1.children);
//HTMLCollection(3) [span.highlight, br, span.highlight]

//change color....
h1.firstElementChild.style.backgroundColor = "blue";
h1.lastElementChild.style.backgroundColor = "green";

//🤔---->Going upwards: parents.....
console.log(h1.parentNode);
console.log(h1.parentElement);

//👋👋closest most important (it finds parent element)
h1.closest(".header").style.background = "linear-gradient(yellow, green)";
h1.closest("h1").style.background = "linear-gradient(blue, balck)";

//🤔---->Going sideways: siblings....
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);

//for fun.....
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = "scale(0.5)";
});
*/

//😍😍BUILDING A TABBED COMPONENT....

const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");

const tabsContent = document.querySelectorAll(".operations__content");

//forEach not use it creates multiple tab , and it slowdown our page
// tabs.forEach((t) => t.addEventListener("click", () => console.log("TAB")));

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");
  console.log(clicked);

  //guard clause....
  if (!clicked) return;

  //Remove active classes....
  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'))


  //Active tab.....

  clicked.classList.add("operations__tab--active");

  //Activate content area....

  console.log(clicked.dataset.tab);
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});
