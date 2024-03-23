//😍 Promises and Fetch api..............
const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

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
  // countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  // countriesContainer.style.opacity = 1;
};

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then((Response) => Response.json())
//     .then((data) => renderCountry(data[0]));
// };

// getCountryData("bharat");

//😍😍😍Chaining Promises....

const getCountryData = function (country) {
  //country 1;
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((Response) => {
      console.log(Response);

      if (!Response.ok)
        throw new Error(`Country not Found (${Response.status})`);

      return Response.json();
    }) //Handling rejected Promises
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) return;
      //country 2
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(
      (Response) => Response.json(),
      (err) => alert(err)
    )
    .then((data) => renderCountry(data, "neighbour"))
    .catch((err) => {
      console.error(`${err} 🙌🙌 `);
      renderError(`something went wrong ${err.message}, try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener("click", function () {
  getCountryData("bharat");
});

// 😍😍😍Handling rejected Promises
// .then
//.catch
//.finally

//Throwing Error manually
//throw new Error