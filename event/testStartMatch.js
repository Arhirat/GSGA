require("Helper");


var playerDataList = Spark.runtimeCollection("playerData");
var playerID = Spark.getPlayer().getPlayerId();
var playerData = playerDataList.findOne({"playerID": playerID}); 
var opponentPlayerID = Spark.getData().opponentPlayerID;

if(playerData == null)
{
    throw "playerData == null";
}

if(playerData.startedMatch != null)
{
    throw "playerData.startedMatch != null";
}

var seed = getRandomInt(0, 10000);
var blue = getRandomInt(0, 2);

var startedMatch = 
{
    seed: seed,
	playerIDRed: blue == 1 ? playerID : opponentPlayerID,
	playerIDBlue: blue == 1 ? opponentPlayerID : playerID,
	state: "inProcess",
};

playerData.startedMatch = startedMatch;

playerDataList.update({"playerID": playerID}, {"$set": playerData}, true, false);