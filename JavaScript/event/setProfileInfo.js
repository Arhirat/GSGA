"use strict";
require("SparkHelper")


var playerID = getPlayerID();
var playerData = getPlayerData(playerID);
var event = getEvent();
if (playerData == null) {
    throw "playerData == null";
}
playerData.displayName = event.displayName;
playerData.avatar = event.avatar;
playerData.race = event.race;
save(playerData);
setScriptData("playerData", playerData);
