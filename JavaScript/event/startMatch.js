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
    var playerData1 = getPlayerData(playerID1);
    var playerData2 = getPlayerData(playerID2);
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
    var seed = getRandomInt(0, 10000);
    var blue = getRandomInt(0, 2);
    var startedMatch = {
        matchID: matchID,
        seed: seed,
        teamRed: blue == 1 ? teamInfo1 : teamInfo2,
        teamBlue: blue == 1 ? teamInfo2 : teamInfo1,
        state: StartedMatchState.InProgress,
        finishReason: MatchFinishReason.None
    };
    playerData1.startedMatch = startedMatch;
    save(playerData1);
    var message1 = {
        messageType: "MatchStartedMessage",
        playerData: playerData1
    };
    sendMessage(message1, playerID1);
    playerData2.startedMatch = startedMatch;
    save(playerData2);
    var message2 = {
        messageType: "MatchStartedMessage",
        playerData: playerData2
    };
    sendMessage(message2, playerID1);
    setScriptData("status", "started by myself");
}
