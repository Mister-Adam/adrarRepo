export class Ability{
    constructor (Name,sprite,effect,aoe,delay,cooldown){
        this.Name = Name;
        this.sprite = sprite;
        this.effect = effect;
        this.delay = delay;
        this.cooldown = cooldown;
    }
    getAbility(){
        return {name : this.Name, sprite:this.sprite,delay:this.delay,effect:this.effect, delay:this.delay,cooldown:this.cooldown  };
    }


    

    
    
}


// function DealDamage(amount,aoe){

//     orderToPlay.forEach(element => {
//         if(element.position == aoe){
//             element.stats.health -= amount;
//             refreshHp();
//         }
//     });
// }