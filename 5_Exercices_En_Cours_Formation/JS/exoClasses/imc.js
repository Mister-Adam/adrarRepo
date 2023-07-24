class Imc{

    constructor (userName,userWeight,userHeight){

        this.userName = userName;
        this.userWeight = userWeight;
        this.userHeight = userHeight;
        this.userImc = this.imcCalcul();

    }

    imcCalcul(){
        return (this.userWeight / (Math.pow(this.userHeight,2))).toFixed(2);
    }

    display(){
        console.log(` ${this.userName} (${this.userWeight} kg, ${this.userHeight} M) a un IMC de: ${this.userImc}`);
    }


}


//* progr principal -> injection des données
let list = [
    new Imc("Sébastien Chabal", 135, 1.7),
    new Imc("Escaladeuse", 45, 1.68),
    new Imc("JOJO ", 300, 2),
    new Imc("Gontrand ", 90, 1.75),
    new Imc("Colonel Clock ", 200, 1.75),
    new Imc("JOsiane de la Vega", 99, 1.55),
];
//*Boucle forEach qui parcourt le tableau avec une variable temporaire uneCase
// list.????((uneCase) => uneCase.display());

list.forEach((x)=> x.display());

