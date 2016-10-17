"use strict";
var SparkHelper_1 = require("../modules/SparkHelper");
var playerID = SparkHelper_1.getPlayerID();
var playerData = SparkHelper_1.getPlayerData(playerID);
var event = SparkHelper_1.getEvent();
if (playerData == null) {
    throw "playerData == null";
}
var existingPlayer = SparkHelper_1.findPlayerDataByDisplayName(event.displayName);
if (existingPlayer == null || existingPlayer.playerID == playerID) {
    playerData.displayName = event.displayName;
    playerData.avatar = event.avatar;
    playerData.race = event.race;
    SparkHelper_1.save(playerData);
    SparkHelper_1.setScriptData("playerData", playerData);
}
else {
    SparkHelper_1.setScriptData("playerData", playerData);
    SparkHelper_1.setScriptData("error", "player with such name already exist");
}
