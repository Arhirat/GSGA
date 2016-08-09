require("Model");

var playerDataList = Spark.runtimeCollection("playerData");
var playerID = Spark.getPlayer().getPlayerId();

var playerData = getDefaultPlayerData();
playerDataList.update({"playerID": playerID}, {"$set": playerData}, true, false);