"use strict";
var SparkHelper_1 = require("../modules/SparkHelper");
var Model_1 = require("../modules/Model");
var playerID = SparkHelper_1.getPlayerID();
var playerData = SparkHelper_1.getPlayerData(playerID);
var event = SparkHelper_1.getEvent();
var opponentPlayerID = event.opponentPlayerID;
if (playerData == null) {
    throw "playerData == null";
}
if (playerData.startedMatch != null) {
    throw "playerData.startedMatch != null";
}
var seed = Model_1.getRandomInt(0, 10000);
var blue = Model_1.getRandomInt(0, 2);
var startedMatch = {
    seed: seed,
    playerIDRed: blue == 1 ? playerID : opponentPlayerID,
    playerIDBlue: blue == 1 ? opponentPlayerID : playerID,
    state: Model_1.StartedMatchState.InProgress,
    changeWinnerRes1: 0,
    changeWinnerRes2: 0,
    changeWinnerHonor: 0,
    changeLoserRes1: 0,
    changeLoserRes2: 0,
    changeLoserHonor: 0
};
playerData.startedMatch = startedMatch;
SparkHelper_1.save(playerData);
