have an array of objects
each object has a question, 4 answers, and a correct key/value pair 

start screen that triggers "playGame()" or whatever

start timer

randomly pick a question out of the array, present the question and 4 answer choices in the buttons/textarea I've designated.

give each button a class of choiceA/B/C/D, onclick check if it's a match with the answer and if it is add one to the score, and show if it was right or wrong on screen(whether it's button color or on screen alert)

cycle through until timer runs out

MAKE SURE YOU DON'T GET SAME QUESTION TWICE: 

make sure the array gets initialized at the start of every round though

Use splice() to remove the question from the array and then go back to pick a random question from the ones remaining

When timer runs out pop up new screen that shows score and asks for initials 

Add initals and score to HS array (initially empty) (maybe limit to 5 char or something?)

clear button intitializes array 