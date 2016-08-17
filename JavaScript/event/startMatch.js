"use strict";
require("SparkHelper")
require("Model")



var event = getEvent();
var matchID = event.matchID;
var currentPlayerID = getPlayerID();
var currentPlayerData = getPlayerData(currentPlayerID);
if (currentPlayerData == null)
    throw "currentPlayerData == null";
if (currentPlayerData.startedMatch != null && currentPlayerData.startedMatch.matchID != matchID)
    throw "currentPlayerData.startedMatch != null && currentPlayerData.startedMatch.matchID != matchID";
if (currentPlayerData.startedMatch != null && currentPlayerData.startedMatch.matchID == matchID) {
    setScriptData("status", "already started by opponent");
}
else {
    var match = loadMatch(matchID);
    var playerID1 = match.participantList[0].playerID;
    var playerID2 = match.participantList[1].playerID;
    var seed = getRandomInt(0, 10000);
    var blue = getRandomInt(0, 2);
    var startedMatch = {
        matchID: matchID,
        seed: seed,
        playerIDRed: blue == 1 ? playerID1 : playerID2,
        playerIDBlue: blue == 1 ? playerID2 : playerID1,
        state: StartedMatchState.InProgress,
        finishReason: MatchFinishReason.None,
        changeWinnerRes1: 0,
        changeWinnerRes2: 0,
        changeWinnerHonor: 0,
        changeLoserRes1: 0,
        changeLoserRes2: 0,
        changeLoserHonor: 0
    };
    for (var _i = 0, _a = match.participantList; _i < _a.length; _i++) {
        var participant = _a[_i];
        var playerData = getPlayerData(participant.playerID);
        playerData.startedMatch = startedMatch;
        save(playerData);
        var message = {
            messageType: "MatchStartedMessage",
            playerData: playerData
        };
        sendMessage(message, participant.playerID);
    }
    setScriptData("status", "started by myself");
}
