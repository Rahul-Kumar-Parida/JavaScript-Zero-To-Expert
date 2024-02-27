"Use strict";
//😍The SOME METHOD.......
(movements = [5000, 3400, -150, -750, -3210, -1000, 8500, -30]),
  console.log(movements);

//Equality..
console.log(movements.includes(-750)); //true

//😍SOME : Condition....
//if one of the elements satisfy the condition then it returns true..
console.log(movements.some((mov) => mov === -750)); //true

const anydeposits = movements.some((mov) => mov > 0);
console.log(anydeposits); //true

//😍EVERY METHOD...
//if every elements satisfy the condition it returns true
console.log(movements.every((mov) => mov > 0)); //false

const positive = [33, 444, 533, 223, 532];
console.log(positive.every((mov) => mov > 0)); //true

//😍Flat and Flatmap  method,,,,,

//😍 FLAT:
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());
// [1, 2, 3, 4, 5, 6, 7, 8]

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat());
//[ [ 1, 2 ], 3, 4, [ 5, 6 ], 7, 8 ]

console.log(arrDeep.flat(2)); //2nd deep
// [1, 2, 3, 4, 5, 6, 7, 8]

const account1 = {
  owner: "Rahul Kumar Parida",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRest: 1.2,
  pin: 1111,
};
const account2 = {
  owner: "Satish Kumar Pradhan",
  movements: [5000, 3400, -150, -750, -3210, -1000, 8500, -30],
  interestRest: 1.5,
  pin: 2222,
};
const account3 = {
  owner: "Satyabrata Jena",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRest: 0.7,
  pin: 3333,
};
const accounts = [account1, account2, account3];

const overalBalance = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance); //15610

//😍 flatMap method:
//Flatmap use instead of map and flat method and use only 1 deep nested array.

const overalBalance2 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance); //15610

//😍Sorting Array method...................................

//string..
const owners = ["jonas", "Rahul", "satish", "satyabrat", "Himanshu"];
console.log(owners.sort());
//[ 'Himanshu', 'Rahul', 'jonas', 'satish', 'satyabrat' ]

//Number..
console.log(movements);
console.log(movements.sort());
//[-1000, -150,  -30, -3210, -750, 3400, 5000, 8500 ] //not accending order...

//return < 0 ,  A, B (keep order)
//return>0 , B,A(switch order)

//ascending order
movements.sort((a, b) => {
  if (a > b) return 1;
  if (b > a) return -1;
});

console.log(movements);
//[ -3210, -1000, -750, -150,   -30, 3400, 5000,  8500]

//descending order
movements.sort((a, b) => {
  if (a > b) return -1;
  if (b > a) return 1;
});
console.log(movements);

//[ 8500,  5000, 3400, -30,  -150, -750,-1000, -3210]

// another method ...

movements.sort((a, b) => a - b);
console.log(movements); //ascending order
movements.sort((a, b) => b - a);
console.log(movements); //descending order

//if array have number and string then sort method not working.......

//😍MORE WAYS OF CREATing AND Filling Arrays....

const arra = [1, 2, 3, 4, 5, 6, 7];
console.log(arra);

//Empty arrays  + fill method

const x = new Array(7);
console.log(x); //[ <7 empty items> ]

// console.log(x.map(()=> 5)); //[ <7 empty items> ]

x.fill(1, 3, 5); //(element 1 fill , from 3 to 5 )
console.log(x); //[ <3 empty items>, 1, 1, <2 empty items> ]

arra.fill(23, 3, 5);
console.log(arra);
//[1, 2, 3, 23, 23, 6, 7]

//😍 Array.from() method

const y = Array.from({ length: 7 }, () => 1);
console.log(y); //[1,1,1,1,1,1,1]

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z); //[1,2,3,4,5,6,7]



