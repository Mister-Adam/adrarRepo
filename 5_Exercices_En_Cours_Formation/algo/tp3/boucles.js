// Exercice 1 : écrire 50 fois "Bonjour" dans la console.
// TODO

console.log("Exercice 1");
for(let i=0; i<50;i++){console.log("Bonjour");}

// Exercice 2 : écrire dans la console :
// A
// B
// A
// B
// A
// B
// A
// B
// A
// B

// TODO
console.log("Exercice 2");
for(let i=0; i<10;i++){
    if(i%2==0) {
        console.log("A");
    } else { 
        console.log("B");
    }
}

// Exercice 3 : écrire dans la console :
// A
// A
// A
// A
// A
// B
// A
// A
// A
// A
// A
// B
// A
// A
// A
// A
// A
// B
console.log("Exercice 3");
// TODO
for(let i=1; i<19;i++)
{
    if(i%6 != 0){
        console.log("A");
    } else {
        console.log("B");
    }
}


// Exercice 4 : écrire dans la console :
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
console.log("Exercice 4");
// TODO
for(let i =0; i<10;i++){
    console.log(i);
}
// Exercice 5 : écrire dans la console :
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
console.log("Exercice 5");
// TODO

for(i =3; i < 13; i++){
    console.log(i);
    
}
// Exercice 6 : écrire dans la console :
// 0
// 1
// 2
// 3
// 0
// 1
// 2
// 3
// 0
// 1
console.log("Exercice 6");
// TODO
function exo6(){
    let a = 0;
    for(let i = 0; i<4; i++){
    
        for (let j = 0; j < 4; j++) {
            a++;
            if(a<=14){
                console.log(j);
            }            
        }
    }
}
exo6();

// Exercice 7 : écrire dans la console :
// 0
// 1
// 2
// 3
// 4
// A
// A
// A
// 8
// 9
console.log("Exercice 7");
// TODO
function exo7(){
    for(let i = 0; i<10; i++){
            
        if(i == 5 || i == 6 || i == 7){
            console.log("A");
        } else {
            console.log(i);
        }
        
    }
}
exo7();

// Exercice 8 : écrire dans la console :
// 100
// 1
// 2
// 103
// 4
// 5
// 106
// 7
// 8
// 109
console.log("Exercice 8");
// TODO
function exo8(){
    
    for(let i = 0; i<10; i++){
            
        if(i%3 == 0){
            console.log(i+100);
        } else {
            console.log(i);
        }
        
    }
}
exo8();
// Exercice 9 : écrire dans la console :
// 0
// 101
// 202
// 3
// 104
// 205
// 6
// 107
// 208
// 9
console.log("Exercice 9");
// TODO
function exo9(){
    let a = 0;
    for(let i = 0; i<10; i++){
            
        if(i%3 == 0 ){
            a = i;
        } else {
            a+= 100;            
        }

        console.log(a);
        a++;
        
        if(a>200){
            a = i;
        }        
    }   
}
exo9();
// Exercice 10 : écrire dans la console tous les résultats possibles de lancers de deux dés :
// 1 1
// 1 2
// 1 3
// ...
// 6 4
// 6 5
// 6 6
console.log("Exercice 10");
// TODO
function exo10(){
    
    for (let i = 1; i < 7; i++) {        
        for (let j = 1; j < 7; j++) {
            console.log(i , j);            
        }        
    }    
}
exo10();
// Exercice 11 : adapter l'exercice précédent pour enlever les doublons (on ne veut pas afficher 1 2 et 2 1, mais seulement l'un des deux).
console.log("Exercice 11");
// TODO
function exo11(){
    
    for (let i = 1; i < 7; i++) {        
        for (let j = 1; j < 7; j++) {
            if(i < j || i == j){
                console.log(i , j);
            }
        }        
    }    
}
exo11();
// Exercice 12 : en prenant des dés à 20 faces, combien de résultats différents (sans doublon) peut-on afficher ? (Autrement dit : adapter le code précédent pour compter les résultats au lieu de les afficher)
console.log("Exercice 12");
// TODO
function exo12(){
    
    // for (let i = 1; i < 7; i++) {        
    //     for (let j = 1; j < 7; j++) {
    //         if(i < j || i == j){
    //             console.log(i + " " + j);
    //         }
    //     }        
    // }    
}
exo12();
// Exercice 13 : afficher la table de multiplication de 1 (de 1 à 9):
// 1x1 = 1
// 1x2 = 2
// 1x3 = 3
// 1x4 = 4
// 1x5 = 5
// 1x6 = 6
// 1x7 = 7
// 1x8 = 8
// 1x9 = 9
console.log("Exercice 13");
// TODO
function exo13(){
    
    for (let i = 1; i < 10; i++) {        
        console.log("1x" + i +" = " +i);
    }    
}
exo13();
// Exercice 14 : que faut-il modifier du code précédent pour obtenir la table de 2 :
// 2x1 = 2
// 2x2 = 4
// 2x3 = 6
// 2x4 = 8
// 2x5 = 10
// 2x6 = 12
// 2x7 = 14
// 2x8 = 16
// 2x9 = 18
console.log("Exercice 14");
// TODO
function exo14(){
    for (let i = 1; i < 10; i++) {        
        console.log(2 +"x" + i +" = " + (2*i));
    }    
}
exo14();
// Exercice 15 : comment généraliser pour afficher toutes les tables de multiplication de 1 à 9 :
// 1x1 = 1
// 1x2 = 2
// 1x3 = 3
// 1x4 = 4
// ...
// 9x7 = 63
// 9x8 = 72
// 9x9 = 81
console.log("Exercice 15");
// TODO
function exo15(){

    for (let i = 1; i < 10; i++) {        
        for (let j = 1; j < 10; j++) {
            console.log(i +"x" + j +" = " + (j*i));            
        }        
    }   
}
exo15();

