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

//function FOR COMPUTER to choose rock, paper, or scissors
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