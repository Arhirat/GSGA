"use strict";
var exports = {};

var EuropeLocal = "europe";
// --------- ENUM --------------
(function (StartedMatchState) {
    StartedMatchState[StartedMatchState["InProgress"] = 1] = "InProgress";
    StartedMatchState[StartedMatchState["WinTeam1"] = 2] = "WinTeam1";
    StartedMatchState[StartedMatchState["WinTeam2"] = 3] = "WinTeam2";
    StartedMatchState[StartedMatchState["Draw"] = 4] = "Draw";
})(exports.StartedMatchState || (exports.StartedMatchState = {}));
var StartedMatchState = exports.StartedMatchState;
(function (TeamType) {
    TeamType[TeamType["Team1"] = 1] = "Team1";
    TeamType[TeamType["Team2"] = 2] = "Team2";
})(exports.TeamType || (exports.TeamType = {}));
var TeamType = exports.TeamType;
(function (MatchFinishReason) {
    MatchFinishReason[MatchFinishReason["None"] = 0] = "None";
    MatchFinishReason[MatchFinishReason["Win"] = 1] = "Win";
    MatchFinishReason[MatchFinishReason["Surrender"] = 2] = "Surrender";
    MatchFinishReason[MatchFinishReason["Disconnect"] = 3] = "Disconnect";
    MatchFinishReason[MatchFinishReason["Cheater"] = 4] = "Cheater";
    MatchFinishReason[MatchFinishReason["TimeOver"] = 5] = "TimeOver";
})(exports.MatchFinishReason || (exports.MatchFinishReason = {}));
var MatchFinishReason = exports.MatchFinishReason;
// --------- FUNCTION --------------
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
exports.getRandomInt = getRandomInt;
function getDefaultPlayerData(playerID) {
    return {
        playerID: playerID,
        displayName: "noname",
        avatar: 0,
        race: 0,
        star: 0,
        bot: false,
        startedMatch: null,
        donateExpiredDateTime: 0
    };
}
exports.getDefaultPlayerData = getDefaultPlayerData;
function getBotPlayerData(displayName, avatar, race) {
    return {
        playerID: "bot",
        displayName: displayName,
        avatar: avatar,
        race: race,
        star: 0,
        bot: true,
        startedMatch: null,
        donateExpiredDateTime: 0
    };
}
exports.getBotPlayerData = getBotPlayerData;
