//coding question solved
//ARRAY METHOD PRACTICE

// 1)
const a1 = {
  arr1: [343, 543, -3232, 433, 232, 656, -655],
};
const a2 = {
  arr1: [343, 543, -3232, -3433, 232, 656, -655],
};
const a3 = {
  arr1: [3430, 543, -3232, -9433, 232, 656, -655],
};
const a4 = {
  arr1: [343, 9543, -3232, 433, 232, 656, -655],
};
const a5 = {
  arr1: [343, -543, -3232, 433, 232, 656, -655],
};

const accounts = [a1, a2, a3, a4, a5];

// const bankDeposit = accounts.map((acc) => acc.arr1).flat();
const bankDeposit = accounts
  .flatMap((acc) => acc.arr1)
  .filter((mov) => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);
console.log(bankDeposit);

// 2)
//greater then 1000
//m-1...........
// const deposit1000 = accounts
//   .flatMap((acc) => acc.arr1)
//   .filter((acc) => acc > 500).length;
// m-2...................
const numdeposit1000 = accounts
  .flatMap((acc) => acc.arr1)
  // .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0); //(return 2)
  .reduce((count, cur) => (cur > 1000 ? count++ : count), 0);  //(return 0)

console.log(accounts.flatMap((acc) => acc.arr1).filter((acc) => acc > 1000)); //[ 3430, 9543 ]
console.log(numdeposit1000); //2
