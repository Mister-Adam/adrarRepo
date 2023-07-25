class Ability{
    constructor (Name,sprite,effect,aoe){
        this.Name = Name;
        this.sprite = sprite;
        this.effect = effect;
        this.aoe = aoe;
    }

}


export class Power extends Ability{

    constructor (Name,sprite,effect,aoe,delay){
        super(Name,sprite,aoe,effect);
        this.delay = delay;
        
    }

    getPower(){
        return {name : this.Name, sprite:this.sprite,delay:this.delay,effect:this.effect, aoe:this.aoe };
    }

}

export class Spell extends Ability{

    constructor (Name,sprite,effect,aoe,cooldown){
        super(Name,sprite,aoe,effect);
        this.cooldown = cooldown;        
    }

    getSpell(){
        return {name : this.Name, sprite:this.sprite,cooldown:this.cooldown,effect:this.effect, aoe: this.aoe };
    }

}





