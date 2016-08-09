function getDefaultPlayerData()
{
    var result = 
    {
        honor: 100,
		league: 1,
		division: 1,
		startedMatch: null
    };
    
    return result;
};



function load()
{
    var playerDataList = Spark.runtimeCollection("playerData");
    var playerID = Spark.getPlayer().getPlayerId();
    var playerData = playerDataList.findOne({"playerID": playerID}); 
    
    var result =  
    {
        playerID: playerID,
        playerData: playerData,
    };
    
    return result;
}

function save(record)
{
    var playerDataList = Spark.runtimeCollection("playerData");
    playerDataList.update({"playerID": record.playerID}, {"$set": record.playerData}, true, false);
}