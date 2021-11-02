var punch,stand;
var player,player2,ground, damage1, damage2;

function preload(){
   stand = loadAnimation("Imgs/1.png","Imgs/2.png","Imgs/3.png","Imgs/4.png","Imgs/35.png","Imgs/36.png","Imgs/37.png","Imgs/38.png")
   //punch = loadAnimation("Imgs")
}

function setup(){
    createCanvas(windowWidth, windowHeight)
    player = createSprite(150,height-20, 50, 50)
    player2 = createSprite(width - 100,height-30, 50, 50)
    player.addAnimation("standing", stand);
    player.scale = 0.2;
    player2.scale = 0.2;
    player.setCollider("rectangle", 0, 0, 300,300);

    ground = createSprite(width/2, height - 15, width, 15)
    
}


function draw(){
    background(255);
    player.debug = true;
    if(keyDown('e')){
        //console.log("this works")
         
        

    }

    if(keyDown('d')){
        //console.log("this works")
        player.x += 5;
    }
    if(keyDown('a')){
        //console.log("this works")
        player.x += -5;
    }   
    if(keyDown('w') && player.y >= 480){
        //console.log("this works")
        player.velocityY = -10;
    }
        
    if(keyDown('right')){
        //console.log("this works")
        player2.x += 5;
    }
    if(keyDown('left')){
        //console.log("this works")
        player2.x += -5;
    }   
    if(keyDown('up') && player2.y >= 490)
    {
        //console.log("this works")
        player2.velocityY = -10;
    }
    player.velocityY += 0.8;
    player2.velocityY += 0.8;

    player.collide(ground);
    player2.collide(ground);
    console.log(player.y);





    drawSprites();

}


