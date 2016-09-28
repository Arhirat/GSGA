"use strict";
var SparkHelper_1 = require("../modules/SparkHelper");
var Model_1 = require("../modules/Model");
var playerID = SparkHelper_1.getPlayerID();
var playerData = SparkHelper_1.getPlayerData(playerID);
var event = SparkHelper_1.getEvent();
var state = event.state;
var finishReason = event.reason;
if (playerData == null) {
    throw "playerData == null";
}
if (playerData.startedMatch == null) {
    throw "playerData.startedMatch == null";
}
if (state == Model_1.StartedMatchState.InProgress)
    throw "state == StartedMatchState.InProgress";
if (playerData.startedMatch.state != Model_1.StartedMatchState.InProgress) {
    SparkHelper_1.setScriptData("status", "match already finished");
}
else {
    var startedMatch = playerData.startedMatch;
    startedMatch.state = state;
    startedMatch.finishReason = finishReason;
    SparkHelper_1.saveStartedMatch(startedMatch);
    SparkHelper_1.setScriptData("status", "ok");
}
