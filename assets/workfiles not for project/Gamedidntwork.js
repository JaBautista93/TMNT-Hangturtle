<!DOCTYPE html>
<html lang="en-us">

<head>
  <meta charset="UTF-8">
  <title>TMNT: Save Splinter from Shredders Evil Plans!</title>
</head>

<body>
<div class= "top containter">

    <p id="directions-text">Guess the name of one of turtles nemesis that abducted Master Splinter!</p>
</div>
    <p id="Turtles-text"></p>
    <p id="Henchman-text"></p>
    <p id="wins-text"></p>
    <p id="losses-text"></p>
    <p id="ties-text"></p>
  </div>

  <script type="text/javascript">
    // Creates an array that lists out all of the options (Word Guess).
    var Henchman = ["Bebop", "Krang", "Rat King", "Rocksteady", "Shredder", "Slash", 
                    "Baxter Stockman", "General Traag", "Tokka", "Razhar","Dragon Lord", 
                    "Tatsu", "Rock Soliders", "Foot Clan", "Leather Head", "Fishface", 
                    "Hun", "Triceratons"];

    // Creating variables to hold the number of wins, losses, and ties. They start at 0.
    // var wins = 0;
    // var losses = 0;
    // var ties = 0;

    // Create variables that hold references to the places in the HTML where we want to display things.
    // var directionsText = document.getElementById("directions-text");
    // var TurtlesText = document.getElementById("Turtles-text");
    // var HenchmanText = document.getElementById("Henchman-text");
    // var winsText = document.getElementById("wins-text");
    // var lossesText = document.getElementById("losses-text");
    // var tiesText = document.getElementById("ties-text");

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

      // Determines which key was pressed.
      var userGuess = event.key;

      //process for selecting and underlining words
      let randNum = Math.floor(math.random() * word.length);
      let choosenWord = word[randNum];
      let underScore = []
      //creating underscores based on lenght of word
      let generateUnderscore =() => {
        for (let i = 0; i < choosenWord.length, i++);
        underScore.push('_');
      }
      return underScore;
};

console.log(generateUnderscore());

