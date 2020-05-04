//Grab divs
var welcomePage = document.getElementById("welcomeMessage");
var gameSpace = document.getElementById("gameSpace");
//Grab buttons
//Start button
var startBtn = document.getElementById("startButton");
//Question Space
var questionSpace = document.getElementById("questionSpace");
//Choice buttons
var choiceA = document.getElementById("choiceA");
var choiceB = document.getElementById("choiceB");
var choiceC = document.getElementById("choiceC");
var choiceD = document.getElementById("choiceD");
//Timer
var timerEl = document.getElementById("timer");
// Other variables
var score = 0;

//Array of question objects
var questions = [
    {
        question: 'HTML stands for:',
        a: 'Henrys Totally Mean Lizard',
        b: 'Hypertext Markup Language',
        c: 'Hypertext Markdown Language',
        d: 'Hypertext Markup Links',
        answer: 'b'
    },
    {
        question: 'CSS stands for:',
        a: 'Cascading Style Sheets',
        b: 'Cool Styling Syntax',
        c: 'Colors, Styles, Serif',
        d: 'Code Scripting Service'
    }
]

//Changes the display and starts the game
startBtn.onclick = function() {
    welcomePage.style.display = "none";
    gameSpace.style.display = "flex";
    playGame();
    startTimer();
}

//Functions

var seconds = 30;
//Starts timer and ends game when it's done
function startTimer() {
    //Set up the timer in here, when it hits 0 call the endgame function which will change display and reset everything basically
    timeRemaining = setInterval(function(){
        seconds--;
        timerEl.innerHTML = "Timer: " + seconds;

        if(seconds === 0){
            clearInterval(timeRemaining)
            endGame();
        }
    }, 1000);
}

//Plays the game
function playGame() {
    //Picks a random question out of the array
    var randomQuestionNum = Math.floor(Math.random() * questions.length);
    //Sets the text up on the page
    questionSpace.innerHTML = questions[randomQuestionNum].question;
    choiceA.innerHTML = questions[randomQuestionNum].a;
    choiceB.innerHTML = questions[randomQuestionNum].b;
    choiceC.innerHTML = questions[randomQuestionNum].c;
    choiceD.innerHTML = questions[randomQuestionNum].d;
}

function endGame() {
    // gameSpace.style.display = "none";
}