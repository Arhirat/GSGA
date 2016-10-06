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
    var state = startedMatch.team1.playerID == playerID ? Model_1.StartedMatchState.WinTeam2 : Model_1.StartedMatchState.WinTeam1;
    startedMatch.state = state;
    startedMatch.finishReason = Model_1.MatchFinishReason.Disconnect;
    SparkHelper_1.saveStartedMatch(startedMatch);
}
SparkHelper_1.setScriptData("playerData", playerData);
