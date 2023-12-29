"use strict";

const modal1 = document.querySelector(".modal1");
const overlaping = document.querySelector(".overlap");
const btnCloseModal1 = document.querySelector(".close-modal1");
const btnOpenModal1 = document.querySelector(".show-modal1");

const openmodal1 = function () {
  //   console.log("button clicked");
  modal1.classList.remove("hidden1");
  overlaping.classList.remove("hidden");
};

const closemodal1 = function () {
  modal1.classList.add("hidden1");
  overlaping.classList.add("hidden");
};

btnOpenModal1.addEventListener("click", openmodal1);
btnCloseModal1.addEventListener("click", closemodal1);

//for modal 2

const modal2 = document.querySelector(".modal2");
const btnCloseModal2 = document.querySelector(".close-modal2");
const btnOpenModal2 = document.querySelector(".show-modal2");

const openmodal2 = function () {
  //   console.log("button clicked");
  modal2.classList.remove("hidden2");
  overlaping.classList.remove("hidden");
};

const closemodal2 = function () {
  modal2.classList.add("hidden2");
  overlaping.classList.add("hidden");
};

btnOpenModal2.addEventListener("click", openmodal2);
btnCloseModal2.addEventListener("click", closemodal2);

//for modal 3

const modal3 = document.querySelector(".modal3");
const btnCloseModal3 = document.querySelector(".close-modal3");
const btnOpenModal3 = document.querySelector(".show-modal3");

const openmodal3 = function () {
  //   console.log("button clicked");
  modal3.classList.remove("hidden3");
  overlaping.classList.remove("hidden");
};

const closemodal3 = function () {
  modal3.classList.add("hidden3");
  overlaping.classList.add("hidden");
};

btnOpenModal3.addEventListener("click", openmodal3);
btnCloseModal3.addEventListener("click", closemodal3);

//for modal 4

const modal4 = document.querySelector(".modal4");
const btnCloseModal4 = document.querySelector(".close-modal4");
const btnOpenModal4 = document.querySelector(".show-modal4");

const openmodal4 = function () {
  //   console.log("button clicked");
  modal4.classList.remove("hidden4");
  overlaping.classList.remove("hidden");
};

const closemodal4 = function () {
  modal4.classList.add("hidden4");
  overlaping.classList.add("hidden");
};

btnOpenModal4.addEventListener("click", openmodal4);
btnCloseModal4.addEventListener("click", closemodal4);

//for modal 5

const modal5 = document.querySelector(".modal5");
const btnCloseModal5 = document.querySelector(".close-modal5");
const btnOpenModal5 = document.querySelector(".show-modal5");

const openmodal5 = function () {
  //   console.log("button clicked");
  modal5.classList.remove("hidden5");
  overlaping.classList.remove("hidden");
};

const closemodal5 = function () {
  modal5.classList.add("hidden5");
  overlaping.classList.add("hidden");
};

btnOpenModal5.addEventListener("click", openmodal5);
btnCloseModal5.addEventListener("click", closemodal5);
