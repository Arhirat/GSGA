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
var isOnlineBlue = SparkHelper_1.playerIsOnline(startedMatch.teamBlue.playerID);
var isOnlineRed = SparkHelper_1.playerIsOnline(startedMatch.teamRed.playerID);
if (isOnlineBlue && !isOnlineRed) {
    startedMatch.state = Model_1.StartedMatchState.WinBlue;
    startedMatch.finishReason = Model_1.MatchFinishReason.Disconnect;
    SparkHelper_1.saveStartedMatch(startedMatch);
}
else if (!isOnlineBlue && isOnlineRed) {
    startedMatch.state = Model_1.StartedMatchState.WinRed;
    startedMatch.finishReason = Model_1.MatchFinishReason.Disconnect;
    SparkHelper_1.saveStartedMatch(startedMatch);
}
