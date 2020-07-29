class Form{
    constructor(){
        this.inp=createInput("Name");
         this.button=createButton("Play");
        this.greeting=createElement("h3");
        this.title=createElement("h2");
        
    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.inp.hide();
    }
    display(){
        
        this.title.html("Multiplayer Car Racing Game");
        this.title.position(130,0);
        
        this.inp.position(130,160);
        this.button.position(250,200);
        this.button.mousePressed(()=>{
            this.inp.hide();
            this.button.hide();
            player.name=this.inp.value();
            playerCount+=1
            player.index=playerCount
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello "+name);
            this.greeting.position(130,160);
        })
    }
}