console.log("main loaded");

FBInstant.initializeAsync()
.then(function(){

    var progress=0;
    var interval = setInterval(() => {
        progress+=4;
        FBInstant.setLoadingProgress(progress);

        if(progress>=95){
            clearInterval(interval);
            FBInstant.startGameAsync()
            .then(function(){

                var playerID= FBInstant.player.getID();
                var playerName = FBInstant.player.getName();
                var playerPhoto = FBInstant.player.getPhoto();

                console.log("game has been started");
                console.log(playerID + " "+ playerName+" "+playerPhoto);
            });
        }
    }, 100);

    

    console.log("loading");
})