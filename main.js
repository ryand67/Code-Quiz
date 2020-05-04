//Grab divs
var welcomePage = document.getElementById("welcomeMessage");
var gameSpace = document.getElementById("gameSpace");
var endSpace = document.getElementById("endgame");
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
var questions = [];

//Default array of question objects
var questionsNew = [
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
startBtn.addEventListener("click", playGame);

//Functions
//Initializes some variables and starts the game
function playGame() {
    seconds = 30;
    score = 0;
    endSpace.innerHTML = "";
    welcomePage.style.display = "none";
    gameSpace.style.display = "flex";
    resetArray();
    writeQuestion();
    startTimer();
}

function resetArray() {
    for(var i = 0; i < questionsNew.length; i++) {
        questions[i] = questionsNew[i];
    }
}

//Starts timer and ends game when it's done
function startTimer() {
    //Timer starts and counts down
    var timeRemaining = setInterval(function(){
        seconds--;
        timerEl.innerHTML = "Timer: " + seconds;
        //When the timer runs out stop timer, and call endGame().  It's <= because of the wrong question time penalty, it could send it into negative numbers.
        if(seconds <= 0){
            clearInterval(timeRemaining)
            endGame();
        }
    }, 1000);
}

//Main writing function
function writeQuestion() {
    //Resets the game space for more questions to be printed
    questionSpace.innerHTML = "";
    answerSpace.innerHTML = "";
    //Creates a random number to choose a random question 
    randomNum = Math.floor(Math.random() * questions.length);
    //Creates the question heading and appends to the questionSpace div
    var qHeading = document.createElement("h1");
    //Sets the innerHTML to the question from the randomly selected object
    qHeading.innerHTML = questions[randomNum].question;
    questionSpace.appendChild(qHeading);
    //Runs through all of the answer options, creating clickable p tags with the right styles for each answer.  Appends to the answerSpace div.
    for(var i = 0; i < questions[randomNum].answers.length; i++) {
        var questionBtn = document.createElement("p");
        questionBtn.classList.add("answer-btn");
        questionBtn.textContent = questions[randomNum].answers[i];
        //Adds event listener with checker function to compare answer
        questionBtn.addEventListener("click", checker);
        answerSpace.appendChild(questionBtn);
    }

}

//Checks the answer
function checker(event) {
    //If the user picks the right answer add 1 to the score, else subtract 5 seconds.
    if(event.target.innerHTML === questions[randomNum].answer) {
        score++;
    } else {
        seconds -= 5;
    }
    //Removes the question from the array so there's no way to get repeats. (gets reinitialized in end game)
    questions.splice(randomNum, 1);
    //If you're out of questions, end the game by ending the time(calling the function caused double calling with the timer ending up top).  If not, keep making questions.
    if(questions.length === 0) {
        seconds = 0;
    } else {
        writeQuestion();
    }
}

//Displays the end game screen
function endGame() {
    endSpace.style.display = "flex";
    //Hides the gamespace
    gameSpace.style.display = "none";
    //Sets the seconds to 0 to ensure the timer doesn't keep going
    seconds = 0;
    //Sets the timer to the static text
    timerEl.textContent = "Timer:";

    //Creates the header of the end screen
    var endHeading = document.createElement("h1");
    endHeading.textContent = "Game Over!";
    endSpace.appendChild(endHeading);

    //Displays the line that shows the user's end score
    var scoreLine = document.createElement("h2");
    scoreLine.textContent = "Nice!  Your score was: " + score;
    endSpace.appendChild(scoreLine);

    //Creates the div that the buttons will be stored in 
    var buttonDivEl = document.createElement("div");
    buttonDivEl.classList.add("end-btn-div");
    endSpace.appendChild(buttonDivEl);

    //Button triggers the game to go again
    var playAgainBtnEl = document.createElement("button");
    playAgainBtnEl.classList.add("btn", "start-btn", "end-btn");
    playAgainBtnEl.textContent = "Play Again";
    playAgainBtnEl.addEventListener("click", playGame);
    buttonDivEl.appendChild(playAgainBtnEl);

    //Button let's the user store their name and score
    var addScoreBtnEl = document.createElement("button");
    addScoreBtnEl.classList.add("btn", "start-btn", "end-btn");
    addScoreBtnEl.textContent = "Add Score";
    addScoreBtnEl.addEventListener("click", addScoreToList);
    buttonDivEl.appendChild(addScoreBtnEl);
}

//Creates the form for score entering
function addScoreToList() {
    //Form container of sorts
    var formEl = document.createElement("form");
    formEl.classList.add("hs-form");
    endSpace.appendChild(formEl);
    //Text input
    var nameInputEl = document.createElement("input");
    nameInputEl.setAttribute("placeholder", "Enter Initials Here")
    nameInputEl.classList.add("hs-input");
    formEl.appendChild(nameInputEl);
    //Submit button
    var scoreSubmitBtnEl = document.createElement("button");
    scoreSubmitBtnEl.classList.add("btn", "submit-btn", "start-btn");
    scoreSubmitBtnEl.textContent = "+";
    scoreSubmitBtnEl.addEventListener("click", function(){
        
    });
    formEl.appendChild(scoreSubmitBtnEl);
}