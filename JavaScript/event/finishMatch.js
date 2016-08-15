"use strict";
require("SparkHelper")
require("Model")



var playerID = getPlayerID();
var playerData = getPlayerData(playerID);
var event = getEvent();
var winnerTeam = event.winnerTeam;
if (playerData == null) {
    throw "playerData == null";
}
if (playerData.startedMatch == null) {
    throw "playerData.startedMatch == null";
}
var startedMatch = playerData.startedMatch;
startedMatch.state = winnerTeam == TeamType.Blue ? StartedMatchState.WinBlue : StartedMatchState.WinRed;
startedMatch.changeWinnerRes1 = 10;
startedMatch.changeWinnerRes2 = 10;
startedMatch.changeWinnerHonor = 10;
startedMatch.changeLoserRes1 = -10;
startedMatch.changeLoserRes2 = -10;
startedMatch.changeLoserHonor = -10;
var playerIDBlue = playerData.startedMatch.playerIDBlue;
var playerIDRed = playerData.startedMatch.playerIDRed;
var playerDataBlue = getPlayerData(playerIDBlue);
var playerDataRed = getPlayerData(playerIDRed);
playerDataBlue.startedMatch = startedMatch;
playerDataRed.startedMatch = startedMatch;
save(playerDataBlue);
save(playerDataRed);
var messageBlue = {
    messageType: "MatchFinishedMessage",
    playerData: playerDataBlue
};
sendMessage(messageBlue, playerIDBlue);
var messageRed = {
    messageType: "MatchFinishedMessage",
    playerData: playerDataRed
};
sendMessage(messageRed, playerIDRed);
