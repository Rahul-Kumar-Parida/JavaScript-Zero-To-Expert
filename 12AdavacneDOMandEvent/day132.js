//👇👇👇👇 STYLE , ATTRIBUTE AND CLASSES...
/*
const header = document.querySelector(".header");
const message = document.createElement("div");
message.classList.add("cookie-message");

message.innerHTML =
  'we use cookied for improved functionality and analytics, <button class="btn btn--close-cookie"> Got It! </button>';

// header.prepend(message); //start
// header.append(message); //end
// header.append(message.cloneNode(true)); //both start and end
header.before(message); //start
// header.after(message);  //end

//delete elements.................

document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    // message.remove();
    message.parentElement.removeChild(message);
  });

//🤔style...........................................................................
message.style.backgroundColor = "#37383d";
message.style.width = "65%";

console.log(message.style.color); //not set so not visible
console.log(message.style.backgroundColor); //it is set so it showing //rgb(55, 56, 61)

console.log(getComputedStyle(message).height); //20.7799px
console.log(getComputedStyle(message).color);

//set height
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 50 + "px";
console.log(getComputedStyle(message).height); //70.7666px after set height

//change color in all primary element by using setProperty method
// document.documentElement.style.setProperty("name", "orange");

//🤔Attributes...........................................

const logo = document.querySelector(".nav__logo");
console.log(logo.alt); //Bankist logo
console.log(logo.src); //image link return
console.log(logo.className); //nav__logo

//when i set a attribut what will going to happen
console.log(logo.designer); //undefined
//but another way to get
console.log(logo.getAttribute("designer")); //Jonas

//now i want to set
logo.setAttribute("company", "Bankist");
console.log(logo.getAttribute("company")); //Bankist

//relative version link..
console.log(logo.src); //http://127.0.0.1:5500/12AdavacneDOMandEvent/img/logo.png

//i want absolute version....
console.log(logo.getAttribute("src")); //img/logo.png

//data attribute...'
console.log(logo.dataset.versionNumber); //3.0

//🤔CLASSES..............
logo.classList.add("c", "j");
logo.classList.remove("c", "j");
logo.classList.toggle("c");
logo.classList.contains("c"); //not includes

//Don't use
logo.className = "jonas";


const NumLetter = 567 + "hj";
console.log(NumLetter); //567hj
console.log(Number(NumLetter)); //NaN
console.log(Number.parseInt(NumLetter)); //567

*/

//👇👇👇👇 SCROLLING ANIMATION .....................

const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log("Current scrool (X/Y)", window.pageXOffset, window.pageYOffset);
  //Current scrool (X/Y) 0 0

  console.log(
    "height/width viewport",
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  ); //height/width viewport 709 755 //value change

  //😍Scrolling   to the section..
  //   window.scrollTo(
  //     s1coords.left + window.pageXOffset,
  //     s1coords.top + window.pageYOffset
  //   );

  //😍 Smooth scrolling...
  //   window.scrollTo({
  //     left: s1coords.left + window.pageXOffset,
  //     top: s1coords.top + window.pageYOffset,
  //     behavior: "smooth",
  //   });

  //😍😍 Another Way smooth scrolling...

  section1.scrollIntoView({ behavior: "smooth" });
});


