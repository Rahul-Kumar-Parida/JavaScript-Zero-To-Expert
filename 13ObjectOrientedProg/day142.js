"use strict";
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //method will be added to .prototype property
  clacAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(` Hey ${this.fullName}`);
  }
  get ageNum() {
    return 2024 - this.birthYear;
  }

  //set a property that already exits.
  set fullName(name) {
    console.log(name);
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullname;
  }

  //static method
  static hey() {
    console.log("hey there🍀");
    console.log(this);
  }
}

//😍😍😍😍Inheritance Between Classes and ES-6

/*
//😑Simple step -1)
class std{
    constructor(fname,bYear){
        this.fname =fname;
        this.bYear =bYear;
    }
}
const martha = new std('Martha Jones', 1995);
console.log(martha);
*/

/*
//😑inherit from parent-1)
class StudentCl extends PersonCl {}

const martin = new StudentCl("Martin meol", 2012);
console.log(martin);
*/
/*
//😑inherit from parent-2)
class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    //always needs to happen first
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this._fullName} and I study ${this.course}`);
  }
  clacAge() {
    console.log(
      `I am ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}
const martin = new StudentCl("Martin Joes", 2001, "computer Science");
console.log(martin);
martin.introduce();
martin.clacAge();
*/

/*
//😍😍😍😍Inheritance Between Classes and object.create()

const personProto = {
  clacAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(personProto);

const StudenProto = Object.create(personProto);
StudenProto.init = function (firstName, birthYear, course) {
  personProto.init.call(this, firstName, birthYear);
  this.course;
};

StudenProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudenProto);
console.log(jay);
jay.init("jay", 2010, "computer Science");
jay.introduce();
jay.clacAge();

*/

//😍😍😍😍Another Class Example:
/*
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this._movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }
  //public Interface.....
  diposit(val) {
    this._movements.push(val);
  }
  withdraw(val) {
    this.diposit(-val);
  }
  approvedLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this.approvedLoan(val)) {
      this.diposit(val);
      console.log("Loan Approved");
    }
  }
}

const acc1 = new Account("Jonas", "EUR", 1111, []);

acc1._movements.push(250);
acc1._movements.push(-120);
acc1.diposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
acc1.approvedLoan(1000);
console.log(acc1);

*/
//😍😍😍😍 Encapsulation:Protected Properties and methods;....................................
//_movements
// --do---

//😍😍😍😍 Encapsulation:Private class and methods;......................................

//Public fields
//Private Fields
//Public methods
//Private methods

class Account {
  //1)🍀Public Fields(instances)
  locale = navigator.language;

  //2)🍀private fields(instances)
  #movements = [];
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  //3)🍀public method
  //public Interface.....
  getMovements(){
    return this.#movements;
  }
  diposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdraw(val) {
    this.diposit(-val);
    return this;

  }
  approvedLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this.approvedLoan(val)) {
      this.diposit(val);
      console.log("Loan Approved");
      return this;

    }
  }

  static helper() {
    console.log("helper");
  }
  // 4)🍀 private methods
}

const acc1 = new Account("Jonas", "EUR", 1111, []);
acc1.diposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
acc1.approvedLoan(1000);
console.log(acc1);
Account.helper(); //helper











//😍😍😍😍Chaining Methods............................
acc1.diposit(300).diposit(344).withdraw(200).requestLoan(100).withdraw(200);
console.log(acc1.getMovements());//8) [250, -140, 1000, 300, 344, -200, 100, -200]

//😍😍😍😍ES-6 classes summary