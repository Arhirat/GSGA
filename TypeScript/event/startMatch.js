"use strict";
var SparkHelper_1 = require("../modules/SparkHelper");
var event = SparkHelper_1.getEvent();
var matchID = event.matchID;
var currentPlayerID = SparkHelper_1.getPlayerID();
var currentPlayerData = SparkHelper_1.getPlayerData(currentPlayerID);
if (currentPlayerData == null)
    throw "currentPlayerData == null";
if (currentPlayerData.startedMatch != null && currentPlayerData.startedMatch.matchID != matchID)
    throw "currentPlayerData.startedMatch != null && currentPlayerData.startedMatch.matchID != matchID";
if (currentPlayerData.startedMatch != null && currentPlayerData.startedMatch.matchID == matchID) {
    SparkHelper_1.setScriptData("status", "already started by opponent");
}
else {
    var match = SparkHelper_1.loadMatch(matchID);
    var playerID1 = match.participantList[0].playerID;
    var playerID2 = match.participantList[1].playerID;
    var playerData1 = SparkHelper_1.getPlayerData(playerID1);
    var playerData2 = SparkHelper_1.getPlayerData(playerID2);
    SparkHelper_1.startMatch(playerData1, playerData2, matchID);
    SparkHelper_1.setScriptData("status", "started by myself");
}
