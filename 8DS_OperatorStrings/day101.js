"use strict"
//Destructuring Arrays

const arr = [2,4,5];
const a =arr[0];
const b =arr[1];
const c =arr[2];
console.log(a,b,c);
const [x,y,z] = arr;






























console.log(x,y,z);
console.log(arr);

const restaurant ={
    name: 'Rahul kumar parida',
    location: 'Anji, Anantapur, soro ,Balasore',
    categories: ['Italian', 'Southian','Vegetarian','organic'],
    StarterMenu: ['bread','egg Omlet','juice','pampad','fried rice'],
    MainMenu:['Pizza','Pesta','Burgir'],
    order: function(StarterIndex,MainIndex){
        return [this.StarterMenu[StarterIndex],this.MainMenu[MainIndex]]
    }
}

let [first,second]=restaurant.categories;
console.log(first,second);

[first,second]=[second,first];
console.log(first,second);

//Recieve 2 return values from a function
const [stater, main]=restaurant.order(1,0);
console.log(stater,main);

//ex-2
//Nested destructuring
const nested =[2,4,[4,5,[6]]];
const [i,,j]=nested;
console.log(i,j);
const [k,,[l,m]]=nested;
console.log(k,l,m);

//Default values
const [p,q,r]=[8,6]; 
console.log(p,q,r); // 8 6 undefined
const [d=1,e=1,f=1]=[8,6];
console.log(d,e,f);  // 8 6 1