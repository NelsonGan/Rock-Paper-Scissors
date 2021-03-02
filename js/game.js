//Global variables used to track progress
var winCount = 0;
var loseCount = 0;
var tieCount = 0;

//All functions
//Main play function
function play(user) {
    let computer = getComputerChoice();
    let result = getResults(user,computer);

    //Update scores
    let scores = winCount + " W | " + tieCount + " T | " + loseCount + " L";
    document.getElementById("scores").innerHTML = scores;

    //Hide main screen
    let main = document.getElementById("content");
    main.style.display = "none";

    //Update result screen
    resultmsg = "&lt;p&gt; You picked " + translateNumber(user) + ", computer picked " + translateNumber(computer) + " &lt;/p&gt;"
    winlosemsg = "&lt;script&gt; " + result + " += 1 &lt;/script&gt;";

    document.getElementById("result-msg").innerHTML = resultmsg;
    document.getElementById("winlose-msg").innerHTML = winlosemsg;

    //Show result screen
    let resultscreen = document.getElementById("result")
    resultscreen.style.display = "block";
}

//Allow user to go back to main page

function tryAgain() {
    //Hide result screen
    let resultscreen = document.getElementById("result");
    resultscreen.style.display = "none";

    //Show main screen
    let main = document.getElementById("content")
    main.style.display = "block";
}

//Generate choice for computer

function getComputerChoice() {
    let computer = Math.floor(Math.random() * 3);
    return computer;
}

//Translate number into words for printing

function translateNumber(number) {
    if (number == 0) return "rock";
    if (number == 1) return "paper";
    if (number == 2) return "scissors";
}

//Return win, lose or tie and change global variable
function getResults(user, computer) {
    if (user == computer) {
        tieCount+=1;
        return "tie";
    }
    if (user == 0) {
        if (computer == 1) {
            loseCount+=1;
            return "lose";
        }
        if (computer == 2) {
            winCount+=1;
            return "win";
        }
    }
    if (user == 1) {
        if (computer == 0) {
            winCount+=1;
            return "win";
        }
        if (computer == 2) {
            loseCount+=1;
            return "lose";
        } 
    }
    if (user == 2) {
        if (computer == 0) {
            loseCount+=1;
            return "lose";
        }
        if (computer == 1) {
            winCount+=1;
            return "win";
        }
    }           
}

//Add event listener
let choiceButtons = document.getElementById("choice").children;

//Used let to maintain scope
for (let i = 0; i < choiceButtons.length; i++) {
    choiceButtons[i].addEventListener('click', () => {
        play(i);
    });
}

let tryButton = document.getElementById("button");

tryButton.addEventListener('click', () =>
{
    tryAgain();
}
);
