"use strict";
var SparkHelper_1 = require("../modules/SparkHelper");
var Model_1 = require("../modules/Model");
var playerID = SparkHelper_1.getPlayerID();
var playerData = SparkHelper_1.getPlayerData(playerID);
if (playerData == null) {
    throw "playerData == null";
}
if (playerData.startedMatch == null) {
    throw "playerData.startedMatch == null";
}
var startedMatch = playerData.startedMatch;
if (playerData.startedMatch.state == Model_1.StartedMatchState.InProgress) {
    throw "playerData.startedMatch.state == StartedMatchState.InProgress";
}
var win = (playerData.startedMatch.state == Model_1.StartedMatchState.WinTeam1 && startedMatch.team1.playerID == playerID) ||
    (playerData.startedMatch.state == Model_1.StartedMatchState.WinTeam2 && startedMatch.team2.playerID == playerID);
if (win) {
    playerData.star += 1;
}
else {
}
playerData.startedMatch = null;
SparkHelper_1.save(playerData);
SparkHelper_1.setScriptData("playerData", playerData);
SparkHelper_1.sendLeaderboardValue(playerData);
