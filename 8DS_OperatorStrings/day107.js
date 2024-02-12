//spread operator(...variableName);

const arr=[7,8,9];
// manually
const badNewArray =[1,3,4,arr[0],arr[1],arr[2]];
console.log(badNewArray);
//now use spread operator
const newArray =[1,2,3,...arr]
console.log(newArray);

console.log(...newArray);

const restaurant = {
    name: "Rahul kumar parida",
    location: "Anji, Anantapur, soro ,Balasore",
    categories: ["Italian", "Southian", "Vegetarian", "organic"],
    StarterMenu: ["bread", "egg Omlet", "juice", "pampad", "fried rice"],
    MainMenu: ["Pizza", "Pesta", "Burgir"],
    openingHour: {
      thu: {
        open: 10,
        close: 22,
      },
      fri: {
        open: 11,
        close: 23,
      },
      sat: {
        open: 12,
        close: 24,
      },
    },
    orderPasta: function(ing1,ing2,ing3){
        console.log(`"Here is your delicious pasta with ${ing1}, ${ing2},${ing3}`);
    }
}

const newMenu1=[...restaurant.categories];
console.log(newMenu1);
const newMenu2=[...restaurant.StarterMenu];
console.log(newMenu2);
const addTwoMenu =[...newMenu1,...newMenu2];
console.log(addTwoMenu);

// iterables: arrays, strings, map, sets but not objects

//real world examples
// const ingrediants =[
    // prompt("Enter 1st ing."),
    // prompt("2nd Ingradients"),
    // prompt("3rd ingrediants")];
// console.log(ingrediants);
// restaurant.orderPasta(ingrediants[0],ingrediants[1],ingrediants[2]);
// restaurant.orderPasta(...ingrediants);

//objects
const restaurantCopy= {...restaurant};
restaurantCopy.name="Satish Kumar";
console.log(restaurantCopy);
console.log(restaurantCopy.name);
console.log(restaurant.name);


//1)destructuring
//Rest patterns and Parameters.............
//spread because on right side of =
const arr1 =[1,2,...[3,4]];
console.log(arr1);   //[1,2,3,4]

//REST, because on left side of =

const [a, b, ...other] =[1,2,3,4,5,6];
console.log(a,b,other);

const [pizza, , resotto, ...others] =[...restaurant.MainMenu, ...restaurant.StarterMenu];
console.log(pizza,resotto,others);

//objects

const {sat,...weekdays} =restaurant.openingHour;
console.log(sat,weekdays);

//2)functions

const add = function(...numbers){
  console.log(numbers);
  let sum =0;
  for(let i=0; i<numbers.length;i++){
    sum=sum + numbers[i]
  }
  console.log(sum);
}
add(2,3);
add(2,3,4,5);
add(2,3.7,8,9);
const x=[2,3,4];
add(...x)


//Short Circuiting(&& and ||)

//use any datatype , return any datatype, short-circuiting
console.log("------OR------");
console.log(3 || 'jonas');
console.log(" " || 'jonas');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || null || 'jonas' ||23);

restaurant.numguest = 23;
const guest1 = restaurant.numguest?restaurant.numguest:10;
console.log(guest1);

const guest2 = 5 || restaurant.numguest || 10;
console.log(guest2);

console.log("-----AND-----");

console.log(0 && 'jonas');
console.log(7 && 'jonas');
console.log(7 && 'hello' && null && 'jonas');


//nullish coalscing operator(??)

restaurant.numguest = 0;
const guests = restaurant.numguest || 10;
console.log(guests);

//Nullish : null and undefined (NOT 0 or " ")
const guestCorrect = restaurant.numguest ?? 10;
console.log(guestCorrect);