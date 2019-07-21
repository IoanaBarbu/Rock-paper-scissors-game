var addButton = document.getElementById("addButton");
addButton.addEventListener("click", playGame);

function playGame (){
    console.log("clicked");
let userChoice = document.querySelector("#formGroupExampleInput").value;
console.log (userChoice);
userChoice = userChoice.toLowerCase();
const choiceArray = ['paper', 'rock', 'scissors'];
const randomNum = Math.floor(Math.random() * 3);
let computerChoice = choiceArray[randomNum];
console.log(`Your choice is ${userChoice}, the computer's choice is ${computerChoice}.`);
var newElement = document.createElement('div');
    
    newElement.innerHTML = `Your choice is ${userChoice}, the computer's choice is ${computerChoice}.`;
    console.log(newElement);
    
    var elementContainer = document.getElementById("elementContainer");
    elementContainer.appendChild(newElement);
    
    function printOnScreen(unu) {

        const div = document.createElement('div');
        div.innerHTML = unu;
         document.querySelector('#elementContainer1').appendChild(div);
      }
      
    if (userChoice === computerChoice){
        console.log("Tie!");
        printOnScreen("The game result is: Tie!");
        }else if (userChoice === 'paper' && computerChoice === 'rock'){
        console.log("You win!");
        printOnScreen("The game result is: You win!");
        }else if (userChoice === 'rock' && computerChoice === 'scissors'){
        console.log("You win!");
        printOnScreen("The game result is: You win!");
        }else if (userChoice === 'scissors' && computerChoice === 'rock'){
        console.log("You lose!");
        printOnScreen("The game result is: You lose!");
        }else if (userChoice === 'rock' && computerChoice === 'paper'){
        console.log("You lose!");
        printOnScreen("The game result is: You lose!");
        }else if (userChoice === 'paper' && computerChoice === 'scissors'){
        console.log("You lose!");
        printOnScreen("The game result is: You lose!");
        }else if (userChoice === 'scissors' && computerChoice === 'paper'){
        console.log("You win!");
        printOnScreen("The game result is: You win!");
        }else{
        console.log("Invalid input, please try again");
        printOnScreen("Invalid input, please try again");
        }
        
};
