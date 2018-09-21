// make a word bank
var wordBank = ["hi pepi", "butts", "acorn", "Weeb"];

//pick a random word from word bank
var chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log(chosenWord);

var guessedLetters = [];        // Stores the letters the user guessed
var currentWordIndex;           // Index of the current word in the array
var guessingWord = [];          // This will be the word we actually build to match the current word
var remainingGuesses = 0;       // How many tries the player has left
var gameStarted = false;        // Flag to tell if the game has started
var hasFinished = false;        // Flag for 'press any key to try again'     
var wins = 0; 

var abc = ['a', 'b', 'c', 'd', 'd', 'e', 'f', 'g','h', 'i','j','k','l','m','n','o','p','r','s','t','u','v','w','x','y','z'];


//make letter buttons

// for (var i = 0; i < letters.length; i++){
//     var letterBtn = document.createElement('letters'); 
//     document.body.appendChild(letterBtn); 
// }


var letterBtn = function () {
    buttons = document.getElementById('letterBtn');
    letters = document.createElement('ul');

    for (var i = 0; i < abc.length; i++) {
        letters.id = 'abc';
        list = document.createElement('li');
        list.id = 'letter';
        list.innerHTML = abc[i];
        check();
        buttons.appendChild(letters);
        letters.appendChild(list);
    }
}

// Create guesses ul
var result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
        correct.setAttribute('id', 'my-word');
        guess = document.createElement('li');
        guess.setAttribute('class', 'guess');
        if (word[i] === "-") {
            guess.innerHTML = "-";
            space = 1;
        } else {
            guess.innerHTML = "_";
        }

        guesses.push(guess);
        wordHolder.appendChild(correct);
        correct.appendChild(guess);
    }
}

// Show lives
var comments = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
        showLives.innerHTML = "Game Over";
    }
    for (var i = 0; i < guesses.length; i++) {
        if (counter + space === guesses.length) {
            showLives.innerHTML = "You Win!";
        }
    }
}
// OnClick Function
check = function () {
    list.onclick = function () {
        var geuss = (this.innerHTML);
        this.setAttribute("class", "active");
        this.onclick = null;
        for (var i = 0; i < word.length; i++) {
            if (word[i] === geuss) {
                geusses[i].innerHTML = geuss;
                counter += 1;
            }
        }
        var j = (word.indexOf(geuss));
        if (j === -1) {
            lives -= 1;
            comments();
         
        } else {
            comments();
        }
    }
}

//make blanks for word picked 

for (i = 0; i < wordBank[currentWordIndex].length; i++) {
    guessingWord.push("_");
    //create a conditional for blank spaces between two words
}

//ask user to guess a letter

// document.addEventListener("keyup", function(){
//    console.log();

// }); 

//check guess against randomWord

//display letters guessed

// count wins



// //number of guesses left
// var guessCounter = 9; 
// for (i = 0, i < guessCounter, i++){
   
//     i--; 
// }

function updateDisplay() {

    document.getElementById("totalWins").innerText = wins;
    document.getElementById("currentWord").innerText = "";
    for (var i = 0; i < guessingWord.length; i++) {
        document.getElementById("currentWord").innerText += guessingWord[i];
    }
    document.getElementById("remainingGuesses").innerText = remainingGuesses;
    document.getElementById("guessedLetters").innerText = guessedLetters;
}