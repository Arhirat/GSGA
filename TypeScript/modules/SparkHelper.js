"use strict";
function getPlayerID() {
    //TypeScriptCode
    throw "Заглушка";
    /*SparkCode
        return Spark.getPlayer().getPlayerId();
    */
}
exports.getPlayerID = getPlayerID;
function getPlayerData(playerID) {
    //TypeScriptCode
    throw "Заглушка";
    /*SparkCode
        var playerDataList = Spark.runtimeCollection("playerData");
        return playerDataList.findOne({"playerID": playerID});
    */
}
exports.getPlayerData = getPlayerData;
function save(playerData) {
    //TypeScriptCode
    throw "Заглушка";
    /*SparkCode
        var playerDataList = Spark.runtimeCollection("playerData");
        playerDataList.update({"playerID": playerData.playerID}, {"$set": playerData}, true, false);
    */
}
exports.save = save;
function getEvent() {
    //TypeScriptCode
    throw "Заглушка";
    /*SparkCode
        return Spark.getData();
    */
}
exports.getEvent = getEvent;
function sendMessage(data, playerID) {
    //TypeScriptCode
    throw "Заглушка";
    /*SparkCode
        Spark.message().setMessageData(data).setPlayerIds(playerID).send();
    */
}
exports.sendMessage = sendMessage;
function setScriptData(variable, data) {
    //TypeScriptCode
    throw "Заглушка";
    /*SparkCode
        Spark.setScriptData(variable, data);
    */
}
exports.setScriptData = setScriptData;
