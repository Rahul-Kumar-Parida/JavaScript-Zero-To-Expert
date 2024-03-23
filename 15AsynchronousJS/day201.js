"use strict";
//ASYNCHRONOUS JAVASCRIPT:AJAX AND WEB APIs

//😍😍😍OUR first AJAX Call: XMLHttpRequest
/*
const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    const html = `
  <article class="country">
    <img class="country__img" src="${data.flags.svg}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row">
        <span>👫</span>${(data.population/1000000).toFixed(1)}M people
      </p>
      <p class="country__row">
        <span>🗣️</span>${data.languages.eng}
      </p>
      <p class="country__row">
        <span>💰</span>${data.currencies}
      </p>
    </div>
  </article>`;

    countriesContainer.insertAdjacentHTML("beforeend", html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData("russia");
getCountryData("germany");
getCountryData("usa");
getCountryData("Bharat");



//😍😍😍How The Web Works: Request and responses

//WELCOME TO CALLBACK HELL
const renderCountry = function (data, className = "") {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flags.svg}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row">
        <span>👫</span>${(data.population / 1000000).toFixed(1)}M people
      </p>
      <p class="country__row">
        <span>🗣️</span>${data.languages.eng}
      </p>
      <p class="country__row">
        <span>💰</span>${data.currencies}
      </p>
    </div>
  </article>`;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const getCountryAndNeighbour = function (country) {
  //AJAX call Country 1
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    //render country
    renderCountry(data);

    //get neighbour country (2)
    const [neighbour] = data.borders;
    if (!neighbour) return;

    //AJAX CALL COUNTRY 2

    const request2 = new XMLHttpRequest();
    request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener("load", function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);
      renderCountry(data2, "neighbour");
    });
  });
};

getCountryAndNeighbour("bharat");

//😍😍😍callback hell..........

setTimeout(() => {
  console.log("1 Second Passed");
  setTimeout(() => {
    console.log("2 Second Passed");
    setTimeout(() => {
      console.log("3 Second Passed");
      setTimeout(() => {
        console.log("4 Second Passed");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);


*/

