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
if (playerData.startedMatch.state != StartedMatchState.WinBlue && playerData.startedMatch.state != StartedMatchState.WinRed) {
    throw "playerData.startedMatch.state != StartetMatchState.WinBlue && playerData.startedMatch.state != StartetMatchState.WinRed";
}
var startedMatch = playerData.startedMatch;
var win = (playerData.startedMatch.state == StartedMatchState.WinBlue && startedMatch.playerIDBlue == playerID) ||
    (playerData.startedMatch.state == StartedMatchState.WinRed && startedMatch.playerIDRed == playerID);
if (win) {
    playerData.honor += startedMatch.changeWinnerHonor;
}
else {
    playerData.honor += startedMatch.changeLoserHonor;
}
playerData.startedMatch = null;
save(playerData);
setScriptData("playerData", playerData);
