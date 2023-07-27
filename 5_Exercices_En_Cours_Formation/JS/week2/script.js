
let monTxt=document.querySelector("textarea");

let rendu = document.getElementById("formRender");
monTxt.addEventListener("keydown", function() { 
    rendu.innerHTML = monTxt.value;
});





let btn = document.querySelector("button")
monTxt.addEventListener("keypress", function() { 

    btn.disabled = monTxt.value.length > 5? true : false;

})


let monForm=document.querySelector("form");
monForm.addEventListener("submit", function(event) { 

    event.preventDefault();
    console.log(event);
    console.log('Formulaire envoyé');

    monForm.reset();

})




// let monTitre = document.querySelector("h2");
// setTimeout(()=> {monTitre.style.backgroundColor = "red";
// monTitre.textContent="Au Choix"},1000);


let monTitre = document.querySelector("h3");
let timer = 3;
monTitre.addEventListener("click", ()=> {
    monTitre.textContent = timer
    let countDown = setInterval( () =>{

        // if(timer>0){
        //     timer--;
        //     monTitre.textContent = timer;
        // } else {
        //     clearInterval(countDown); 
        //     monTitre.textContent = "It's DONE";
        // }
        
        timer>0? test(): test2(countDown) ;
    }        
        ,1000);
});

function test(){

    timer-- ; 
    monTitre.textContent = timer;
}

function test2(countDown){

    clearInterval(countDown); 
    monTitre.textContent = "It's DONE";
}


