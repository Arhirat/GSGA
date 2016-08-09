var playerDataList = Spark.runtimeCollection("playerData");
var playerID = Spark.getPlayer().getPlayerId();
var playerData = playerDataList.findOne({"playerID": playerID}); 
var win = Spark.getData().win;

if(playerData == null)
{
    throw "playerData == null";
}

if(playerData.startedMatch == null)
{
    throw "playerData.startedMatch == null";
}

var startedMatch = playerData.startedMatch;
var blue = startedMatch.playerIDBlue == playerID;

if(win == 1)
{
    startedMatch.state = blue ? "winBlue" : "winRed";
}
else
{
    startedMatch.state = blue ? "winRed" : "winBlue";
}

startedMatch.changeWinnerRes1 = 10;
startedMatch.changeWinnerRes2 = 10;
startedMatch.changeWinnerHonor = 10;
startedMatch.changeLoserRes1 = -10;
startedMatch.changeLoserRes2 = -10;
startedMatch.changeLoserHonor = -10;

playerDataList.update({"playerID": playerID}, {"$set": playerData}, true, false);