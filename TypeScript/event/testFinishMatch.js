"use strict";
var SparkHelper_1 = require("../modules/SparkHelper");
var Model_1 = require("../modules/Model");
var playerID = SparkHelper_1.getPlayerID();
var playerData = SparkHelper_1.getPlayerData(playerID);
var event = SparkHelper_1.getEvent();
var win = event.win;
if (playerData == null) {
    throw "playerData == null";
}
if (playerData.startedMatch == null) {
    throw "playerData.startedMatch == null";
}
var startedMatch = playerData.startedMatch;
var blue = startedMatch.teamBlue.playerID == playerID;
if (win == 1) {
    startedMatch.state = blue ? Model_1.StartedMatchState.WinBlue : Model_1.StartedMatchState.WinRed;
}
else {
    startedMatch.state = blue ? Model_1.StartedMatchState.WinRed : Model_1.StartedMatchState.WinBlue;
}
//startedMatch.changeWinnerRes1 = 10;
//startedMatch.changeWinnerRes2 = 10;
//startedMatch.changeWinnerHonor = 10;
//startedMatch.changeLoserRes1 = -10;
//startedMatch.changeLoserRes2 = -10;
//startedMatch.changeLoserHonor = -10;
SparkHelper_1.save(playerData);
