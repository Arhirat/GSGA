"use strict";
require("SparkHelper")
require("Model")



var playerID1 = getPlayerID();
var playerData1 = getPlayerData(playerID1);
var event = getEvent();
var playerID2 = event.opponentPlayerID;
var playerData2 = getPlayerData(playerID2);
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
var seed = getRandomInt(0, 10000);
var blue = getRandomInt(0, 2);
var startedMatch = {
    matchID: "undef",
    seed: seed,
    playerIDRed: blue == 1 ? playerID1 : playerID2,
    playerIDBlue: blue == 1 ? playerID2 : playerID1,
    state: StartedMatchState.InProgress,
    finishReason: MatchFinishReason.None
};
playerData1.startedMatch = startedMatch;
playerData2.startedMatch = startedMatch;
save(playerData1);
save(playerData2);
var message1 = {
    messageType: "MatchStartedMessage",
    playerData: playerData1
};
sendMessage(message1, playerID1);
var message2 = {
    messageType: "MatchStartedMessage",
    playerData: playerData2
};
sendMessage(message2, playerID2);
