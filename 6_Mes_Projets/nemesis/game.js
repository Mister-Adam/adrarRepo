import * as Entity from './classes/entity.js';
import * as Actions from './classes/actions.js';


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


let bossPower = new Actions.Ability("3RR0R","./error_sprite.png","",1,0,0);
let bossPower2 = new Actions.Ability("P0S =","./error_sprite.png","",1,1,2);

let unitSpell = new Actions.Ability("Coding","./error_sprite.png",Damage(5,0),0,0);
let enemySpell = new Actions.Ability("Wrong Pos","./error_sprite.png","test",0,0);
let redCar = new Actions.Ability("Voiture Rouge","./error_sprite.png",Damage(20,1),0,0);

let playerUnit = new Entity.Unit("Antoine","./error_sprite.png",new Entity.Stats(100,35,5,5),[unitSpell,redCar],true);
let playerUnit2 = new Entity.Unit("Rémi","./error_sprite.png",new Entity.Stats(69,5,5,5),[unitSpell],true);

let enemyUnit = new Entity.Unit("PosX","./error_sprite.png",new Entity.Stats(20,5,5,5),[enemySpell],false);
let enemyUnit2 = new Entity.Unit("PosY","./error_sprite.png",new Entity.Stats(20,5,5,5),[enemySpell],false);

let boss = new Entity.Boss("JavaScript","./error_sprite.png", new Entity.Stats(1000,5,5,7),[enemyUnit,enemyUnit2],[bossPower,bossPower2]);


let playerTeam = new Entity.Party([playerUnit,playerUnit2]);
let enemyTeam = new Entity.Party([boss,enemyUnit,enemyUnit2]);
// console.log(playerTeam);
// console.log(enemyTeam);



function init() {

    createTeam(playerTeam, "playerSide");
    createTeam(enemyTeam, "bossSide");

    displayLog(`It's ${orderToPlay[0].Name} turn to play.`);

}

init();

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

    // Necessary to put id for each cell? can fetch with parent
    visual.id = `${parentID}_${getPosOfChildInParent(visual)}`;
    data.position = visual.id;
    // To change with speed
    data.turnOrder = orderToPlay.length;

    let order = document.createElement("p");
    order.className = "order";
    order.appendChild(document.createTextNode(orderToPlay.length));
    visual.appendChild(order);

    let img = document.createElement("img");        
    img.src = data.sprite;
    img.className = "sprite";

    visual.appendChild(img);

    let title = document.createElement("p");
    title.appendChild(document.createTextNode(data.Name));
    visual.appendChild(title);
    title.className = "Name";

    let hp = document.createElement("p");
    hp.appendChild(document.createTextNode(data.stats.health));
    visual.appendChild(hp);
    hp.className = "health";

    visual.addEventListener('click',()=>{displayUnit(data) });


    gameAction = GameAction.START_MATCH;

}

// function stopDisplayElement(msgDiv){
//     msgDiv.textContent = "";
// }

function displayUnit(data){

    let turnNb = orderToPlay.findIndex(x => x == data) - currentPlayingIndex;
    let turn = ` ${turnNb>1? `will play in ${turnNb} turns`:turnNb>0?`will play next turn` : `is currently playing`}`;
    let log = `${data.Name} has ${data.stats.health} HP, ${turn}.`;
    displayLog(log);


    // Display abilities on bottom, put this somewhere else?    
    let abDiv = document.getElementById("abilities") ;
    
    // Remove buttons 
    var element = abDiv.getElementsByTagName("button"), index;
    for (index = element.length - 1; index >= 0; index--) {
        element[index].parentNode.removeChild(element[index]);
    }

    // Add buttons 
    data.abilities.forEach(a => { 
        let button = document.createElement("button");        
        button.textContent = `${a.Name} `;
        button.addEventListener('click', ()=>{useAbility(data,a)});
        abDiv.appendChild(button);        
    });
}

  // Display data on top
function displayLog(text){

    let dataDiv = document.getElementById("log"); 
    let txt = document.createElement("p");
    txt.appendChild(document.createTextNode(text));
    // dataDiv.appendChild(txt);

    dataDiv.insertBefore(txt, dataDiv.firstChild);
    // add another line (max x);

}

function useAbility(caster,a){

    if(!caster.isPlayer)
    {
        displayLog(`Can't use enemies abilities`);
        return;
    }else if(orderToPlay[0] != caster){
        displayLog(`Not ${caster.Name} turn to play `);
        return;
        
    } else {   // Read effect
        resolveEffect(caster,a);        
    }   
    

}


function resolveEffect(caster,a){
    
    a.effect.call(this,caster);// for each bc multiples possible    
    toNextUnit();

}


function getPosOfChildInParent(child){
    return Array.prototype.indexOf.call(child.parentNode.children, child);
}



function toNextUnit(){

    orderToPlay.forEach((element)  => {
            element.turnOrder = element.turnOrder == 0?orderToPlay.length-1 : element.turnOrder-1 ;

            document.getElementById(element.position).children[0].textContent= `${ element.turnOrder}`;
    
    });
    

    orderToPlay.push(orderToPlay.shift());

    displayLog(`It's ${orderToPlay[0].Name} turn to play`);
    
    if(!orderToPlay[0].isPlayer)
    {        
        // Ennemy play
    }

}

function Damage(amount,aoe){
    
    return () => {
        return DealDamage(amount, aoe);
    }
}

function DealDamage(amount,aoe){

    orderToPlay.forEach(element => {    
        // for now only deal damage to enemy
        if(element.position == GetPositionBySide(aoe,false)){
            let hpLeft = element.takeDamage(amount+ orderToPlay[0].stats.atk );
            if(hpLeft == 0){
                orderToPlay.splice(element,1);
                document.getElementById(element.position).remove();                

            }else {
                displayLog(`${element.Name} now has ${hpLeft} HP`);
            }
        }
    });

    refreshHp();

}

function GetPositionBySide(pos,faction){
    
    if(faction){
        return `playerSide_${pos}`;

    } else {
        return `bossSide_${pos}`;

    }
}

function refreshHp(){

    orderToPlay.forEach((element)  => {
        document.getElementById(element.position).children[3].textContent= `${ element.stats.health}`;
});
}