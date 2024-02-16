"use strict";
//default parameter........................

//function with array and objects...
const Userlogin = {
  user: "Rahul Kumar Parida",
  Id: 23240025,
};

function CheckIn(parameter) {
  console.log(`${parameter.user} , Log in ID is ${parameter.Id}`);
}

CheckIn(Userlogin);
//for objects
CheckIn({ user: "Satyabrata Jena", Id: 23240030 });

//for array

const time = [12, 23, 24, 7, 8];

function OfficeComming(timee) {
  console.log(timee[0]);
}
OfficeComming(time);
