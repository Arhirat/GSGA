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
if (playerData.startedMatch.state != StartetMatchState.WinBlue && playerData.startedMatch.state != StartetMatchState.WinRed) {
    throw "playerData.startedMatch.state != StartetMatchState.WinBlue && playerData.startedMatch.state != StartetMatchState.WinRed";
}
var startedMatch = playerData.startedMatch;
var blue = startedMatch.playerIDBlue == playerID;
var win = (playerData.startedMatch.state != StartetMatchState.WinBlue && startedMatch.playerIDBlue == playerID) ||
    (playerData.startedMatch.state != StartetMatchState.WinRed && startedMatch.playerIDRed == playerID);
if (win) {
    playerData.honor += startedMatch.changeWinnerHonor;
}
else {
    playerData.honor += startedMatch.changeLoserHonor;
}
playerData.startedMatch = null;
save(playerData);
