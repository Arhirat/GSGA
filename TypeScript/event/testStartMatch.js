"use strict";
var SparkHelper_1 = require("../modules/SparkHelper");
var Model_1 = require("../modules/Model");
var playerID1 = SparkHelper_1.getPlayerID();
var playerData1 = SparkHelper_1.getPlayerData(playerID1);
var event = SparkHelper_1.getEvent();
var playerID2 = event.opponentPlayerID;
var playerData2 = SparkHelper_1.getPlayerData(playerID2);
if (playerData1 == null) {
    throw "playerData1 == null";
}
if (playerData1.startedMatch != null) {
    throw "playerData1.startedMatch != null";
}
if (playerData2 == null) {
    throw "playerData2 == null";
}
if (playerData2.startedMatch != null) {
    throw "playerData2.startedMatch != null";
}
var teamInfo1 = {
    playerID: playerID1,
    displayName: playerData1.displayName,
    avatar: playerData1.avatar,
    race: playerData1.race
};
var teamInfo2 = {
    playerID: playerID2,
    displayName: playerData2.displayName,
    avatar: playerData2.avatar,
    race: playerData2.race
};
var seed = Model_1.getRandomInt(0, 10000);
var blue = Model_1.getRandomInt(0, 2);
var startedMatch = {
    matchID: "undef",
    seed: seed,
    teamRed: blue == 1 ? teamInfo1 : teamInfo2,
    teamBlue: blue == 1 ? teamInfo2 : teamInfo1,
    state: Model_1.StartedMatchState.InProgress,
    finishReason: Model_1.MatchFinishReason.None
};
playerData1.startedMatch = startedMatch;
playerData2.startedMatch = startedMatch;
SparkHelper_1.save(playerData1);
SparkHelper_1.save(playerData2);
var message1 = {
    messageType: "MatchStartedMessage",
    playerData: playerData1
};
SparkHelper_1.sendMessage(message1, playerID1);
var message2 = {
    messageType: "MatchStartedMessage",
    playerData: playerData2
};
SparkHelper_1.sendMessage(message2, playerID2);
