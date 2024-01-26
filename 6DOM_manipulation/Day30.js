let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber, typeof secretNumber);
let score = 20;
let highScore = 0;

//score work
document.querySelector(".score").textContent = 20;
document.querySelector(".score").style.color = "red";
document.querySelector(".highscore").textContent = 0;
document.querySelector(".highscore").style.color = "red";

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".number").value);

  // console.log(guessNum, typeof guessNum);
  if (!guess) {
    document.querySelector(".guess").textContent = "😑No Numbers...";
  } else if (guess === secretNumber) {
    document.querySelector(".guess").textContent = "😍😍 Correct Number!!!😍😍";
    document.querySelector(".secret").textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
      document.querySelector(".highscore").style.color = "lightgreen";
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".guess").textContent =
        guess > secretNumber ? "😲 Too High.." : "😒Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".guess").textContent = "😣 You Lost the Game!!!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").textContent = "🤔Start Guessing...";
  document.querySelector(".secret").textContent = "?";
  document.querySelector(".number").value = "";
});
