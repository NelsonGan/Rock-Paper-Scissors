//Global variables used to track progress
var win = 0;
var lose = 0;
var tie = 0;


//Main play function
function play(user) {
    let computer = computerChoice();
    let result = winCondition(user,computer);

    //Update scores
    let scores = win + " W | " + tie + " T | " + lose + " L";
    document.getElementById("scores").innerHTML = scores;

    //Hide main screen
    let main = document.getElementById("content");
    main.style.display = "none";

    //Update result screen
    resultmsg = "&lt;p&gt; You picked " + translator(user) + ", computer picked " + translator(computer) + " &lt;/p&gt;"
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

function computerChoice() {
    let computer = Math.floor(Math.random() * 3);
    return computer;
}

//Translate number into words for printing

function translator(number) {
    if (number == 0) return "rock";
    if (number == 1) return "paper";
    if (number == 2) return "scissors";
}

//Return win, lose or tie and change global variable
function winCondition(user, computer) {
    if (user == computer) {
        tie+=1;
        return "tie";
    }
    if (user == 0) {
        if (computer == 1) {
            lose+=1;
            return "lose";
        }
        if (computer == 2) {
            win+=1;
            return "win";
        }
    }
    if (user == 1) {
        if (computer == 0) {
            win+=1;
            return "win";
        }
        if (computer == 2) {
            lose+=1;
            return "lose";
        } 
    }
    if (user == 2) {
        if (computer == 0) {
            lose+=1;
            return "lose";
        }
        if (computer == 1) {
            win+=1;
            return "win";
        }
    }           
}

