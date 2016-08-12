"use strict";
var exports = {};

function getPlayerID() {
    
        return Spark.getPlayer().getPlayerId();
    
}
exports.getPlayerID = getPlayerID;
function getPlayerData(playerID) {
    
        var playerDataList = Spark.runtimeCollection("playerData");
        return playerDataList.findOne({"playerID": playerID});
    
}
exports.getPlayerData = getPlayerData;
function save(playerData) {
    
        var playerDataList = Spark.runtimeCollection("playerData");
        playerDataList.update({"playerID": playerData.playerID}, {"$set": playerData}, true, false);
    
}
exports.save = save;
function getEvent() {
    
        return Spark.getData();
    
}
exports.getEvent = getEvent;
function sendMessage(data, playerID) {
    
        Spark.message().setMessageData(data).setPlayerIds(playerID).send();
    
}
exports.sendMessage = sendMessage;
