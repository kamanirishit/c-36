class Game{
    constructor(){

    }
    getState(){
  var gameStateref=database.ref("gameState");
  gameStateref.on("value",function(data){
      gameState=data.val();
  })
    }
    update(state){
     database.ref("/").update({
      gameState:state
     })
    }
    async start(){
        if(gameState===0){
            player=new Player();
            var playerCountref=database.ref("playerCount").once("value")
            if(playerCountref.exists()){
                playerCount=playercountref.val();
                player.getCount();
            }
            
            form=new Form();
            form.display();     
        }
    }
    play(){
        form.hide();
        textSize(35);
        text("Game Start",120,100);
        Player.getplayerinfo();
        if(allPlayer!==undefined){
            var displayposition=130;
            for(var plr in allPlayer){
                if(plr==="player"+player.index){
                    fill("red");
                }
                else{
                    fill("black");
                }
                displayposition+=20
                textSize(15);
                text(allPlayer[plr].name+":"+allPlayer[plr].distance,120,displayposition)
            }
        }
        if(keyIsDown(UP_ARROW)&& player.index===4){
            player.distance+=100;
            player.update();
        }
    }
}