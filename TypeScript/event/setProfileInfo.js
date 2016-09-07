"use strict";
var SparkHelper_1 = require("../modules/SparkHelper");
var playerID = SparkHelper_1.getPlayerID();
var playerData = SparkHelper_1.getPlayerData(playerID);
var event = SparkHelper_1.getEvent();
if (playerData == null) {
    throw "playerData == null";
}
playerData.displayName = event.displayName;
playerData.avatar = event.avatar;
SparkHelper_1.save(playerData);
SparkHelper_1.setScriptData("playerData", playerData);
