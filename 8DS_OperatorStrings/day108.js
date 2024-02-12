"use strict";
/*
//destructuring array;

// const demo1=[1,2,3,[3,5,[6,7]]];
// const [i,j,k,[l,m,[n,o]]] = demo1;
// console.log(i,j,k,l,m,n,o);

// const demo2 =["leo","len","sel","der","kal","aer","iom"];
// const [i, , j, , k, ...all] = demo2;
// console.log(i,j,k, all);
const obj1 ={
    name: "Rahul Kumar parida",
    address: "Anji,Balasore",
    branch:"MCA",
    courses:["DBMS","CN","OS"],
    marks:[34,56,78]
}

const demo3 = obj1.courses;
console.log(...demo3);

// short circuit
console.log(" " || 'rahul');//
console.log(5 || 'rahul');//5
console.log(5 && 'rahul');//rahul
console.log(5 && 22);//22
console.log(null && 22);//null  
console.log(null && undefined);//null 
console.log(0 && null && undefined); //0
console.log(null ?? 'nullish'); //nullish
console.log(0 ?? 'nullish'); //0

//rest pattern : because on left side of =
//spread : because on right side of =

const [ i,...rest] =obj1.marks;
console.log(i,rest);

const add = function(...numbers){
    let sum =0;
    for(let i=0;i<numbers.length;i++){
        sum=sum+numbers[i];
    }
    console.log(sum);
}
add(2,3,5,6);
const x=[2,3,5,7];
add(...x)
*/

//Logical Assignment Operator

const rest1 ={
    name: 'real',
    numguests: 34
}
const rest2 ={
    name: 'rahul',
    owner:'rahul parida'
}

//OR ASSIGNMENT OPERATOR
rest1.numguests = rest1.numguests ||10;
// rest1.numguests ||= 10; 
// rest1.numguests ??= 10; 

console.log(rest1);
rest2.numguests = rest1.numguests || 10;
// rest2.numguests ||= 10;
// rest2.numguests ??= 10;
console.log(rest2);


//AND OPERATOR
// rest1.owner = rest1.owner && "<Rahul parida>";
rest1.owner &&= "<Rahul parida>";
// rest2.owner = rest2.owner && "<Rahul parida>";
rest2.owner&&="<Rahul parida>";
console.log(rest1);
console.log(rest2);


//Codding challenge1.