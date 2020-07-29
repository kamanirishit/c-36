var database,canvas,playerCount,form,player,game,gameState;
var allPlayer=[];
var distance;
function setup(){
    canvas=createCanvas(500,500);
    database=firebase.database();
    gameState=0;
    game=new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");
   if(playerCount===4){
       game.update(1);

   }
   if(gameState===1){
       clear();
       game.play();
   }
}