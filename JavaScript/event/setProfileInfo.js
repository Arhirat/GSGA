"use strict";
require("SparkHelper")


var playerID = getPlayerID();
var playerData = getPlayerData(playerID);
var event = getEvent();
if (playerData == null) {
    throw "playerData == null";
}
var existingPlayer = findPlayerDataByDisplayName(event.displayName);
if (existingPlayer == null || existingPlayer.playerID == playerID) {
    playerData.displayName = event.displayName;
    playerData.avatar = event.avatar;
    playerData.race = event.race;
    save(playerData);
    setScriptData("playerData", playerData);
}
else {
    setScriptData("playerData", playerData);
    setScriptData("error", "player with such name already exist");
}
