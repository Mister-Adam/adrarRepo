// alert("Trkl ou quoi?");
setPos(300,300);
setLineWidth(10);



//A1
// changeColor(color.red);
// forward(200);
// faceRight();
// forward(100);


// A2
// changeColor(color.yellow);
// faceLeft();
// forward(100);
// faceDown();
// forward(100);
// faceRight();
// forward(200);
// faceUp();
// forward(200);

// A3
// changeColor(color.orange);
// faceLeft();
// forward(100);
// backward(200);
// forward(100);
// faceUp();
// forward(100);
// backward(200);

// A4
// changeColor(color.green);
// setPos(100,500);
// faceRight();
// forward(200);
// arcLeft(100,180);
// forward(100);
// arcRight(100,180);
// forward(200);

// A5
// setPos(300,100);
// changeColor(color.fuchsia);
// faceRight();
// arcRight(200,180);
// arcRight(200,180);
// arcRight(100,180);
// arcLeft(100,180);

// A6
// setPos(300,500);
// changeColor(color.aqua);
// faceUp();
// forward(100);
// up();
// forward(100);
// down();
// forward(200);

// A7
// setPos(150,300);
// changeColor(color.green);
// function magic() {
//     forward(200);
//     arcLeft(100,180);
//     forward(100);
// }
// magic();
// up();
// forward(100);
// down();
// magic();

// A8
// setPos(200,200);
// changeColor(color.fuchsia);
// faceUp();
// forward(100);
// faceRight();
// forward(200);
// faceDown();
// forward(400);
// faceLeft();
// forward(100);
// up();
// forward(100);
// faceUp();
// forward(100);
// down();
// forward(100);


function setup(posX, posY, color, face) {
    setPos(posX,posY);
    changeColor(color);
    switch(face)
    {
        case 'U':
            faceUp();
            break;
        case 'D':
            faceDown();
            break;
        case 'L':
            faceLeft();
            break;
        case 'R':
            faceRight();
            break;
        default :
            faceDown();
            break;
    }
}

// A9
// setup(100,500,color.aqua,'R');
// arcLeft(100,180);
// arcRight(100,180);
// forward(400);
// arcRight(100,180);
// arcLeft(100,180);
// faceLeft();
// forward(400);

// A10
// setup(200,500,color.red,'R');
// arcLeft(100,180);
// changeColor(color.green);
// arcLeft(200,180);
// changeColor(color.yellow);
// arcLeft(400,180);

// A11

// setup(50,250,color.aqua,'U');
// arcRight(100,180);
// faceRight();
// up();
// forward(100);
// faceUp();
// down();
// arcRight(100,180);
// up();
// faceLeft();
// forward(50);
// faceDown();
// forward(100);
// changeColor(color.fuchsia);
// down();
// arcRight(200,180);

// A12
// setup(25,250,color.green,'U');
// arcRight(100,180);
// forward(200);
// arcLeft(100,180);
// up();
// arcRight(50,180);
// changeColor(color.orange);
// down();
// arcLeft(100,180);
// forward(200);
// arcRight(100,180);



function loop (i, func, args){
   
        for (let index = 0; index < i; index++) {
        
        func(args);
        
        }    
}

// B1
function stairTest() {
    forward(100);
    faceDown();
    forward(100);
    faceRight();
}

// setup(25,150,color.green,'R');
// loop(4,stairTest);

// B2
// function castleTest(fw) {
//     faceUp();
//     forward(fw);
//     faceRight();
//     forward(fw);
//     faceDown();
//     forward(fw);
//     faceRight();
//     forward(fw);
// }

// setup(25,300,color.red);
// loop(4,castleTest,100);

// B3
function drawSquare(length, toLeft){
    for (let index = 0; index < 4; index++) {
        
        forward(length); 
        if(toLeft == true){left(180-90);}
        else{right(180-90);}
        
    }
}

// setup(300,300,color.fuchsia,'R');
// drawSquare(200, true);

// B4
function drawTriangle(length, toLeft){
    
    for (let index = 0; index < 3; index++) {
        
        forward(length); 
        if(toLeft == true){left(180-60);}
        else{right(180-60);}
        
    }
}

// setup(300,300,color.aqua,'R');
// drawTriangle(200);

// B5
// setup(300,400,color.orange,'U');
// forward(200);
// changeColor(color.red);
// drawTriangle(100,false);

// B6
function drawStair(steps,length,goesUp,c){
    
    if(c !== undefined ) {changeColor(c);}
    
    for (let index = 0; index < steps; index++) {
        faceRight();
        forward(length);
        if(goesUp == true) {faceUp();}
        else {faceDown();}   
        forward(length);     
    }
}

// setup(100,400,color.red,'R');
// drawStair(2,100,true,color.red);
// drawStair(3,100,false,color.green);

// B7
// setup(300,300,color.orange,'R');
// drawSquare(200,false);
// drawTriangle(200,true);

// B8
function drawStar(length){

    loop(8,function (){forward(length); left(180-45);}) // need change rotation
}

// setup(300,300,color.yellow,'R');
// drawStar(400);

// B10
// setup(50,300,color.aqua,'R');
// drawStar(200);
// up();
// changeColor(color.yellow);
// forward(400); // need change rotation
// down();
// drawStar(400);


// C6
// setup(300,400,color.yellow,'R');
// for (let index = 0; index < 3; index++) {
//     for (let index = 0; index < 4; index++) {

//         left(180-60);
//         forward(200); 
                
//     }
    
//     left(180-60);
// }

// C12
function drawPetals(n){
    for (let index = 0; index < n; index++) {
        for (let j = 0; j < 2; j++) {
            arcLeft(100,90);
            forward(100);
            left(180-90);            
        }
        arcRight(100,45); 
    }
}

function drawMoon(){
    changeColor(color.aqua);
    loop(2, function(){ arcRight(100,90);})
    left(180-60);
    loop(2, function(){ arcLeft(200,150);})    
}

// setup(400,400,color.yellow,'R');
// drawPetals(4);
// drawMoon();

// C5
// setup(400,400,color.yellow,'R');
// for (let index = 0; index < 4; index++) {    
//     drawStar(400);
//     shiftColor(1/4);
//     right(90);
// }

// E666
function drawCircle(r){

    arcLeft(r,360);
}

function drawPentagram(length){

    
    faceRight();
    right(180-145);
    changeColor(color.red);    
    drawCircle(105);    
    left(180-108);  
    for (let index = 0; index < 5; index++) {       
        
        forward(length);
        left(180-36.6);
    } 
}



setup(300,300,color.red,'R');
// drawPentagram(200,100);

forward(100);
// drawSquare(100,true);




