//Grab divs
var welcomePage = document.getElementById("welcomeMessage");
var gameSpace = document.getElementById("gameSpace");
//Grab parts of page
//Start button
var startBtn = document.getElementById("startButton");
//Question Space
var questionSpace = document.getElementById("questionSpace");
var answerSpace = document.getElementById("answerSpace");
//Choice buttons
var choiceA = document.getElementById("choiceA");
var choiceB = document.getElementById("choiceB");
var choiceC = document.getElementById("choiceC");
var choiceD = document.getElementById("choiceD");
//Timer
var timerEl = document.getElementById("timer");
// Other variables
var highScores = [];
var score = 0;
var seconds = 30;
var ranodmNum = 0;

//Array of question objects
var questions = [
    {
        question: 'HTML stands for:',
        answers: [
        'Henrys Totally Mean Lizard',
        'Hypertext Markup Language',
        'Hypertext Markdown Language',
        'Hypertext Markup Links'],
        answer: 'Hypertext Markup Language'
    },
    {
        question: 'CSS stands for:',
        answers: [
        'Cascading Style Sheets',
        'Cool Styling Syntax',
        'Colors, Styles, Serif',
        'Code Scripting Service'],
        answer: 'Cascading Style Sheets'
    }
]

//Changes the display and starts the game
startBtn.onclick = function() {
    welcomePage.style.display = "none";
    gameSpace.style.display = "flex";
    writeQuestion();
    startTimer();
}

//Functions

//Starts timer and ends game when it's done
function startTimer() {
    //Set up the timer in here, when it hits 0 call the endgame function which will change display and reset everything basically
    timeRemaining = setInterval(function(){
        seconds--;
        timerEl.innerHTML = "Timer: " + seconds;

        if(seconds <= 0){
            clearInterval(timeRemaining)
            endGame();
        }
    }, 1000);
}

function writeQuestion() {
    questionSpace.innerHTML = "";
    answerSpace.innerHTML = "";
    randomNum = Math.floor(Math.random() * questions.length);
    var qHeading = document.createElement("h1");
    qHeading.innerHTML = questions[randomNum].question;
    questionSpace.appendChild(qHeading);
    for(var i = 0; i < questions[randomNum].answers.length; i++) {
        var questionBtn = document.createElement("p");
        questionBtn.classList.add("answer-btn");
        questionBtn.textContent = questions[randomNum].answers[i];
        questionBtn.addEventListener("click", checker);
        answerSpace.appendChild(questionBtn);
    }
}

function checker(event) {
    if(event.target.innerHTML === questions[randomNum].answer) {
        score++;
    } else {
        seconds -= 5;
    }

    questions.splice(randomNum, 1);

    if(questions.length === 0) {
        endGame();
    } else {
        writeQuestion();
    }
}

function endGame() {
    // gameSpace.style.display = "none";
}