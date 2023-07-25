import * as Entity from './classes/entity.js';
import * as Abilities from './classes/abilities.js';


const GameAction = {

    INIT : "init",
    START_MATCH :"startMatch",
    PLAYER_TURN : "playerTurn",
    BOSS_TURN : "bossTurn",
    END_MATCH :"endMatch",
}

let gameAction = GameAction.INIT;

let orderToPlay = [];
let currentPlayingIndex = 0;

let bossPower = new Abilities.Power("3RR0R","./error_sprite.png","",1,1);
let bossPower2 = new Abilities.Power("P0S =","./error_sprite.png","",1,1);

let unitSpell = new Abilities.Spell("Coding","./error_sprite.png","test",1,1);
let enemySpell = new Abilities.Spell("Wrong Pos","./error_sprite.png","test",1,1);

const unitStats = new Entity.Stats(20,5,5,5);
const bosstStats = new Entity.Stats(30,5,5,7);


let playerUnit = new Entity.Unit("Antoine","./error_sprite.png",unitStats,[unitSpell],true);
let playerUnit2 = new Entity.Unit("Rémi","./error_sprite.png",unitStats,[unitSpell],true);

let enemyUnit = new Entity.Unit("PosX","./error_sprite.png",unitStats,[enemySpell],false);
let enemyUnit2 = new Entity.Unit("PosY","./error_sprite.png",unitStats,[enemySpell],false);

let boss = new Entity.Boss("JavaScript","./error_sprite.png",bosstStats,[enemyUnit,enemyUnit2],[bossPower,bossPower2]);


let playerTeam = new Entity.Party([playerUnit,playerUnit2]);
let enemyTeam = new Entity.Party([boss,enemyUnit,enemyUnit2]);
// console.log(playerTeam);
// console.log(enemyTeam);



function init() {

    createTeam(playerTeam, "playerSide");
    createTeam(enemyTeam, "bossSide");

}

init();
console.log(orderToPlay);

function createTeam(party,sideID){

    party.members.forEach(member => {
        createGameObject(sideID,member); 
        orderToPlay.push(member); 
    });
}

function createGameObject(parentID,data){

    let parent =  document.getElementById(parentID);
    
    // Create Visual
    let visual = document.createElement("div");

    parent.appendChild(visual);

    let order = document.createElement("p");

    order.appendChild(document.createTextNode(orderToPlay.length));
    visual.appendChild(order);

    let img = document.createElement("img");        
    img.src = data.sprite;
    visual.appendChild(img);

    let title = document.createElement("p");
    title.appendChild(document.createTextNode(data.Name));
    visual.appendChild(title);

    let hp = document.createElement("p");
    hp.appendChild(document.createTextNode(data.stats.health));
    visual.appendChild(hp);

    // let msgDiv = data.isPlayer? document.getElementById("player") : document.getElementById("boss") ;
   
    visual.addEventListener('click',()=>{displayUnit(data) });
    // visual.addEventListener('mouseout',()=>{stopDisplayElement(msgDiv) });

    gameAction = GameAction.START_MATCH;

}

// function stopDisplayElement(msgDiv){
//     msgDiv.textContent = "";
// }

function displayUnit(data){
    console.log(data);

    // Display data on top
    let dataDiv = document.getElementById("log") ;
    let turnNb = orderToPlay.findIndex(x => x == data) - currentPlayingIndex;
    let turn = ` ${turnNb>1? `will play in ${turnNb} turns`:turnNb>0?`will play next turn` : `is currently playing`}`;
    let dataMsg = `${data.Name} has ${data.stats.health} HP, ${turn}.`;
    
    dataDiv.textContent = dataMsg;

    // Display abilities on bottom
    // WIP for now text only
    let abDiv = document.getElementById("abilities") ;
    let abMsg = `Abilities : `; 
    data.abilities.forEach(x => { abMsg += `[${x.Name}] `});
    abDiv.textContent = abMsg;



}






