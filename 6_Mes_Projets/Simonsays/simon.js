
let guessArray = [];
var currentGuessId=0;
var speed = 800;

// Launch game when clicking start 
function startGame() {  
    document.getElementById("instruction").textContent= "Welcome to Simon Says";
    document.getElementById('game').style.display = 'grid';
    document.getElementById('start').style.display = 'none';
    newGuess();
};

// Function to choose a button ID (and store it)
function getRandomID() {
    return Math.floor(Math.random() * 4);
}


function newGuess(){
    // Store id
    let guessId = getRandomID();
    guessArray.push(guessId);
    
    var toGuess = 0;

    // Repeat animation for each in array
    for (let index = 0; index < guessArray.length; index++) {
        guessId = guessArray[index];
        toGuess = document.getElementById('game').getElementsByTagName("input")[guessId]

        setTimeout(blink,1000+speed*index, toGuess);        
    }

    // 
    setTimeout(function() {     

        document.getElementById("instruction").textContent="GO !";
        toNextGuess();
    
    }, speed + speed*guessArray.length);

}

// Refresh buttons onClick in accordance to combination
function toNextGuess(){
    for (let index = 0; index < 4; index++) {
        let btn = document.getElementById('game').getElementsByTagName("input")[index];
        index != guessArray[currentGuessId]? btn.onclick = badGuess : btn.onclick = goodGuess;
    }
    currentGuessId++;   
    
}


function goodGuess(){

    stopClick();
    if(currentGuessId!=guessArray.length){
        // Continue the guessing
        toNextGuess();
        
    }
    else // Finish this combination
    {
        currentGuessId = 0;
        document.getElementById("instruction").textContent="Bravo! Let's continue";

        newGuess();
    }

}

function badGuess(){

    stopClick();   
    // Display score
    let score = ` You scored ${100 * (guessArray.length-1)}`;
    document.getElementById("instruction").textContent = score;

    // Reset variables
    currentGuessId = 0;
    guessArray = [];

    // Reset animations
    for (let index = 0; index < 4; index++) {            
        document.getElementById('game').getElementsByTagName("input")[index].style.animation = 'none';
    }

    document.getElementById("game").style.display = "none";

    // Show replay button (that launch the game again)
    let b = document.getElementById("start");
    b.style.display = "flex";
    b.getElementsByTagName("input")[0].value  = "Replay"

}

function blink(toGuess){

    // Reset animation
    toGuess.style.animation = 'none';
    toGuess.offsetHeight; 
    toGuess.style.animation = null; 

    // Blink animation
    toGuess.style.animation = "blink 0.7s linear 1";   
}

// Prevent player for clicking when not allowed
function stopClick(){
    for (let index = 0; index < 4; index++) {            
        document.getElementById('game').getElementsByTagName("input")[index].onclick = null;
    }
}



