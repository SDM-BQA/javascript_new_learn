// Selecting Elements
const btn = document.querySelector("#btn");           // Form Button
const userInput = document.querySelector("#num");     // User Input Field
const result = document.querySelector("#result");     // Result Display
const prevGuess = document.querySelector("#guess");   // Previous Guesses
const remGuess = document.querySelector("#rem_guess"); // Remaining Guesses

// Game Variables
const max = 100;
const min = 1;
let randomNumber = generateRandomNumber(min, max); // Generate random number
let prevGuessArr = [];  // Array to store guesses
let numGuess = 0;       // Track number of guesses
let playGame = true;    // Game state

// Event Listener for the Button
if (playGame) {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (btn.textContent === "New Game") {
      resetGame();
    } else {
      const guess = parseInt(userInput.value);
      validateGuess(guess);
    }
  });
}

// Function to Generate a Random Number
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to Validate the User's Guess
function validateGuess(guess) {
  if (isNaN(guess)) {
    displayMessage("Enter a valid Number");
  } else if (guess < min || guess > max) {
    displayMessage(`Enter a Number between ${min} and ${max}`);
  } else {
    processGuess(guess);
  }
  userInput.value = ""; // Clear input field
}

// Function to Process the Guess
function processGuess(guess) {
  prevGuessArr.push(guess);
  numGuess++; // Increment guess count
  displayGuesses();

  if (numGuess > 10) {
    displayMessage(`Game Over. The number was ${randomNumber}`);
    endGame();
  } else {
    checkGuess(guess);
  }
}

// Function to Check the Guess Against the Random Number
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right! The number is ${guess}`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage("Number is too low");
  } else {
    displayMessage("Number is too high");
  }
}

// Function to Display Guesses and Remaining Attempts
function displayGuesses() {
  prevGuess.textContent = prevGuessArr.join(", "); // Show all previous guesses
  const remaining = 10 - numGuess;
  remGuess.textContent = remaining > 0 ? remaining : "0"; // Stop at 0
}

// Function to Display a Message
function displayMessage(message) {
  result.textContent = message;
}

// Function to End the Game
function endGame() {
  userInput.setAttribute("disabled", ""); // Disable input
  playGame = false;                       // Stop game
  btn.textContent = "New Game";           // Update button text
}

// Function to Reset the Game
function resetGame() {
  prevGuessArr = []; // Clear previous guesses
  numGuess = 0;      // Reset guess count
  randomNumber = generateRandomNumber(min, max); // Generate new number
  prevGuess.textContent = "None"; // Reset previous guesses display
  remGuess.textContent = "10";    // Reset remaining guesses display
  result.textContent = "";        // Clear result message
  userInput.removeAttribute("disabled"); // Enable input
  playGame = true;               // Restart game
  btn.textContent = "Submit Guess"; // Update button text
}
