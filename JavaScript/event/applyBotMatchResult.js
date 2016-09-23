"use strict";
require("SparkHelper")


var playerID = getPlayerID();
var playerData = getPlayerData(playerID);
var event = getEvent();
if (playerData == null) {
    throw "playerData == null";
}
if (playerData.startedMatch != null) {
    throw "playerData.startedMatch != null";
}
if (event.win == 1) {
    playerData.star += 1;
}
save(playerData);
setScriptData("playerData", playerData);
