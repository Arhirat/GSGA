"use strict";
var exports = {};

// --------- ENUM --------------
(function (StartedMatchState) {
    StartedMatchState[StartedMatchState["InProgress"] = 1] = "InProgress";
    StartedMatchState[StartedMatchState["WinBlue"] = 2] = "WinBlue";
    StartedMatchState[StartedMatchState["WinRed"] = 3] = "WinRed";
})(exports.StartedMatchState || (exports.StartedMatchState = {}));
var StartedMatchState = exports.StartedMatchState;
(function (TeamType) {
    TeamType[TeamType["Blue"] = 1] = "Blue";
    TeamType[TeamType["Red"] = 2] = "Red";
})(exports.TeamType || (exports.TeamType = {}));
var TeamType = exports.TeamType;
// --------- FUNCTION --------------
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
exports.getRandomInt = getRandomInt;
function getDefaultPlayerData(playerID) {
    return {
        playerID: playerID,
        honor: 100,
        league: 1,
        division: 1,
        startedMatch: null
    };
}
exports.getDefaultPlayerData = getDefaultPlayerData;
function setStartedMatchWinner(startedMatch, winnerTeam) {
    startedMatch.state = winnerTeam == TeamType.Blue ? StartedMatchState.WinBlue : StartedMatchState.WinRed;
    startedMatch.changeWinnerRes1 = 10;
    startedMatch.changeWinnerRes2 = 10;
    startedMatch.changeWinnerHonor = 10;
    startedMatch.changeLoserRes1 = -10;
    startedMatch.changeLoserRes2 = -10;
    startedMatch.changeLoserHonor = -10;
}
exports.setStartedMatchWinner = setStartedMatchWinner;
