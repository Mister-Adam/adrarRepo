let array = [5,40,5,19];

// Écrire une fonction qui prend un tableau en entrée et affiche le dernier élément de ce tableau.
function displayLastElementArray(array){
        console.log(array[array.length-1]);  
}

// Écrire une fonction qui prend un tableau en entrée et retourne le dernier élément de ce tableau.
function returnLastElementArray(array){
    return array[array.length-1];  
}

// Écrire une fonction qui prend en entrée un tableau et qui retourne le minimum de ce tableau.
function returnMinElementArray(array){
    let minValue;    
    for (let i = 0; i < array.length; i++) {
        if(minValue == undefined && i == 0) minValue = array[0];
        minValue = array[i]<= minValue? array[i] : minValue;        
    }
    return minValue;  
}


// Écrire une fonction qui prend en entrée un tableau et qui retourne le maximum de ce tableau.
function returnMaxElementArray(array){
    let maxValue;    
    for (let i = 0; i < array.length; i++) {
        if(maxValue == undefined && i == 0) maxValue = array[0];
        maxValue = array[i]>= maxValue? array[i] : maxValue;        
    }
    return maxValue;  
}


// [Plus difficile - bonus] Écrire une fonction qui prend en entrée un tableau de nombres positifs et qui retourne la deuxième plus grande valeur du tableau.
function return2dMaxPositiveElementArray(array){
    let maxValue; 
    let secondMax; 
    for (let index = 0; index < array.length; index++) {
        if(array[index] < 0){
            console.log(array[index], "isn't positive!");
        } else {
            if(maxValue == undefined && index == 0) maxValue = array[0];
            if(secondMax == undefined && index == 0) secondMax = array[0];
                        
            maxValue = array[index] >= maxValue? array[index] : maxValue;
        
            if(array[index] >= secondMax){
                if(array[index] < maxValue){
                    secondMax = array[index];
                }
            }
        
        }   
    }       
    return secondMax;  
}


// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne le nombre de fois que ce nombre apparaît dans le tableau.
function checkForNumberOccurence(array,n){
    let a = 0;
    for (let index = 0; index < array.length; index++) {
        a = array[index] == n ? a + 1 : a;
        
    }
    return a;
}
// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne true si le nombre existe dans le tableau, false sinon.
function checkForNumber(array,n){
    for (let index = 0; index < array.length; index++) {
        if(array[index] == n){
            return true;
        }        
    }
    return false;
}


// [Bonus] Suite de l'exo : on **sait** que le tableau reçu est trié (on ne le vérifie pas). Comment exploiter cette information pour améliorer la recherche d'un élément ?



// Créer un tableau qui contient [1,2,3,...,7777].
let array2 = [];

function fillArray(array,length,p=1){
    array.splice(0,array.length);
    for (let index = 0; index < length; index++) {
        array.push((index+1)*p);        
    }
}
fillArray(array2,7777);
// console.log(array2);

// Créer un tableau qui contient [10,20,30,...,77770].
fillArray(array2,7777,10);
// console.log(array2);
// En se servant du tableau précédent, créer un tableau qui contient [5,10,15,...,38885].
function divideValuesInArray(array,factor){
    for (let index = 0; index < array.length; index++) {
        array[index] /= factor;    
    }
}
divideValuesInArray(array2,2)
// console.log(array2);


let test = [1,45,88,54,23,-100,12];
// Écrire une fonction qui prend un tableau en entrée et qui en supprime les dernières valeurs, tant qu'elles sont inférieures à 50.
function removeValuesFromEndIfInfValue(array,value){

    while(array[array.length-1] < value){
        array.pop();  
        // if(index<0)break;
    }

    return array;
}
console.log(removeValuesFromEndIfInfValue(test,50)); // doit afficher [1,45,88,54]
// console.log(leNomDeVotreFonction([1,45,88,54,23,-100,12]); // doit afficher [1,45,88,54]