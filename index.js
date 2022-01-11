// arrow function to choose rock, paper, or scissors
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