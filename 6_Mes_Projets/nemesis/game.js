/* 
Need:

game state.
deck 
put units in playerdeck and in enemypool





*/

import * as Entity from './classes/entity.js';
import * as Abilities from './classes/abilities.js';


// console.log(player.getCharacter(),enemy.getCharacter());

let treant = new Entity.Unit("Treant","",5,3,"",1);
let ghoul = new Entity.Unit("Ghoul","",5,3,"",0);
// console.log(treant.getUnit(),ghoul.getUnit());


let frostStrike = new Abilities.Power("Frost Strike","","",1);
// console.log(frostStrike.getPower());
let sarments = new Abilities.Spell("Sarments","","",2);

let playerDeck = [treant,treant,sarments];
let enemyDeck = [ghoul,frostStrike];

let player = new Entity.Character("Malfurion","30","",playerDeck,true);
let enemy = new Entity.Character("Lich King","30","",enemyDeck,false);

console.log(player);
console.log(enemy);


