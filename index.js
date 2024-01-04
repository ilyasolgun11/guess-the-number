let randomNumber = document.getElementById("random-number");
let guessInput = document.getElementById("guess-input");
let guessBtn = document.getElementById("guess-btn");
let hearts = document.getElementsByClassName("hearts");
let higherLower = document.getElementById("higher-lower");
let playAgainBtn = document.getElementById("play-again");
let heartsContainer = document.querySelector(".hearts-container");
let losingStreak = document.getElementById("losing-streak");
let winningStreak = document.getElementById("winning-streak");

let winning = 0;
let losing = 0;

let randomizeNumber = Math.floor(Math.random() * 20 + 1);

guessBtn.addEventListener("click", () => {
  if (guessInput.value != randomizeNumber) {
    if (hearts.length > 1) {
      hearts[hearts.length - 1].remove();
      2;
      if (guessInput.value < randomizeNumber) {
        higherLower.textContent = "Higher!";
      } else {
        higherLower.textContent = "Lower!";
      }
    } else {
      heartsContainer.innerHTML = "";
      higherLower.textContent = "Oh no, you Lost!";
      let addLostStreak = (losing += 1);
      losingStreak.textContent = addLostStreak;
      winningStreak.textContent = 0;
      winning = 0;
    }
  } else {
    randomNumber.textContent = randomizeNumber;
    higherLower.textContent = "Congrats you Won!";
    let addWinStreak = (winning += 1);
    winningStreak.textContent = addWinStreak;
    losingStreak.textContent = 0;
    losing = 0;
  }
});

playAgainBtn.addEventListener("click", () => {
  heartsContainer.innerHTML = "";
  if (hearts.length === 0 || higherLower.textContent === "Congrats you Won!") {
    randomizeNumber = Math.floor(Math.random() * 20 + 1);
    guessInput.value = "";
    higherLower.textContent = "";
    randomNumber.textContent = "?";
    for (let i = 0; i < 5; i++) {
      let heart = document.createElement("i");
      heart.className = "fas fa-heart hearts";
      heartsContainer.append(heart);
    }
  }
});
