"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModel = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");
// console.log(btnOpenModal);
const openmodal = function () {
  // console.log("Button Clicked");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closemodal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener("click", openmodal);

btnCloseModel.addEventListener("click", closemodal);
overlay.addEventListener("click", closemodal);

//key event handling

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    {
      closemodal();
    }
  }
});
