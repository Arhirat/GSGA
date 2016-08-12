"use strict";
var exports = {};

function getPlayerID() {
    
        return Spark.getPlayer().getPlayerId();
    
}
exports.getPlayerID = getPlayerID;
function getPlayerData(playerID) {
    
        var playerDataList = Spark.runtimeCollection("playerData");
        return playerData.findOne({"playerID": playerID});
    
}
exports.getPlayerData = getPlayerData;
function save(playerData) {
    
        var playerDataList = Spark.runtimeCollection("playerData");
        playerDataList.update({"playerID": playerData.playerID}, {"$set": playerData}, true, false);
    
}
exports.save = save;
function getEvent() {
    
        return Spark.getData().gold;
    
}
exports.getEvent = getEvent;
