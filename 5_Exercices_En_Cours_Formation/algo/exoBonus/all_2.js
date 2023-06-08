// Exercice all2_1 :	écrire une fonction qui retourne **la position** du plus grand élément d'un tableau.
// Exemple : position_biggest([4,7,5,5,6]) retourne 1 car le plus grand est dans la case numéro 1
function biggestPos(array){
    let a = array[0];
    let pos = 0;
    for (let i = 0; i < array.length; i++) {
        if(array[i] > a){
            a = array[i];
            pos = i;
        }
    }

    return pos;
}

// Exercice all2_2 : écrire une fonction qui fait la somme de tous les éléments d'un tableau.
function sumAllInArray(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++) {        
        sum += array[i];
    }

    return sum;
}


// Exercice all2_3 : écrire une fonction qui retourne la somme des valeurs positives d'une liste.

function positiveSumInArray(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++) {   
        if(array[i]>=0){
            sum += array[i];
        }
    }

    return sum;
}

// Exercice all2_4 : En utilisant les deux fonctions précédentes, écrire une fonction qui retourne la somme des valeurs négatives d'une liste.

function trickedSum(array){

    return sumAllInArray(array)-positiveSumInArray(array);
}

console.log(trickedSum([4,-7,5,-5,6]));
