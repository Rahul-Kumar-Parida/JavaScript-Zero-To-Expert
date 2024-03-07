//😍ADVANCED DOM AND EVENTS......................
//😲How The DOM Really Works

//😲 Selecting , Creating and Deleting Elements...

//👇selecting....
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector(".header");
const allSections = document.querySelectorAll(".section");
console.log(allSections); //Node List

document.getElementById("section--1");
const allButtons = document.getElementsByTagName("button");
console.log(allButtons);

console.log(document.getElementsByClassName("btn"));

//👇 Creating and inserting elements
//.insertAdjacentHTML

const message = document.createElement("div");
message.classList.add("cookie-message");

// message.textContent = "we use cookied for improved functionality and analytics";

message.innerHTML =
  'we use cookied for improved functionality and analytics, <button class="btn btn--close-cookie"> Got It! </button>';

// header.prepend(message); //start
// header.append(message); //end

// header.append(message.cloneNode(true)); //both start and end

header.before(message);  //start
// header.after(message);  //end

//👇delete elements.................

document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    // message.remove();
    message.parentElement.removeChild(message);
  });
