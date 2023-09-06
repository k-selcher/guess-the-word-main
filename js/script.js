const guessedLettersElement = document.querySelector(".guessed-letters");
const guessLetterButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";
const guessedLetters = [];

// Display the symbols as placeholders for the selected word's letters
const placeholder = function (word) {
  const placeholderLetters = [];
  for (const letter of word) {
    console.log(letter);
    placeholderLetters.push("●");
  }
  wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

guessLetterButton.addEventListener("click", function (e) {
  e.preventDefault();
  //Empty message paragraph
  message.innerText = "";
  //Grab input value
  const guess = letterInput.value;
  const goodGuess = validateInput(guess);
    if (goodGuess){
        //Guess includes a letter
        makeGuess(guess);
    }
  letterInput.value = "";
});

//Accepts input value as a parameter
const validateInput = function(input){
    //Guarantees the user inputs a letter
    const acceptedLetter = /[a-zA-Z]/;
    //if the user does not enter an input.
    if (input === 0) {
        message.innerText = "Please enter a letter."
    //If the user enters an input more than one.
    } else if (input > 1) {
        message.innerText = "Please enter only one letter."
    //If the user enters an input that is not an accepted letter.
    } else if ((!input.match(acceptedLetter))) {
        message.innerText = "Please enter only a letter from A to Z."
    } else {
        //Returns if A-Z input
        return input;
    }
};

const makeGuess = function(guess){
    guess = guess.toUpperCase;
    if (guessedLetters.includes(guess)) {
        message.innerText = "You already guessed that letter."
} else {
    guessedLetters.push(guess);
    console.log(guessedLetters);
    }
};
