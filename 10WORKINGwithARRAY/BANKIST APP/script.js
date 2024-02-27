"use script";

//DAY_1;;;;;;;;;;;;;;;;;;
const account1 = {
  owner: "Rahul Kumar Parida",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRest: 1.2,
  pin: 1111,
  movementsDates: [
    "2024-02-20T05:00:05.611Z",
    "2024-02-21T05:00:05.611Z",
    "2024-02-22T05:00:05.611Z",
    "2024-02-23T05:00:05.611Z",
    "2024-02-24T05:00:05.611Z",
    "2024-02-25T05:00:05.611Z",
    "2024-02-26T05:00:05.611Z",
    "2024-02-27T05:00:05.611Z",
  ],
  currency: "EUR",
  locale: "pt-PT",
};
const account2 = {
  owner: "Satish Kumar Pradhan",
  movements: [5000, 3400, -150, -750, -3210, -1000, 8500, -30],
  interestRest: 1.5,
  pin: 2222,
  movementsDates: [
    "2024-02-27T05:00:05.611Z",
    "2020-02-27T05:00:05.611Z",
    "2021-02-27T05:00:05.611Z",
    "2025-02-27T05:00:05.611Z",
    "2022-02-27T05:00:05.611Z",
    "2027-02-27T05:00:05.611Z",
    "2026-02-27T05:00:05.611Z",
    "2026-02-27T05:00:05.611Z",
  ],
  currency: "USD",
  locale: "en-US",
};
const account3 = {
  owner: "Satyabrata Jena",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRest: 0.7,
  pin: 3333,
  movementsDates: [
    "2024-02-27T05:00:05.611Z",
    "2020-02-27T05:00:05.611Z",
    "2021-02-27T05:00:05.611Z",
    "2025-02-27T05:00:05.611Z",
    "2022-02-27T05:00:05.611Z",
    "2027-02-27T05:00:05.611Z",
    "2026-02-27T05:00:05.611Z",
    "2026-02-27T05:00:05.611Z",
  ],
  currency: "USD",
  locale: "en-US",
};
//declare variable........
const accounts = [account1, account2, account3];

const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelDate = document.querySelector(".date");
const welcomeMsg = document.querySelector(".label__welcome");

const btnlogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnClose = document.querySelector(".form__btn--close");
const btnLoan = document.querySelector(".form__btn--loan");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUserName = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

//functions...................

const formatMovementDate = function (date, locale) {
  const calcDayPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDayPassed(new Date(), date);
  if (daysPassed === 0) return "Today";
  if (daysPassed === 1) return "Yesterday";
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = date.getFullYear();
  // return `${day}/${month}/${year} `;
  return new Intl.DateTimeFormat(locale).format(date);
};
const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = "";

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawl";

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const html = `<div class="movements_row">
        <div class="movements__typemovements__type--${type} ">
             ${i + 1} ${type}
        </div><div class="movements__date">${displayDate}</div>
        <div class="movements__value"> ${mov.toFixed(2)}€</div>
    </div>`;
    containerMovements.insertAdjacentHTML("afterbegin", html);
    //we use for order (afterbegin and beforebegin)
  });
};

//................................................................................................


const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

//.....................................................
const calcDiplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const outs = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outs).toFixed(2)}€`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interest) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

//...............................................................
// const account = accounts.find((acc) => acc.owner === "Rahul Kumar Parida");
// console.log(account); //return object //Rahul Kumar Parida

//................................................................
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUsernames(accounts);

//...........................................................................

const updateUI = function (acc) {
  //Display Movements
  displayMovements(acc);
  //Diplay balance
  calcDisplayBalance(acc);
  //Display Summary
  calcDiplaySummary(acc);
};

//................................

//Event Handler.....
//LOGIN IMPLEMENT.................
let currentAccount;

//😲Fake Always Logged In...
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

btnlogin.addEventListener("click", function (e) {
  //preventing form from submitting
  //event handler
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUserName.value
  );
  console.log(currentAccount);
  if (currentAccount?.pin === +inputLoginPin.value) {
    //Display UI and Message
    welcomeMsg.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;

    //create current date and time..
    const now = new Date();
    const options = {
      hour: "numeric",
      minute: "numeric",
      day: "numeric",
      month: "numeric", //long used
      year: "numeric",
      // weekday: "long",
    };
    // const locale = navigator.language;

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year},  ${hour}:${min}`;

    //clear input fields
    inputLoginUserName.value = inputLoginPin.value = " ";
    inputLoginPin.blur();
    //update UI..
    updateUI(currentAccount);
  }
});

//TRANSFER MONEY FROM ONE USER TO ANOTHER,,,,,,,,,,,,,,,,
btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = +inputTransferAmount.value;

  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = " ";
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    //doing the transfer..
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //Add Transfer date

    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());
    //update UI..
    updateUI(currentAccount);
  }
});

//Loan Amount....................
btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    //ADD MOVEMENTS
    currentAccount.movements.push(amount);

    //Add Loan date new

    currentAccount.movementsDates.push(new Date().toISOString());
    //update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = "";
});

//Close account...............
btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    console.log(index);

    //delete account.
    accounts.splice(index, 1);

    //Hide UI
    containerApp.style.opacity = 0;
    //welcome msg...

    welcomeMsg.textContent = " WELCOME HOME";
  }
  inputCloseUsername.value = inputClosePin.value = " ";
});

//sortting movements.......................

let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

//Array.form method

labelBalance.addEventListener("click", function () {
  const movementsUI = Array.from(
    document.querySelectorAll(".movements__value"),
    (el) => +el.textContent.replace("€", "")
  );
  console.log(movementsUI);
});

//coloring row.......
labelBalance.addEventListener("click", function () {
  [...document.querySelectorAll(".movements_row")].forEach(function (row, i) {
    if (i % 2 === 0) row.style.backgroundColor = "orange";
  });
});
