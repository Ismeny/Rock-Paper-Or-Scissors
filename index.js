// arrow function FOR USER to choose rock, paper, or scissors
const getUserChoice = userInput =>  {
    // converts user input to lowercase so it can match and perform correctly
    userInput = userInput.toLowerCase();
    // checking for a valid choice 
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log('There was an error with your choice!')
    };
};
// should print 'paper'
console.log(getUserChoice('PAPER'))

//function declaration FOR COMPUTER to choose rock, paper, or scissors
function getComputerChoice() {
    // get a random whole number between 0 and 2
    Math.random(Math.floor() * 3)
    // then depending on the number return either rock, paper or scissors
    switch (0) {
        case 0: 
         return 'rock';
        case 1:
         return 'paper';
        case 2: 
         return 'scissors'
    }
}
//should print 'rock'
console.log(getComputerChoice());

// function expression 
const determineWinner = function (userChoice, computerChoice) {
    //comparing userchoice to computer choice to determine winner
    if (userChoice === computerChoice) {
        return "The game is a tie!"
    } if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'The computer won!'
        } else {
            return 'You won!'
        }
    } if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'The computer won!'
        } else {
            return 'You won!'
        }
    } if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'The computer won!'
        } else {
            return 'You won!'
        }
    }
    
}
// should print the game is a tie
console.log(determineWinner('scissors', 'scissors'));

// function to start the game and log results 
function playGame() {
    const userChoice = getUserChoice('scissors');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
}

