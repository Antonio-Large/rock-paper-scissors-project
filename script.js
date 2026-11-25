//LOOP the game unless user inputs a q command
//PROMPT user for an input of r, p, s, or q to quit
    //IF input is NOT r, p, s or q 
        //REPROMPT (with a loop perhaps)
    //IF input is q
        //END program
//STORE the input in a varable called userChoice
//GENERATE random number from 0-2
//STORE random number in a varibale called randNum
//ASSIGN an r, p, s value based off of randNum 
    //CREATE a variable called comChoice
    //IF randNum is 0, then store r in comChoice
    //ELSEIF randNum is 1, then store p in comChoice
    //ELSE (randNum will be 2) store s in comChoice
//DISPLAY comChoice
//COMPARE userChoice with comChoice
    //IF 
        //userChoice is r and comChoice is r or
        //userChoice is p and comChoice is p or
        //userChoice is s and comChoice is s
        
        //CALL a tie() function
    //ELSEIF
        //userChoice is r and comChoice is s or
        //userChoice is p and comChoice is r or 
        //userChoice is s and comChoice is p

        //CALL a userWin() function
    
    //ELSE
        
        //CALL a comWin() function

//FUCNTIONS

//tie()
//DISPLAY a message "It's a DRAW!"

//userWin()
//INCREMENT varibale userScore by 1
//DISPLAY messgae "You won!"
//DISPLAY userScore and comScore

//comWin()
//INCREMENT variable comScore by 1
//DISPLAY message "You lose..."
//DISPLAY userScore and comScore


function getComuputerChoice() {
    let computerChoice;
    let randNum = Math.floor(Math.random() * 3);

    if (randNum === 0) {
        computerChoice = "r";
    }else if (randNum === 1) {
        computerChoice = "p";
    } else {
        computerChoice = "s";
    }
    return computerChoice
}

function getHumanChoice() {
    let humanChoice;
    console.log("Please select your move: (r)ock, (p)aper or (s)cissors");
    const userInput = prompt("Type your selection", "r, p or s");
    if (userInput === "r" || userInput === "p" || userInput === "s") {
        humanChoice = userInput
    } else {
        humanChoice = getHumanChoice();
    }
    return humanChoice;
}

console.log(getHumanChoice())