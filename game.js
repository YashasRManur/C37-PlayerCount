class Game{
    constructor(){}
    getState(){
        var gamestateref = database.ref('gameState');
        gamestateref.on("value",function(data){
            gameState = data.val();
        })


    }

    update(state){
        database.ref('/').update({
            gameState :state

        })

    }

   async  start(){
        if(gameState === 0){
            player = new Player();
            var playercountref = await database.ref('playerCount').once("value");
            if(playercountref.exists()){
                playerCount = playercountref.val();
                player.getCount();

            }
            form = new Form()
            form.display();
        }

    }

    play(){
        form.hide();
        textSize(30);
        text("Game Starts Now",120,200);
    }
}