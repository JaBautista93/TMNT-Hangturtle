//Create variables that hold references to the places in the HTML where we want to display things.
    // var directionsText = document.getElementById("directions-text");
    // var HenchmanText = document.getElementById("Henchman-text");
    // var TurtlesText = document.getElementById("Turtles-text");
    // var lossesText = document.getElementById("losses-text");
    // var tiesText = document.getElementById("ties-text");
    // var guessesleft = document.getElementById("guesses-left")
    // Did not get a chance to add more functionality to the game
    
var questionElement = document.getElementById('question');
var answerElement = document.getElementById('answer');
var wins = document.getElementById("wins");
var losses = document.getElementById("Losses");
var letters = document.getElementById("Letters Guess Left")

// 1. display question
var answers = [
    'Bebop', 
    'Krang', 
    'Rat King', 
    'Rocksteady', 
    'Shredder', 
    'Slash',
    'Baxter Stockman', 
    'General Traag', 
    'Dragon Lord',
    'Rock Soliders', 
    'Foot Clan', 
]

var questionMap = {
    'Bebop': "Best friends with Rocksteady, looks like a hog", 
    'Krang': "Alien war lord trying to take over earth with the Technadrone", 
    'Rat King': "Lives in the sewer, loves rats, and is an enemy of the turtles", 
    'Rocksteady': "BFF's with Bebop, Looks like a Rino", 
    'Shredder': "Turtles archnemis, Stole Master Rosi chick", 
    'Slash': "Like the turles, hes a mutant but he carrys a big stick and likes to smash things",
    'Baxter Stockman': "Loves to cause a buzz in New York City, always looking to score himself some honey", 
    'General Traag': "Works for Krang, is his number 2 if shredder wasn't around", 
    'Dragon Lord': "An Alien sworn to get the turles after they visted his planent and pissed him off",
    'Rock Soliders': "Loyal to krang, from Demension X", 
    'Foot Clan': "Loyal to Shredder and are kung fu masters but never as good as the turtles kung fu", 
}

//wins and losses
var wins = 0
var losses = 0

// this chooses a random item
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// create random index to grab random answer
var randomIndex = getRandomInt(0, (answers.length - 1))
// grab the random answer
var randomAnswer = answers[randomIndex]
// grab question for random answer
var question = questionMap[randomAnswer]
// set question inside #question element
questionElement.innerHTML = question

// 2. display blank underscores for correct answer
var underscores = []

// randomAnswer is a string, turn it into an array
var answerArray = randomAnswer.split('')
// generate blank underscores for length of answer
function generateUnderscores () {
  underscores = []
  for (var i = 0; i < answerArray.length; i++) {
    answerArray[i] === ' ' ? underscores.push(' ') : underscores.push('_')
  }
  answerElement.innerHTML = underscores.join('')
}
// invoke!
generateUnderscores()

// 3. if user selects letter that exists in answer array
//    then replace underscores index with that letter (e.key)
//wins and losses
var letters = 15

function checkIfLetterExists (letter) {
  var originalBlanks = checkForBlanks()
  
  for (var i = 0; i < answerArray.length; i++) {
    if (letter.toLowerCase() === answerArray[i].toLowerCase()) {
      underscores[i] = answerArray[i]
      // update dom element that has underscores array
      answerElement.innerHTML = underscores.join('')
    } 
  }
  
  if (checkForBlanks() === 0) {
    setTimeout(function () {
      resetGame()
    }, 2000)
  } else if (originalBlanks === checkForBlanks()) {
    letters--;
    //alert('Wrong Answer now your turtle soup!')
  } if (letters === 0){
    alert('You had 15 tries loser time for turtle soup')
    resetGame();
  }
}

function checkForBlanks () {
  var blanks = 0

  for (var i = 0; i < underscores.length; i++) {
    if (underscores[i] === '_') {
      blanks += 1
    }
  }
  
  return blanks
}

function resetGame () {
  randomIndex = getRandomInt(0, (answers.length - 1))
  randomAnswer = answers[randomIndex]
  answerArray = randomAnswer.split('')
  question = questionMap[randomAnswer]
  questionElement.innerHTML = question
  generateUnderscores()
}

document.addEventListener('keydown', function (e) {
  checkIfLetterExists(e.key)
})
