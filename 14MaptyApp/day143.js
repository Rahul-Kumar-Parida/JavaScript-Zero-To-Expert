"use strict";

//HOW TO PLAN A PROJECTS,
//😍😍😍😍😍 Using The Geo Location Api,
if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
      const link = document.querySelector(".show");
      link.href = `https://www.google.com/maps/@${latitude},${longitude}`; // Set href attribute
      link.textContent = 'Click here to view your location on Google Maps'; // Set link text

      
      // document.querySelector('.show').appendChild(link);
      // console.log(position);
      // console.log(latitude,longitude
      //     );
    },
    function () {
      alert("Could Not Get Your Position");
    }
  );
