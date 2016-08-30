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
    var winner = startedMatch.playerIDBlue == playerID ? Model_1.TeamType.Red : Model_1.TeamType.Blue;
    Model_1.setStartedMatchWinner(startedMatch, winner, Model_1.MatchFinishReason.Disconnect);
    SparkHelper_1.saveStartedMatch(startedMatch);
}
SparkHelper_1.setScriptData("playerData", playerData);
