class Entity {

    constructor(entityName,sprite,health){
        this.entityName = entityName;
        this.health = health;
        this.sprite = sprite;
    }
    
}


export class Character extends Entity {

    constructor(characterName,sprite,health,baseDeck,isPlayer){
        super(characterName,sprite,health);
        this.baseDeck = baseDeck;
        this.isPlayer = isPlayer;
    }

    getCharacter(){
        return {name:this.entityName, sprite : this.sprite, health :this.health, baseDeck:this.baseDeck, isPlayer :this.isPlayer }
    }

}


export class Unit extends Entity {

    constructor(unitName,sprite,health,atk,abilityList,cost){
        super(unitName,sprite,health);
        this.atk = atk;
        this.abilityList = abilityList;
        this.cost = cost;
    }

    getUnit(){
        return {name:this.entityName, sprite : this.sprite, health :this.health, atk : this.atk, abilityList : this.abilityList, cost: this.cost}
    }

}


