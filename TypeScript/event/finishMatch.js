"use strict";
var SparkHelper_1 = require("../modules/SparkHelper");
var Model_1 = require("../modules/Model");
var playerID = SparkHelper_1.getPlayerID();
var playerData = SparkHelper_1.getPlayerData(playerID);
var event = SparkHelper_1.getEvent();
var winnerTeam = event.winnerTeam;
var finishReason = event.reason;
if (playerData == null) {
    throw "playerData == null";
}
if (playerData.startedMatch == null) {
    throw "playerData.startedMatch == null";
}
if (winnerTeam != Model_1.TeamType.Blue && winnerTeam != Model_1.TeamType.Red)
    throw "winnerTeam != TeamType.Blue && winnerTeam != TeamType.Red";
if (playerData.startedMatch.state == Model_1.StartedMatchState.WinBlue || playerData.startedMatch.state == Model_1.StartedMatchState.WinRed) {
    SparkHelper_1.setScriptData("status", "match already finished");
}
else {
    var startedMatch = playerData.startedMatch;
    Model_1.setStartedMatchWinner(startedMatch, winnerTeam, finishReason);
    SparkHelper_1.saveStartedMatch(startedMatch);
    SparkHelper_1.setScriptData("status", "ok");
}
