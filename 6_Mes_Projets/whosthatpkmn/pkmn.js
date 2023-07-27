const imgApiPath = "https://pokeapi.co/api/v2/pokemon/";
const nameApiPath = "https://pokeapi.co/api/v2/pokemon-species/";

let answer = "";
let clue = 0;
let clues = [];
let score = 0;
let canClick = true;
let alreadySeen = [];
let maxPkmnId = 151; // Base is 1st generation

let imgToGuess = document.getElementById("pkmn").getElementsByTagName('img')[0];
const nameInput = document.getElementById("pkmnName");
let scoreDisplay = document.getElementById("score");

// Upgrade possible: add parameters to define the scope (generations, types etc)
newGuess();

function newGuess() {

    // Reset clues and visual
    clue = 0;
    clues = [];
    imgToGuess.className = "hidden";    
    nameInput.value = "";
    nameInput.placeholder = "C'est ....";

    // Search for an id that hasn't been seen
    let newId = randomIntFromInterval(1, maxPkmnId);
    if (!alreadySeen.includes(newId)) {
        alreadySeen.push(newId);
    } else {
        while (alreadySeen.includes(newId)) {
            if (alreadySeen.length >= maxPkmnId){
                return;
            }            
            newId = randomIntFromInterval(1, maxPkmnId);
            if (!alreadySeen.includes(newId)) {
                alreadySeen.push(newId);
                break;
            }
        }
    }

    fetchPkmn(newId);
    

    imgToGuess.hidden = false; // Dislay image
    canClick = true; // Authorize player to submit

}


// Search api for the sprite and name
async function fetchPkmn(index) {

    try {
        await
        fetch(nameApiPath + `${index}`)
            .then(response => response.json())
            .then(data => {

                answer = data.names[4].name.toLowerCase(); //.normalize("NFD").replace(/\p{Diacritic}/gu, "") to remove accents

                // Small fix for these very special cases
                if (data.names[4].name == "Nidoran♀" || data.names[4].name == "Nidoran♂") {
                    answer = "nidoran";
                }
                // alreadySeen.push(answer);
            })

        await
        fetch(imgApiPath + `${index}`)
            .then(response => response.json())
            .then(data => {
                imgToGuess.src = data.sprites.other.home.front_default;
            })
        
    } catch (error) {
        alert(error.name,error.message,error.stack);
        imgToGuess.src = "./img/MissingNo.png";
        answer = "MissingN0";
    }
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// Execute a function when the user presses a key on the keyboard
nameInput.addEventListener("keypress", function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        // event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("submit").onclick();
    }
});

//Show image and name 
function show(showName = false) {

    if (showName) nameInput.value = answer;  
    imgToGuess.className = "";  
    updateScore(showName);
    
    //New guess after some time
    setTimeout(() => {  
        imgToGuess.hidden = true;  
        newGuess();
    }, 500);

}

// Add points if found else none
function updateScore(failed) {
    score += failed ? 0 : answer.length * 10 - clues.length * 10;
    scoreDisplay.textContent = score.toString() + " pour "+ alreadySeen.length + " vus";
}

//Called when clicking button
function submit() {

    if (!canClick) return;

    if (nameInput.value == answer) {
        show();
        canClick = false;
        return;
    } else {

        if (clues.length >= answer.length / 2) {
            show(true);
            canClick = false;
            return;
        }
        nameInput.placeholder = clueText(answer, clue);
        nameInput.value = "";

        clue++;

    }
}

//Return a placeholder to help until half length of the name
function clueText(answer, clue) {
    let result = "";
    if (clue > 0) {
        let nb = randomIntFromInterval(1, answer.length - 1);
        while (clues.includes(nb)) {
            nb = randomIntFromInterval(1, answer.length - 1);
            if (clues.length == answer.length - 1) {
                break;
            }
        }
        clues.push(nb);

    } else if (clue == 0) {
        clues.push(0);
    }

    for (let index = 0; index < answer.length; index++) {

        if (clues.includes(index)) {
            result += answer.charAt(index);
        } else {
            result += "_.";
        }


    }
    return result;
}
