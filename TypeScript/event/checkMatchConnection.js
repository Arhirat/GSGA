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
var isOnline1 = SparkHelper_1.playerIsOnline(startedMatch.team1.playerID);
var isOnline2 = SparkHelper_1.playerIsOnline(startedMatch.team2.playerID);
if (isOnline1 && !isOnline2) {
    startedMatch.state = Model_1.StartedMatchState.WinTeam1;
    startedMatch.finishReason = Model_1.MatchFinishReason.Disconnect;
    SparkHelper_1.saveStartedMatch(startedMatch);
}
else if (!isOnline1 && isOnline2) {
    startedMatch.state = Model_1.StartedMatchState.WinTeam2;
    startedMatch.finishReason = Model_1.MatchFinishReason.Disconnect;
    SparkHelper_1.saveStartedMatch(startedMatch);
}
