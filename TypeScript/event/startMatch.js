"use strict";
var SparkHelper_1 = require("../modules/SparkHelper");
var Model_1 = require("../modules/Model");
var event = SparkHelper_1.getEvent();
var matchID = event.matchID;
var currentPlayerID = SparkHelper_1.getPlayerID();
var currentPlayerData = SparkHelper_1.getPlayerData(currentPlayerID);
if (currentPlayerData == null)
    throw "currentPlayerData == null";
if (currentPlayerData.startedMatch != null && currentPlayerData.startedMatch.matchID == matchID)
    throw "# Match already started";
if (currentPlayerData.startedMatch != null && currentPlayerData.startedMatch.matchID != matchID)
    throw "currentPlayerData.startedMatch != null && currentPlayerData.startedMatch.matchID != matchID";
var match = SparkHelper_1.loadMatch(matchID);
var playerID1 = match.participantList[0].playerID;
var playerID2 = match.participantList[1].playerID;
var seed = Model_1.getRandomInt(0, 10000);
var blue = Model_1.getRandomInt(0, 2);
var startedMatch = {
    matchID: matchID,
    seed: seed,
    playerIDRed: blue == 1 ? playerID1 : playerID2,
    playerIDBlue: blue == 1 ? playerID2 : playerID1,
    state: Model_1.StartedMatchState.InProgress,
    changeWinnerRes1: 0,
    changeWinnerRes2: 0,
    changeWinnerHonor: 0,
    changeLoserRes1: 0,
    changeLoserRes2: 0,
    changeLoserHonor: 0
};
for (var _i = 0, _a = match.participantList; _i < _a.length; _i++) {
    var participant = _a[_i];
    var playerData = SparkHelper_1.getPlayerData(participant.playerID);
    playerData.startedMatch = startedMatch;
    SparkHelper_1.save(playerData);
    var message = {
        messageType: "MatchStartedMessage",
        playerData: playerData
    };
    SparkHelper_1.sendMessage(message, participant.playerID);
}
