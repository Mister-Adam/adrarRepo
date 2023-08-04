// / TODO 1: récupérer le titre h2 dans une variable apiDiv
// TODO 2-1: créer une variable contactAPI à laquelle on assigne une fonction fléchée
// TODO 2-2: dans la F =>, créer une variable data à laquelle on assigne la fonction fetch()
// TODO 2-3: fetch(), prend en param l'Url de l'API
// TODO 2-4: Faire un console.log de data
// TODO 3-1: Tjrs dans la F =>,créer une variable dataTransformed à laquelle on assigne data
// TODO 3-2: sur la variable data on utilise la fonction .json()
// TODO 3-3: Faire un console log de dataTransformed
// TODO 4-1: Tjrs dans la F =>,au InnerHTML de apiDiv, assigner la value dans dataTransformed
// TODO 5: on éxecute notre fonction contactAPI quelquepart dans notre programme


let apiDiv = document.getElementById("apiContact");
let contactAPI = async() => { 
    let  data =  await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m');
    
    console.log(data);

    let dataTransformed = await data.json();
    console.log(dataTransformed);

    // apiDiv.innerHTML = dataTransformed[0] ;
    for (const key in dataTransformed) {
        if (Object.hasOwnProperty.call(dataTransformed, key)) {
            apiDiv.innerHTML += `${key} : \n 
            ${dataTransformed[key].toString()} //\n`;            
        }
    }
    };

    contactAPI();