class Entity {

    constructor(Name,sprite,stats,abilities){
        this.Name = Name;
        this.stats = stats;
        this.sprite = sprite;
        this.abilities = abilities;
        this.turnOrder = 0;
        this.position = "";
    }

    takeDamage(amount){  
        let hp = this.stats.health ;
        hp -= amount;

        if(hp <= 0){
            this.stats.health = 0;
            return 0;
        }
        else {
            this.stats.health = hp;
        }
        return this.stats.health; // final amount to be displayed on
    }

    
}


export class Boss extends Entity {

    constructor(Name,sprite,stats,summons,abilities){
        super(Name,sprite,stats,abilities);
        this.summons = summons;
    }

    getBoss(){
        return {name:this.Name, position: this.position, isPlayer: false, turnOrder:this.turnOrder,sprite : this.sprite, stats :this.stats, summons:this.summons, abilities :this.abilities }
    }

}


export class Unit extends Entity {

    constructor(Name,sprite,stats,abilities,isPlayer){
        super(Name,sprite,stats,abilities);
        this.isPlayer = isPlayer;
    }

    getUnit(){
        return {name:this.Name, position: this.position, turnOrder:this.turnOrder,sprite : this.sprite, stats :this.stats, abilities : this.abilities,isPlayer : this.isPlayer}
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