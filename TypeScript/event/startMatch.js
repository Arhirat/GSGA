"use strict";
var SparkHelper_1 = require("../modules/SparkHelper");
var Model_1 = require("../modules/Model");
var event = SparkHelper_1.getEvent();
var matchID = event.matchID;
var currentPlayerID = SparkHelper_1.getPlayerID();
var currentPlayerData = SparkHelper_1.getPlayerData(currentPlayerID);
if (currentPlayerData == null)
    throw "currentPlayerData == null";
if (currentPlayerData.startedMatch != null && currentPlayerData.startedMatch.matchID != matchID)
    throw "currentPlayerData.startedMatch != null && currentPlayerData.startedMatch.matchID != matchID";
if (currentPlayerData.startedMatch != null && currentPlayerData.startedMatch.matchID == matchID) {
    SparkHelper_1.setScriptData("status", "already started by opponent");
}
else {
    var match = SparkHelper_1.loadMatch(matchID);
    var playerID1 = match.participantList[0].playerID;
    var playerID2 = match.participantList[1].playerID;
    var playerData1 = SparkHelper_1.getPlayerData(playerID1);
    var playerData2 = SparkHelper_1.getPlayerData(playerID2);
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
        matchID: matchID,
        seed: seed,
        teamRed: blue == 1 ? teamInfo1 : teamInfo2,
        teamBlue: blue == 1 ? teamInfo2 : teamInfo1,
        state: Model_1.StartedMatchState.InProgress,
        finishReason: Model_1.MatchFinishReason.None
    };
    playerData1.startedMatch = startedMatch;
    SparkHelper_1.save(playerData1);
    var message1 = {
        messageType: "MatchStartedMessage",
        playerData: playerData1
    };
    SparkHelper_1.sendMessage(message1, playerID1);
    playerData2.startedMatch = startedMatch;
    SparkHelper_1.save(playerData2);
    var message2 = {
        messageType: "MatchStartedMessage",
        playerData: playerData2
    };
    SparkHelper_1.sendMessage(message2, playerID2);
    SparkHelper_1.setScriptData("status", "started by myself");
}
