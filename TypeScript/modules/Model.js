"use strict";
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
