

var startMessage = document.getElementById("startMessage");
document.getElementById("guess").disabled = true;
var user_guess = document.getElementById("guess")
var result1 = document.getElementById("result1");
var result2 = document.getElementById("result2");
var result3 = document.getElementById("result3");
var playAgain = document.getElementById("playAgain");
var target = Math.floor(Math.random()*20) + 1;
var attempts = 0;
var guessed_nums = [];

function newGame() {
    document.getElementById("guess").disabled = false;
    startMessage.textContent = "Guess a number between 1 to 20"
    result1.textContent = "";
    result2.textContent = "";
    result3.textContent = "";
    playAgain.textContent = "";
    user_guess.value = "";
}

function play() {
    var user_guess = document.getElementById("guess").value;
    if (user_guess < 1 || user_guess > 20) {
        alert("Please enter a number between 1 to 20");
    } else {
        guessed_nums.push(user_guess);
        attempts += 1;
        if (user_guess < target) {
            result1.textContent = "Your guess is too low"
            result2.textContent = "No of Guesses: " + attempts;
            result3.textContent = "Guessed numbers are: " + guessed_nums;
        } else if (user_guess > target) {
            result1.textContent = "Your guess is too high"
            result2.textContent = "No of Guesses: " + attempts;
            result3.textContent = "Guessed numbers are: " + guessed_nums;
        } else {
            result1.textContent = "You got it"
            result2.textContent = "The number was " + target
            result3.textContent = "You guessed the correct number after " + attempts + " attempts";
            playAgain.textContent = "Click on Play to play again";
        }
     }
}