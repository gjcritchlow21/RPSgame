// DOM elements
let start = document.getElementById("start");
let status = document.getElementById("status");
let compMove = document.getElementById("compMove");
let playerMoves = Array.from(document.getElementsByClassName("playerMove"));

//game variables
let playerScore = 0;
let compScore = 0;
let interval = 0;
let timer;

//game reference variables
let moves = ["ROCK", "PAPER", "SCISSORS"];
let moveMap = {
  ROCK: 0,
  PAPER: 1,
  SCISSORS: 2,
};

//start button event listener
start.addEventListener("click", startGame);

//functions
//start game function runs the game
function startGame() {
  start.disabled = true; //disable button once clicked
  status.innerText = "Starting in ..."; //turn status area into string
  timer = setInterval(countUp, 1000); //call countUp function increment in seconds
  for (let move of playerMoves) {
    //for loop that targets our array
    move.addEventListener("click", playerTurn); //adding event listener and to move button and calling our player turn function
  }
}

function countUp() {
  interval += 1; //count the interval up by 1
  status.innerText = interval !== 4 ? interval : "GO!"; //set the status container to count up and once 4 is hit change to "go"
  if (interval === 4) {
    // if statement clears interval at 4
    clearInterval(timer);
    playerMoves.forEach((move) => {
      //and disables the button
      move.disabled = false;
    });
  }
}

function playerTurn(event) {
  let comp = moves[Math.floor(Math.random() * 3)]; //random RPS generator
  let player = event.target.id.toUpperCase(); // setting the player name to upper case
  playerMoves.forEach((move) => {
    // for each player move, remove the event listener and disable start button
    move.removeEventListener("click", playerTurn);
    if (event.target.id !== move.id) {
      move.disabled = true;
    }
  });
  compMove.disabled = false; //enable the gameplay buttons
  compMove.innerText = comp; //display the comps RPS choice
  let winner = determineWin(comp, player); //run determine winner function and display corresponding outcome
  if (winner === "draw") {
    status.innerText = `It's a Draw... Score ${playerScore} - ${compScore}`;
  } else if (winner === "comp") {
    compScore += 1;
    status.innerText = `Computer Wins Score ${playerScore} - ${compScore}`;
  } else {
    playerScore += 1;
    status.innerText = `You Win! Score ${playerScore} - ${compScore}`;
  }
  start.disabled = false; //reengage the play button to play again
  interval = 0; //reset the interval
}

function determineWin(comp, player) {
  //pass the player and computer as arguments to target those variables
  if (comp === player) {
    //if the player and comp choose the same DRAW
    return "draw";
  }
  if ((moveMap[comp] - moveMap[player] + 3) % 3 === 1) {
    //formula to determine and declare winner, turning into to string to run through IF statement in playerTurn Function
    return "comp";
  } else {
    return "player";
  }
}