// Exercice 16 : calculer 1+2+3+4+...+99+100. (Vous devriez trouver 5050)
console.log("Exercice 16");
// TODO
function exo16(){
    let a = 0;
    for (let i = 1; i < 101; i++) {        
        a += i;
    }   
    console.log(a);
}
exo16();

// Exercice 17 : trouver le nombre n tel que 1+2+3+4+5+...+(n-1)+n = 302253
console.log("Exercice 17");
// TODO
function exo17(){
    let a = 1;
    let i = 1;
    while (a<302253) {        
        a += i;
        i++;
    }   
    console.log(i);
}
exo17();
// Exercice 18 : Afficher :
// 1 
// 1 
// 2 
// 3
// 5
// 8
// 13
// 21
// 34
// 55
console.log("Exercice 18");
// TODO
function exo18(){
    let a = 1;
    let b = 1;
    for (let i = 1; i < 11; i++) {
        
        if(i<=2){            
            console.log(a);
        
        } else if(a<=b) {

            console.log(a+b);
            a = a+b;            
            
        } else {
            console.log(a+b);
            b = a+b;
        }
        
        
        
    }
    
}
exo18();
// Exercice 19 : compter combien il y a de nombres multiples de 3 ou de 7 entre 1234 et 5678
console.log("Exercice 19");
// TODO
function exo19(){
    let a = 0;
    for (let i = 1234; i < 5678-1234; i++) {
        if(i%3 == 0 || i%7 == 0){
            a++;
        }        
    }

    console.log(a);
}
exo19();
// Exercice 20 : afficher dans la console :
/*
*
**
***
****
*****
*/
console.log("Exercice 20");
// TODO
function exo20(){
    let t = "";
    for (let i = 0; i < 7; i++) {

        if(i>0 && i<6){
            t = "";
            for (let j = 0; j < i; j++) {
                t += "*";                
            }
            
        } else if(i == 0){
            t = "/*";
        } else {
            t = "*/";
        }  
        console.log(t);   
    }
    
}
exo20();
// Exercice 21 : afficher dans la console :
/*
    *
   **
  ***
 ****
*****
*/
console.log("Exercice 21");
// TODO
function exo21(){
    let t = "";
    for (let i = 0; i < 7; i++) {

        if(i>0 && i<6){
            t = "";
            for(let j = 0; j< 5 - i;j++){
                t += " ";
            }
            for (let k = 0; k < i; k++) {
                
                t += "*";                
            }
            
        } else if(i == 0){
            t = "/*";
        } else {
            t = "*/";
        }  
        console.log(t);   
    }
    
}
exo21();

// Exercice 22 : afficher dans la console :
/*
    *
   ***
  *****
 *******
*********
*/
console.log("Exercice 22");
// TODO
function exo22(){
    let t = "";
    for (let i = 0; i < 7; i++) {

        if(i>0 && i<6){
            t = "";
            for(let j = 0; j< 5 - i;j++){
                t += " ";
            }
            for (let k = 0; k < i; k++) {
                
                t += "*";                
            }
            for (let l = 1; l < i; l++) {
                
                t += "*";                
            }
            for(let m = 0; m< 4 - i;m++){
                t += " ";
            }

            
        } else if(i == 0){
            t = "/*";
        } else {
            t = "*/";
        }  
        console.log(t);   
    }
    
}
exo22();
// Exercice 23 : afficher dans la console :
/*
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
*/
console.log("Exercice 23");
// TODO
function exo23(){
    let t = "";
    for (let i = 0; i < 12; i++) {

        if(i>0 && i<6){
            t = "";
            for(let j = 0; j< 5 - i;j++){
                t += " ";
            }
            for (let k = 0; k < i; k++) {
                
                t += "*";                
            }
            for (let l = 1; l < i; l++) {
                
                t += "*";                
            }
            for(let m = 0; m< 4 - i;m++){
                t += " ";
            }
            
        } else if (i>5 && i<11){ 
            t = "";
            
            for(let j = 0; j< 12-i-5;j++){
                t += " ";
            }
            for (let k = 0; k < 12-i-3; k++) {
                
                t += "*";                
            }
            for (let l = 0; l < 12-i-2; l++) {
                
                t += "*";                
            }
            for(let m = 0; m< 12-i-3;m++){ // not good
                t += " ";
            }

        }else if(i == 0){
            t = "/*";
        } else {
            t = "*/";
        }  
        console.log(t);    
    }
    
}

exo23();
