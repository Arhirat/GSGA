"use strict";
var SparkHelper_1 = require("../modules/SparkHelper");
var Model_1 = require("../modules/Model");
var playerID = SparkHelper_1.getPlayerID();
var playerData = SparkHelper_1.getPlayerData(playerID);
var event = SparkHelper_1.getEvent();
var winnerTeam = event.winnerTeam;
if (playerData == null) {
    throw "playerData == null";
}
if (playerData.startedMatch == null) {
    throw "playerData.startedMatch == null";
}
if (playerData.startedMatch.state == Model_1.StartedMatchState.WinBlue || playerData.startedMatch.state == Model_1.StartedMatchState.WinRed) {
    throw "# Match already finished";
}
var startedMatch = playerData.startedMatch;
Model_1.setStartedMatchWinner(startedMatch, winnerTeam);
SparkHelper_1.saveStartedMatch(startedMatch);
