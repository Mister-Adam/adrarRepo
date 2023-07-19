const nameApiPath = "https://pokeapi.co/api/v2/pokemon-species/";
const imgApiPath= "https://pokeapi.co/api/v2/pokemon/";

let answer ="";
let clue = 0;
let clues = [];

function fetchPkmn(index){

    // Search api for the sprite
    fetch(imgApiPath + `${index}`)
//     fetch(apiPath + new URLSearchParams({
//     limit: index,
// }))
    .then(response => response.json())
    .then(data => {      
        document.getElementById("pkmn").getElementsByTagName('img' )[0].src=data.sprites.other.home.front_default;           
    })

    // Search api for the french name [4]
    fetch(nameApiPath + `${index}`)
    .then(response => response.json())
    .then(data => {   
        answer = data.names[4].name;  
        console.log(answer);  
    })

    if(clue!=0)clue=0; // lil check
}


function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

fetchPkmn(randomIntFromInterval(1,300));

//Show image and name if true
function show(showName=false){
    if(showName)document.getElementById("pkmnName").value = answer;
    
    document.getElementById("pkmn").getElementsByTagName('img' )[0].className ="";     
}

function submit() {
    let input = document.getElementById("pkmnName");
    if(input.value == answer){
        show();
    }else {
    
        if(clues.length >= answer.length/2)
        {
            show(true);
            return;
        }
    input.placeholder = clueText(answer,clue);
    input.value = "";
    
    clue++;

    }   
}


function clueText(answer,clue){
    let result = "";  
    if(clue>0){       
        let nb = randomIntFromInterval(1,answer.length-1);
        while (clues.includes(nb)) {                
            nb = randomIntFromInterval(1,answer.length-1);
            if(clues.length == answer.length-1)
            {
                break;
            }
        }   
        clues.push(nb);
        
    }else if (clue == 0){
        clues.push(0);
    }

        console.log(clues);

    for (let index = 0; index < answer.length; index++) {
        
        if(clues.includes(index))
        {
            result += answer.charAt(index);
        } else {
            result += "_.";
        }
        
        
    }
    return result;
}

