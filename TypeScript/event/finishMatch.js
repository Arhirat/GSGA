"use strict";
var SparkHelper_1 = require("../modules/SparkHelper");
var Model_1 = require("../modules/Model");
var playerID = SparkHelper_1.getPlayerID();
var playerData = SparkHelper_1.getPlayerData(playerID);
var event = SparkHelper_1.getEvent();
var winnerTeam = event.winnerTeam;
if (playerData == null) {
    throw "playerData == null";
}
if (playerData.startedMatch == null) {
    throw "playerData.startedMatch == null";
}
var startedMatch = playerData.startedMatch;
startedMatch.state = winnerTeam == Model_1.TeamType.Blue ? Model_1.StartedMatchState.WinBlue : Model_1.StartedMatchState.WinRed;
startedMatch.changeWinnerRes1 = 10;
startedMatch.changeWinnerRes2 = 10;
startedMatch.changeWinnerHonor = 10;
startedMatch.changeLoserRes1 = -10;
startedMatch.changeLoserRes2 = -10;
startedMatch.changeLoserHonor = -10;
var playerIDBlue = playerData.startedMatch.playerIDBlue;
var playerIDRed = playerData.startedMatch.playerIDRed;
var playerDataBlue = SparkHelper_1.getPlayerData(playerIDBlue);
var playerDataRed = SparkHelper_1.getPlayerData(playerIDRed);
playerDataBlue.startedMatch = startedMatch;
playerDataRed.startedMatch = startedMatch;
SparkHelper_1.save(playerDataBlue);
SparkHelper_1.save(playerDataRed);
var messageBlue = {
    messageType: "MatchFinishedMessage",
    playerData: playerDataBlue
};
SparkHelper_1.sendMessage(messageBlue, playerIDBlue);
var messageRed = {
    messageType: "MatchFinishedMessage",
    playerData: playerDataRed
};
SparkHelper_1.sendMessage(messageRed, playerIDRed);
