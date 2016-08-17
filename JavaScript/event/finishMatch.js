"use strict";
require("SparkHelper")
require("Model")



var playerID = getPlayerID();
var playerData = getPlayerData(playerID);
var event = getEvent();
var winnerTeam = event.winnerTeam;
var finishReason = event.reason;
if (playerData == null) {
    throw "playerData == null";
}
if (playerData.startedMatch == null) {
    throw "playerData.startedMatch == null";
}
if (playerData.startedMatch.state == StartedMatchState.WinBlue || playerData.startedMatch.state == StartedMatchState.WinRed) {
    setScriptData("status", "match already finished");
}
else {
    var startedMatch = playerData.startedMatch;
    setStartedMatchWinner(startedMatch, winnerTeam, finishReason);
    saveStartedMatch(startedMatch);
    setScriptData("status", "ok");
}
