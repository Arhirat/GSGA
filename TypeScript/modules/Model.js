"use strict";
var EuropeLocal = "europe";
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
(function (MatchFinishReason) {
    MatchFinishReason[MatchFinishReason["None"] = 0] = "None";
    MatchFinishReason[MatchFinishReason["Win"] = 1] = "Win";
    MatchFinishReason[MatchFinishReason["Surrender"] = 2] = "Surrender";
    MatchFinishReason[MatchFinishReason["Disconnect"] = 3] = "Disconnect";
    MatchFinishReason[MatchFinishReason["Cheater"] = 4] = "Cheater";
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
        //        honor: 100,
        //		league: 1,
        //		division: 3,
        //		local: EuropeLocal,
        startedMatch: null
    };
}
exports.getDefaultPlayerData = getDefaultPlayerData;
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
