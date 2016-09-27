"use strict";
var EuropeLocal = "europe";
// --------- ENUM --------------
(function (StartedMatchState) {
    StartedMatchState[StartedMatchState["InProgress"] = 1] = "InProgress";
    StartedMatchState[StartedMatchState["WinBlue"] = 2] = "WinBlue";
    StartedMatchState[StartedMatchState["WinRed"] = 3] = "WinRed";
    StartedMatchState[StartedMatchState["Draw"] = 4] = "Draw";
})(exports.StartedMatchState || (exports.StartedMatchState = {}));
var StartedMatchState = exports.StartedMatchState;
(function (TeamType) {
    TeamType[TeamType["Blue"] = 1] = "Blue";
    TeamType[TeamType["Red"] = 2] = "Red";
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
        startedMatch: null
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
        startedMatch: null
    };
}
exports.getBotPlayerData = getBotPlayerData;
function setStartedMatchWinner(startedMatch, winnerTeam, finishReason) {
    startedMatch.state = winnerTeam == TeamType.Blue ? StartedMatchState.WinBlue : StartedMatchState.WinRed;
    startedMatch.finishReason = finishReason;
    //	startedMatch.changeWinnerRes1 = 10;
    //	startedMatch.changeWinnerRes2 = 10;
    //	startedMatch.changeWinnerHonor = 10;
    //	startedMatch.changeLoserRes1 = -10;
    //	startedMatch.changeLoserRes2 = -10;
    //	startedMatch.changeLoserHonor = -10;
}
exports.setStartedMatchWinner = setStartedMatchWinner;