generateUnderscore
      // Randomly chooses a choice from the options array. This is the Computer's guess.
      // for (var i=0; i< Henchman.length; i++)  {
        // Inside the loop...
        
        // 2. Create a variable named "letterBtn" equal to $("<button>");
          // var $HenchmanBtn = $("<button>");

        // 3. Then give each "letterBtn" the following classes: "letter-button" "letter" "letter-button-color".
        // $HenchmanBtn.addClass("letter-button letter letter-button-color");

       // 4. Then give each "letterBtn" a data-attribute called "data-letter".
      //  $HenchmanBtn.attr("data-letter", letters[i]);

       // 5. Then give each "letterBtns" a text equal to "letters[i]".
      //  $HenchmanBtn.text(letters[i]);

       // 6. Finally, append each "letterBtn" to the "#buttons" div (provided).
      //  $("#buttons").append($HenchmanBtn);






      // }
      
      
      // var chooseRandomHenchman = function(Henchman) {
        // return Henchman[Math.floor(Math.random() * Henchman.length)];
        
        // var chosenHenchman = chooseRandomHenchman (Henchman);

      // }
    
      // Function that saves users inputs
      // textForm .addEventListener('submit', fucntion(event) {
      //   event.preventDefault();
        
      // var counter = 10;
      // var triedCharacters = [];
      // var acceptedCharacters =[]'
   
      // Users input should get compared to the loop of the word selected to get compared
      // for (var i = 0; i < chosenHenchman.length; i++) {
        // chosenHenchman = array[i];
        
      // }
      // need to create a function for adding letters to the string
        // for (var i=0; i < chosenHenchman.leg)

      // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number by comparing the userGuess to the string above
      // if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c")(userGuess === "d") || (userGuess === "e") || (userGuess === "f")(userGuess === "g") || (userGuess === "h") || (userGuess === "i")(userGuess === "j") || (userGuess === "k") || (userGuess === "l")(userGuess === "m") || (userGuess === "n") || (userGuess === "o")(userGuess === "p") || (userGuess === "q") || (userGuess === "r")(userGuess === "s") || (userGuess === "t") || (userGuess === "u")(userGuess === "v") || (userGuess === "w") || (userGuess === "x")(userGuess === "y") || (userGuess === "z")) {

        // if ((userGuess === "a") && (chosenHenchman === "a")) {
          // wins++;
        // } else if ((userGuess === "r") && (chooseRandomHenchman === "p")) {
          // losses++;
        // } else if ((userGuess === "s") && (chooseRandomHenchman === "r")) {
          // losses++;
        // } else if ((userGuess === "s") && (chooseRandomHenchman === "p")) {
          // wins++;
        // } else if ((userGuess === "p") && (chooseRandomHenchman === "r")) {
          // wins++;
        // } else if ((userGuess === "p") && (chooseRandomHenchman === "s")) {
          // losses++;
        // } else if (userGuess === chooseRandomHenchman) {
          // ties++;
        // }

        // Hide the directions
        // directionsText.textContent = "";

        // Display the user and computer guesses, and wins/losses/ties.
        // userChoiceText.textContent = "You chose: " + userGuess;
        // computerChoiceText.textContent = "The computer chose: " + computerGuess;
        // winsText.textContent = "wins: " + wins;
        // lossesText.textContent = "losses: " + losses;
        // tiesText.textContent = "ties: " + ties;
      // }
    // };
  
    //userpushkey = String.fromCharCode(letter);
    //for (var i = 0; i < choosenWord.length; i++) {
    //if (userGuess === choosenWord.charAt(i)) {
    //userpushkey[i]= userGuess;
    //.textContent = userGuess;

    //}    
    //}




    // //This will alert correct and compare the letter guessed with the current word
    // if (userpushkey === underScore[] || userpushkey === underScore[] ||
    //     userpushkey === underScore[] || userpushkey === underScore[] ||
    //     userpushkey === underScore[] || userpushkey === underScore[] ||
    //     userpushkey === underScore[] || userpushkey === underScore[] ||
    //     userpushkey === underScore[] || userpushkey === underScore[] ||
    //     userpushkey === underScore[] || userpushkey === underScore[] ||
    //     userpushkey === underScore[] || userpushkey === underScore[] ||
    //     userpushkey === underScore[] || userpushkey === underScore[] ||
    //     userpushkey === underScore[] || userpushkey === underScore[] ||
    //     userpushkey === underScore[] || userpushkey === underScore[] ||
    //     userpushkey === underScore[]) {
    //     // alert("CORRECT!");

    //     // replace progress Word underscore with letter pressed
    //     document.getElementById("Henchman-Text").innerHTML = underScore.join(" ");
    // } else {
    //     alert("WRONG!");
    //     document.getElementById("Turtle-text").innerHTML += userpushkey + " ";

    //     // subtract a point from guesses left
    //     guessesLeft--;
    //     document.getElementById("guesses-left").innerHTML = guessesLeft;
    // }

    // //This code will tell the user the game is over along with a message about
    // // their win streak, then it will reset the game while quickly showing 
    // // what the word was
    // if (guessesLeft === 0) {
    //     alert("Game Over Turtles! Now for some Turtle Soup " + winsText + " wins! The henchman was " +
    //         choosenWord);
    //     location.reload();
    //     document.getElementById("word-guess").innerHTML = choosenWord;
    // }

    // // this is the code that alerts you when you've won the game, then it will reset 
    // // the current word to begin another round
    // if (userpushkey === underScore) {
    //     var phrases = ['Cowabunga!', 'Do not mess with Lean mean Turtles!', 'No Pizza for you Bro!',
    //         'Should we go after?!? or Just let go cry to Shredder?!', 'We did it guys!',
    //         'Turtleeee-Power!', 'Now you know about our Turtle-foo, come back for seconds anytime!'
    //     ]
    //     var nextRound = phrases[Math.floor(Math.random() * phrases.length)];
    //     alert(nextRound);

    //     // reset guesses left
    //     guessesLeft = 10;
    //     //document.getElementById("guesses-left").innerHTML = guessesLeft;

    //     // reset letters guessed
    //     //document.getElementById("letters-guessed").innerHTML = resetLettersGuessed;

    //     // This code generates a new word to guess and then pushes out the blanks again
    //     //choosenWord = Henchman[Math.floor(Math.random() * Henchman.length)].toUpperCase();

    //     //underScore = [];
    //     //for (var i = 0; i < choosenWord.length; i++) {
    //     //underScore.push("__");
    //     //underScore.toString()
    //     //document.getElementById("word-guess").innerHTML = progressWord.join(" ");
    //     //}

    //     //mysteryWord = []
    //     //for (var i = 0; i < currentWord.length; i++) {
    //     //  mysteryWord.push(currentWord.charAt(i));
    //     //   mysteryWord.toString(i)
    //     // }
    //     //console.log(currentWord);
    //     //console.log(progressWord);
    //     //console.log(mysteryWord);

    //     // Add to the win total
    //     winsText++;
    //     document.getElementById("wins-text").innerHTML = winsText;
    //}
    //}
  
    </script>

</body>

</html>
