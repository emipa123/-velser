const randomNumber = getRandomNumber(0, 10);
let numberOfGuesses = 0;

// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const guessButton = document.getElementById("guessButton");
const inputElement = document.getElementById("tal");

guessButton.addEventListener("click", () => {
  const userGuess = parseInt(inputElement.value);

  if (isNaN(userGuess)) {
    alert("Please enter a valid number.");
    return;
  }

  numberOfGuesses++;

  if (userGuess === randomNumber) {
    alert(`Congratulations! You guessed the number ${randomNumber} in ${numberOfGuesses} guesses.`);
    playAgain();
  } else if (userGuess < randomNumber) {
    alert("Too low! Try again.");
  } else {
    alert("Too high! Try again.");
  }
});

function playAgain() {
  const playAgainResponse = prompt("Do you want to play again? (yes/no)").toLowerCase();

  if (playAgainResponse === "yes") {
    resetGame();
  } else {
    alert("Thank you for playing!");
  }
}

function resetGame() {
  randomNumber = getRandomNumber(0, 10);
  numberOfGuesses = 0;
}
