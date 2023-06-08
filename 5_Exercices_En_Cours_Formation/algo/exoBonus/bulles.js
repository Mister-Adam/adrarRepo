// Le but est de trier un tableau nous-même (il faut mettre les éléments du plus petit au plus grand). Pour cela, on va procéder en plusieurs étapes :
let a = [3,1,4,9,4,6,8,7,15,26846,162,1646,16,4];

// Étape 1 : écrire une fonction qui reçoit un tableau et un numéro de case (i). Son but est d'échanger les valeurs des cases i et i+1 si celles-ci ne sont pas dans le bon ordre.
function switcheroo(array, i){
    if(array.length>i-1){
        if(array[i]>array[i+1]){
            let temp = array[i+1];
            array[i+1] = array[i];
            array[i] = temp;
        }
    }    
    return array;
}

// Étape 2 : écrire une fonction qui reçoit un tableau et qui applique l'étape 1 sur toutes les cases successives (cases 0/1, cases 1/2, cases 2/3, ..., cases avant-dernière/dernière).
function switcherooLoop(array){

    for (let i = 0; i < array.length; i++) {
        switcheroo(array,i);
    }

    return array;
}



// Étape 3 : écrire une fonction qui reçoit un tableau et qui le trie en appelant la fonction 2 autant de fois qu'il y a d'éléments dans le tableau.

// function ultimateSwitcheroo(array){
//     switcherooLoop(switcherooLoop(array));  
//     return array;
// }
console.log(switcherooLoop(a));





// Note : on peut visualiser cet algorithme sur cette image <https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/211162/a9b17b54-b6dd-1602-be04-6fc125676b7a.gif>.