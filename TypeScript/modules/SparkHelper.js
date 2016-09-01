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
function getGameData() {
    //TypeScriptCode
    throw "Заглушка";
    /*SparkCode
        var gameDataCollection = Spark.runtimeCollection("gameData");
        return gameDataCollection.findOne();
    */
}
exports.getGameData = getGameData;
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
function loadMatch(matchID) {
    //TypeScriptCode
    throw "Заглушка";
    /*SparkCode
        var match = Spark.getMultiplayer().loadMatch(matchID);
        if(match == null)
            return null;
        
        var participantList = [];
                
        for (var _i = 0, _a = match.getParticipants(); _i < _a.length; _i++)
        {
            var participant = _a[_i];
            var player = participant.getPlayer();
            participantList[_i] =
            {
    //                name: player.
                playerID: player.getPlayerId(),
            }
        }
        
        var result =
        {
            matchID: matchID,
            participantList: participantList,
        };
        return result;
    */
}
exports.loadMatch = loadMatch;
function playerIsOnline(playerID) {
    //TypeScriptCode
    throw "Заглушка";
    /*SparkCode
        return Spark.loadPlayer(playerID).isOnline();
    */
}
exports.playerIsOnline = playerIsOnline;
function playerSetAchievement(achievementID) {
    //TypeScriptCode
    throw "Заглушка";
    /*SparkCode
        var player = Spark.getPlayer();
        player.addAchievement(achievementID);
    */
}
exports.playerSetAchievement = playerSetAchievement;
function saveStartedMatch(startedMatch) {
    var playerIDBlue = startedMatch.playerIDBlue;
    var playerIDRed = startedMatch.playerIDRed;
    var playerDataBlue = getPlayerData(playerIDBlue);
    var playerDataRed = getPlayerData(playerIDRed);
    playerDataBlue.startedMatch = startedMatch;
    playerDataRed.startedMatch = startedMatch;
    save(playerDataBlue);
    save(playerDataRed);
    var messageBlue = {
        messageType: "MatchFinishedMessage",
        playerData: playerDataBlue
    };
    sendMessage(messageBlue, playerIDBlue);
    var messageRed = {
        messageType: "MatchFinishedMessage",
        playerData: playerDataRed
    };
    sendMessage(messageRed, playerIDRed);
}
exports.saveStartedMatch = saveStartedMatch;
function sendLeaderboardValue(playerData) {
    //TypeScriptCode
    throw "Заглушка";
    /*SparkCode
        Spark.sendRequest({"@class": ".LogEventRequest", "eventKey": "setLeaderboardGroup", "honor": playerData.honor, "league": playerData.league, "division": playerData.division});
    */
}
exports.sendLeaderboardValue = sendLeaderboardValue;
function resetLeaderboardValue(playerData) {
    //TypeScriptCode
    throw "Заглушка";
    /*SparkCode
        Spark.sendRequest({"@class": ".LogEventRequest", "eventKey": "setLeaderboardGroup", "honor": -1, "league": playerData.league, "division": playerData.division, "local": playerData.local});
    */
}
exports.resetLeaderboardValue = resetLeaderboardValue;
