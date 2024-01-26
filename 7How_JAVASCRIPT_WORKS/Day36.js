"use strict";
//Regular Functions vs Arrow Function

// const jonas = {
//   firstName: "Rahul",
//   year: 2002,
//   calcAge: function () {
//     console.log(this);
//     console.log(2023 - this.year);
//   },
//   greet: () => {
//     console.log(this);
//     console.log(`hey ${this.firstName}`);
//   },
//   wish: function() {
//     console.log(this);
//     console.log(`hey ${this.firstName}`);
//   },
// };
// jonas.calcAge();//object // 21
// jonas.greet();  //window  //hey undefined
// jonas.wish();  //object  //hey Rahul

//

const jonas = {
  firstName: "Rahul",
  year: 2002,
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);

    //solution 1
    const self = this;
    const ismillenial = function () {
      console.log(self);
      console.log(self.year >= 1990 && self.year <= 2005);
    };

    //solution 2
    // const ismillenial = () => {
    //   console.log(this);
    //   console.log(this.year >=1990 && this.year<=2005);
    // };
    ismillenial();
  },
  greet: () => {
    console.log(this);
    console.log(`hey ${this.firstName}`);
  },
  wish: function () {
    console.log(this);
    console.log(`hey ${this.firstName}`);
  },
};
jonas.calcAge(); //object // 21
//   jonas.greet();  //window  //hey undefined
//   jonas.wish();  //object  //hey Rahul



//argument keyword

const addexpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addexpr(2, 3);
addexpr(2, 3,4,5);


var addArrow = (a,b)=>{
    console.log(arguments);
    return a+b;
}
// addArrow(2, 3);   //error
// addArrow(2, 3,4,5); //error
