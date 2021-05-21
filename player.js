class Player{
    constructor(){

    }
    getCount(){
        var playercountref = database.ref('playerCount');
        playercountref.on("value",(data)=>{
            playerCount = data.val();
        })
    }

    updateCount(count){
        database.ref('/').update({
            playerCount : count
        })
    }
}   