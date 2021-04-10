var results = {
    win: 0,
    loose: 0,
    tied: 0,
};
do {
    var computerRandom;  //initializes computer random choice 
    var choice = prompt("Please choose R, P or S"); // prompts user to choose a value
    //initializing the results


    choice = choice.toUpperCase(); //uppercases the input

    //loop that verifies that you chose a valid letter
    while ((choice !== 'R') && (choice !== 'P') && (choice !== 'S')) {
        choice = prompt("Please only chosose between R, P or S").toUpperCase();
    } 
    console.log(`users choice ${choice}`);


    //function that will be invokes to randomize the computer choice
    function computer() {
        var computerChoice = ['R', 'P', 'S'];
        computerRandom = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    }
    computer(); //calls computer function and assigns value to computerRandom
    
    console.log(`computer choice ${computerRandom}`); //shows the random result of computer 
    
    // function that compares computer and user choices and adds results 
    function compare(userChoice, compChoice) {
        if (userChoice === compChoice) {
            results.tied = results.tied + 1;
            return alert(`it is a tie! You chose ${userChoice} and computer chose ${compChoice}\nWins: ${results.win}\nLoses: ${results.loose}\nTies: ${results.tied}`);
        } else if ((userChoice === 'R' && compChoice === 'S') || (userChoice === 'P' && compChoice === 'R') || (userChoice === 'S' && compChoice === 'P')) {
            results.win = results.win + 1;
            return alert(`You win! You chose ${userChoice} and computer chose ${compChoice}\nWins: ${results.win}\nLoses: ${results.loose}\nTies: ${results.tied}`);
        } else {
            results.loose = results.loose + 1;
            return alert(`You loose! You chose ${userChoice} and computer chose ${compChoice}\nWins: ${results.win}\nLoses: ${results.loose}\nTies: ${results.tied}`);
        };
    }
    
    //invokes the function to compare
    compare(choice, computerRandom);
    
} while (confirm('Do you want to play again?'));

var h = document.createElement('h2');
var t = document.createTextNode(`your final results are:\nWins: ${results.win}\nLoses: ${results.loose}\nTies: ${results.tied}`);
h.appendChild(t);

document.body.appendChild(h);



