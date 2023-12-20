const secretNumber = Math.trunc(Math.random() * 20) + 1;
// console.log(secretNumber);
let score = 20;
document.querySelector("#secret").value = secretNumber;

document.querySelector(".score").textContent = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //   console.log(guess, typeof guess);
  //   document.querySelector(".para").textContent = "😍 Correct Number";

  //when there is no input
  if (!guess) {
    document.querySelector(".para").textContent = "🙄 No Number";

    //when player is win
  } else if (guess === secretNumber) {
    document.querySelector(".para").textContent = "😍 Correct Number";
    //manipulating css
    document.querySelector("body").style.backgroundColor = "lightgreen";
    document.querySelector(".para").style.fontSize = "50px";



    //when guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".para").textContent = "😊 Too High";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".para").textContent = "😑 You Lost The Game";
      document.querySelector(".score").textContent = 0;
    }
    //when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".para").textContent = "😒 Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".para").textContent = "😑 You Lost The Game";
      document.querySelector(".score").textContent = 0;
    }
  }
});

//how to manipulate css
