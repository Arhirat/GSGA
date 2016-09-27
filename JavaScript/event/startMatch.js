"use strict";
require("SparkHelper")


var event = getEvent();
var matchID = event.matchID;
var currentPlayerID = getPlayerID();
var currentPlayerData = getPlayerData(currentPlayerID);
if (currentPlayerData == null)
    throw "currentPlayerData == null";
if (currentPlayerData.startedMatch != null && currentPlayerData.startedMatch.matchID != matchID)
    throw "currentPlayerData.startedMatch != null && currentPlayerData.startedMatch.matchID != matchID";
if (currentPlayerData.startedMatch != null && currentPlayerData.startedMatch.matchID == matchID) {
    setScriptData("status", "already started by opponent");
}
else {
    var match = loadMatch(matchID);
    var playerID1 = match.participantList[0].playerID;
    var playerID2 = match.participantList[1].playerID;
    var playerData1 = getPlayerData(playerID1);
    var playerData2 = getPlayerData(playerID2);
    startMatch(playerData1, playerData2, matchID);
    setScriptData("status", "started by myself");
}
