"use strict";
require("SparkHelper")
require("Model")



var playerID = getPlayerID();
var playerData = getPlayerData(playerID);
if (playerData == null) {
    throw "playerData == null";
}
if (playerData.startedMatch == null) {
    throw "playerData.startedMatch == null";
}
var startedMatch = playerData.startedMatch;
var isOnlineBlue = playerIsOnline(startedMatch.playerIDBlue);
var isOnlineRed = playerIsOnline(startedMatch.playerIDRed);
if (isOnlineBlue && !isOnlineRed) {
    setStartedMatchWinner(startedMatch, TeamType.Blue);
    saveStartedMatch(startedMatch);
}
else if (!isOnlineBlue && isOnlineRed) {
    setStartedMatchWinner(startedMatch, TeamType.Red);
    saveStartedMatch(startedMatch);
}
