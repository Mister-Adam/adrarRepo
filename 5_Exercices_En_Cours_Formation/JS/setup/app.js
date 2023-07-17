console.log('Bienvenue dans Javascript');
/**
 * **************************************
 * 1-SETUP : DEFER
 * **************************************
 ** Antérieur à la vague HTML5, l'attribut defer existait déjà dans les "anciennes" versions
 ** d'Internet Explorer. Il signifie que le navigateur 
 *! peut charger le(s) script(s) en parallèle, sans stopper le rendu de la page HTML.
 *! Contrairement à async, l'ordre d'exécution des scripts est préservé,
 *! en fonction de leur apparition dans le code source HTML. 
 *? Il est par ailleurs reporté à la fin du parsing du DOM (avant l'événement DOMContentLoaded).
 * De nos jours, cet attribut présente moins d'intérêt car les navigateurs
 * disposent par défaut de techniques internes pour télécharger les 
 * ressources en parallèle sans nécessairement attendre les autres.
 */

/**
 * **************************************
 * SETUP : ASYNC
 * **************************************
 * *Nouveau venu dans HTML5, async signifie que le script pourra être exécuté de façon asynchrone,
 ** dès qu'il sera disponible (téléchargé). Cela signifie aussi que le navigateur 
 ** n'attendra pas de suivre un ordre particulier si plusieurs balises <script> sont présentes,
 ** et ne bloquera pas le chargement du reste des ressources, notamment la page HTML. 
 *? L'exécution aura lieu avant l'événement load lancé sur window 
 *? et ne sera valable que pour les scripts externes au document, 
 *? c'est-à-dire ceux dont l'attribut src mentionne l'adresse.
 *? Ce comportement est bien pratique pour gagner en temps de chargement,
 *! il faut cependant l'utiliser avec prudence : si l'ordre n'est pas respecté,
 *! un fichier exécuté de façon asynchrone ne pourra attendre le chargement d'un précédent,
 *! par exemple s'il en utilise des fonctions voire un framework.
 *! Il ne faudra pas non plus compter appeler document.write() pour écrire dans le document HTML
 *! puisqu'il sera impossible de savoir à quel moment les actions seront déclenchées.
 */ 

let myString = "Yo";
let myInt = 666;
let myDec = 6.9;
let myArray = ["Jeff","bien","ou bien?"]
let myObject = {type:"Fiat", model:500, color:"white"};
let myBool = true;
console.log(myString,myArray,myInt,myDec,myObject,myBool);



function Calculate(a,b,calcul){
    let result = 0;

    switch (calcul) {
        case "sum":
            result = a+b;
            break;
        case "subtraction":
            result = a-b;
            break;
        case "multiplication":
            result = a*b;
            break;
        case "division":
            result = a/b;
            break;

        default:
            result = "Operation not known";
            break;
    }
    console.log(result);
}
Calculate(584845.4845,4684651,"division");

function Assignments(){

    let i = 0;
    i+=10;
    console.log(i);
    i-=9;
    console.log(i);
    i*=10;
    console.log(i);
    i/=10;
    console.log(i);

}
Assignments();

let order = {name:"Jeff", adress:"12, avenue de l'Europe" , date:"17-07-2023", pizzas:[[1,"Calzone"]], drinks:[[1,"Coca"]]}
let pizzeria = "\"La Pizzeria Raffinata \"";
let cringeJoke = "Qu'est ce qu'une pizza dit à une autre pizza qui lui demandait des conseils? \"Suis ta pate et tout ira bien\" "

function Order(strings, ...values){

    let str = '';
    strings.forEach((string, i) => {
        str += string + (values[i] || '');
    });
    return str;
}

const sentence = Order`Commande du ${order.date} \nBonjour cher ${order.name}, merci d'avoir passé commande chez ${pizzeria}.\nVotre commande est: ${order.pizzas[0][0]}x ${order.pizzas[0][1]} et ${order.pizzas[0][0]}x ${order.drinks[0][1]} 
\n${cringeJoke}`;
console.log(sentence);


// function SumUpOrderPhrase(order){

//     console.log(`Commande du ${order.date} \nBonjour cher ${order.name}, merci d'avoir passé commande chez ${pizzeria}.\nVotre commande est: ${order.pizzas[0][0]}x ${order.pizzas[0][1]} et ${order.pizzas[0][0]}x ${order.drinks[0][1]} 
//     \n${cringeJoke}`);  
// }
// SumUpOrderPhrase(order);
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function test(order) {
    var keys = Object.keys(order);
    return order[keys[getRandomInt(keys.length)]];
};
console.log(test(order));


let dude = "Jeff";
let age = 42;
let passions = ["Coding","Memes"];

let tabUser = [dude,age,passions];

console.log(`${tabUser[2]}`);
console.log(`${tabUser[2][1]}`);

let laPhrase = [];
laPhrase.push("Bezos","Jeff","BJ");
console.log(laPhrase);


