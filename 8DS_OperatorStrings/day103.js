const nested = [2,4,5,6,[8,9,[10,[]]]];
const [i,j,k,l,[m,n,[o,[p=88]]]]= nested;
console.log(i,j,k,l,m,n,o,p);





const restaurant = {
    address: ["anji","sahaspura","balasore"],
    time: ["10:30","12:30","1:20"],
    foodItem:["magiee","burger","sandwish","juice","bread"],
    price:[30,60,70,40,20],
    orderdelivery: function(add=1,timee=2,food=2,foodprice=1){
        console.log(`A food item ${this.foodItem[food]} of price is ${this.price[foodprice]} rupees will be deliverd to ${this.address[add]} at ${this.time[timee]} pm.`);
    }
    }


restaurant.orderdelivery(
    add=2,timee=0,food=1,foodprice=0
);
const{
    address: adddd,
    time: tyme,
    foodItem: fodiee,
    price:pricee
}=restaurant;
console.log(adddd,tyme,fodiee,pricee);