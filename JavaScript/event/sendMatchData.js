"use strict";
require("SparkHelper")
require("Model")



var playerID = getPlayerID();
var playerData = getPlayerData(playerID);
var event = getEvent();
if (playerData == null) {
    throw "playerData == null";
}
if (playerData.startedMatch == null) {
    throw "playerData.startedMatch == null";
}
if (playerData.startedMatch.state != StartedMatchState.WinBlue && playerData.startedMatch.state != StartedMatchState.WinRed) {
    var message = {
        data: event.data
    };
    sendMessage(message, event.playerID);
}
