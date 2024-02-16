"use strict";

//😍:section 9 practice series......................
//array destructuring
//object destructuring
// spreed operator
//rest patterns parameter
//short circuiting
//nullish coalescing operator/logical assignment operator
//looping array and for of loop
//enhanced object literals
//optional chainning
//looping objects
//sets
//maps
//maps iterations
//strings

/*
//😲:spread operator....
//because of right side of =
const arr1 = ["a", "ar", "arr", "arrr", "arrrr"];
const arr2 = ["b", "br", "brr", "brrr", "brrrr"];
const arr4 = ["a","ar",...arr1];
console.log(arr4);
console.log(arr1); //gives out put in array form.
const arr3 = [...arr1, ...arr2];
console.log(arr3); //add two array using spread operator..
//in objects you use spread operator to access   element


//😲:Rest Pattern Parameters...
//because of left side of =

const arr4 = [2, 3, 4, 5, 6, 6];
const [i, j, ...rest] = arr4;
console.log(i, j, rest);

//objects..
const obj2 = {
  Name: ["Rahul", "Satya", "Himanshu", "Sunil", "Satish"],
  RegdNo: [25, 30, 8, 36, 29],
  Subjects: ["DBMS", "CN", "OS", "OE", "DSA"],
  From: ["Balasore", "BBSR", "Dhenkanal"],
  fns: function () {
    for (const i of this.Name) {
      console.log(i);
    }
  },
};
const [a, b, c, ...others] = obj2.Name;
console.log(a, b, c, others);
obj2.fns();


//😲:short curcutting.
console.log(3 || "rahul"); //3
console.log(3 && "rahul"); //rahul
console.log(0 || "rahul"); //rahul
console.log(0 && "rahul"); //0
console.log(undefined || null);
console.log(undefined && null);

//😲:nullish coaleshing operator(??)...
const nammo = obj2.Name[0] || 0;
console.log(nammo);  //rahul
const namma = obj2.Name[0] && 0;
console.log(namma);  //0
const nammn1 = null ?? obj2.Name[0];
console.log(nammn1);  //Rahul
const nammn2 = undefined ?? obj2.Name[0];
console.log(nammn2);  //0
const nammn3 = 0 ?? obj2.Name[0];
console.log(nammn3);  //Rahul
const nammn4 = " " ?? obj2.Name[0];
console.log(nammn4);  // " "

//😲:looping Array For-of Loop...
for(const log of obj2.Subjects){
    console.log(log);
}

//😲:Enhached object literals...

const another ={
    nme: "real secret",
    regdNo: 889,
    obj: {
        mob:3444,
        lap:23444,
        bag:2334,
        ede:3433,
    },
    obj2,
}

console.log(another);  //{nme: 'real secret', regdNo: 889, obj2: {…}}
console.log(another.obj2);
console.log(another.obj2.Name); //['Rahul', 'Satya', 'Himanshu', 'Sunil', 'Satish']

//😲:optional chaining.....
//?. method

// console.log(another.obj2.obj.open);   //error
console.log(another.obj2.obj?.open);     //undefined

//😲: Lopping Objects: key, value , entities

console.log(Object.entries(obj2));
console.log(Object.keys(obj2));
console.log(Object.values(obj2));
*/

document.querySelector("#logButton").addEventListener("click", function () {
  const input = document.querySelector("#textInput").value;
  console.log(input);
});
