"use strict";
var SparkHelper_1 = require("../modules/SparkHelper");
var Model_1 = require("../modules/Model");
var playerID = SparkHelper_1.getPlayerID();
var playerData = SparkHelper_1.getPlayerData(playerID);
var event = SparkHelper_1.getEvent();
if (playerData == null) {
    throw "playerData == null";
}
if (playerData.startedMatch == null) {
    throw "playerData.startedMatch == null";
}
if (playerData.startedMatch.state != Model_1.StartedMatchState.WinBlue && playerData.startedMatch.state != Model_1.StartedMatchState.WinRed) {
    var message = {
        messageType: "MatchDataMessage",
        data: event.data,
        senderPlayerID: playerID
    };
    SparkHelper_1.sendMessage(message, event.playerID);
}
