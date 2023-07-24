class Ability{
    constructor (abilityName,sprite,effect,cost){
        this.abilityName = abilityName;
        this.sprite = sprite;
        this.effect = effect;
    }

}


export class Power extends Ability{

    constructor (powerName,sprite,effect,delay){
        super(powerName,sprite,effect);
        this.delay = delay;
        
    }

    getPower(){
        return {name : this.abilityName, sprite:this.sprite,delay:this.delay,effect:this.effect };
    }

}

export class Spell extends Ability{

    constructor (spellName,sprite,effect,cost){
        super(spellName,sprite,effect);
        this.cost = cost;        
    }

    getSpell(){
        return {name : this.abilityName, sprite:this.sprite,cost:this.cost,effect:this.effect };
    }

}





