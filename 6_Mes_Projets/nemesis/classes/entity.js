class Entity {

    constructor(Name,sprite,stats,abilities){
        this.Name = Name;
        this.stats = stats;
        this.sprite = sprite;
        this.abilities = abilities;
    }
    
}


export class Boss extends Entity {

    constructor(Name,sprite,stats,summons,abilities){
        super(Name,sprite,stats,abilities);
        this.summons = summons;
    }

    getBoss(){
        return {name:this.Name, sprite : this.sprite, stats :this.stats, summons:this.summons, abilities :this.abilities }
    }
}


export class Unit extends Entity {

    constructor(Name,sprite,stats,abilities,isPlayer){
        super(Name,sprite,stats,abilities);
        this.isPlayer = isPlayer;
    }

    getUnit(){
        return {name:this.Name, sprite : this.sprite, stats :this.stats, abilities : this.abilities,isPlayer : this.isPlayer}
    }

}


export class Party{

    constructor(members){
        this.members = members;
    }

    getMembers(){
        return {partyMembers :this.members}
    }

}


export class Stats{

    constructor(health,atk,def,speed){
        this.health = health;
        this.atk = atk;
        this.def = def;
        this.speed = speed;

    }

    getStats(){
        return {health :this.health,atk :this.atk,def :this.def,speed :this.speed,}
    }



}