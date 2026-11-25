//LOOP the game
let userScore = 0;
let computerScore = 0;
while (true){

    let userChoice;
    while (true) {
        //PROMPT user for an input of r, p, s, or q to quit
        //STORE the input in a varable called userChoice
        userChoice = prompt("(r)ock, (p)aper or (s)cissors?", "r/p/s");
        //IF input is NOT r, p, s or q 
        if (userChoice === "r" || userChoice === "p"|| userChoice === "s") {
            console.log("You chose: " + userChoice)
            break;
        }else {      
            //REPROMPT (with a loop perhaps)
            continue;
        }
    }
    //GENERATE random number from 0-2
    //STORE random number in a varibale called randNum
    let randomNumber = Math.floor(Math.random() * 3);
    let comChoice;
    //ASSIGN an r, p, s value based off of randNum 
    if (randomNumber === 0) {
        //CREATE a variable called comChoice
        //IF randNum is 0, then store r in comChoice
        comChoice = "r";
    }else if (randomNumber === 1){
        //ELSEIF randNum is 1, then store p in comChoice
        comChoice = "p";
    }else {
        //ELSE (randNum will be 2) store s in comChoice
        comChoice = "s";
    }
        //DISPLAY comChoice
    console.log("Computer chose: " + comChoice)
    //COMPARE userChoice with comChoice
    //IF 
        //userChoice is r and comChoice is r or
        //userChoice is p and comChoice is p or
        //userChoice is s and comChoice is s
            
    if (userChoice === comChoice){
        draw()            //CALL a tie() function
    }else if (            //ELSEIF
        (userChoice === "r" && comChoice === "s")||            //userChoice is r and comChoice is s or
        (userChoice === "p" && comChoice === "r")||            //userChoice is p and comChoice is r or 
        (userChoice === "s" && comChoice === "p")){            //userChoice is s and comChoice is p
        
        userWin();            //CALL a userWin() function
    }else {        //ELSE
        comWin();    //CALL a comWin() function
    }
    //FUCNTIONS

    function draw(){ //tie()
    //DISPLAY a message "It's a DRAW!"
        console.log("It's a draw!")
        displayScore();
    }
    
    function userWin() {    //userWin()
        userScore++     //INCREMENT varibale userScore by 1
        console.log("You win!")     //DISPLAY messgae "You won!"
        displayScore()  //DISPLAY userScore and comScore
    }
    
    function comWin(){     //comWin()
        computerScore++//INCREMENT variable comScore by 1
        console.log("You lost...")  //DISPLAY message "You lose..."
        displayScore()    //DISPLAY userScore and comScore
    }

    function displayScore(){
        console.log("Player: " + userScore + ", Computer: " + computerScore)
    }
}


// function getComuputerChoice() {
//     let computerChoice;
//     let randNum = Math.floor(Math.random() * 3);

//     if (randNum === 0) {
//         computerChoice = "r";
//     }else if (randNum === 1) {
//         computerChoice = "p";
//     } else {
//         computerChoice = "s";
//     }
//     return computerChoice
// }

// function getHumanChoice() {
//     let humanChoice;
//     console.log("Please select your move: (r)ock, (p)aper or (s)cissors");
//     const userInput = prompt("Type your selection", "r, p or s");
//     if (userInput === "r" || userInput === "p" || userInput === "s") {
//         humanChoice = userInput
//     } else {
//         humanChoice = getHumanChoice();
//     }
//     return humanChoice;
// }

// console.log(getHumanChoice())