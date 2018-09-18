// make a word bank
var wordBank = ["hi pepi", "butts", "acorn", "Weeb"]; 

//pick a random word from word bank
var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)]; 

console.log(randomWord); 

//make blanks for word picked 

for ( i = 0; i < randomWord.length; i++){
    document.write("_ ");
    //create a conditional for blank spaces between two words
}

//ask user to guess a letter

//check guess against randomWord

//display letters guessed