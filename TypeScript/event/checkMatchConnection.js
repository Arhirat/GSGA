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
var isOnlineBlue = SparkHelper_1.playerIsOnline(startedMatch.playerIDBlue);
var isOnlineRed = SparkHelper_1.playerIsOnline(startedMatch.playerIDRed);
if (isOnlineBlue && !isOnlineRed) {
    Model_1.setStartedMatchWinner(startedMatch, Model_1.TeamType.Blue);
    SparkHelper_1.saveStartedMatch(startedMatch);
}
else if (!isOnlineBlue && isOnlineRed) {
    Model_1.setStartedMatchWinner(startedMatch, Model_1.TeamType.Red);
    SparkHelper_1.saveStartedMatch(startedMatch);
}
