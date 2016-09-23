"use strict";
var SparkHelper_1 = require("../modules/SparkHelper");
var playerID = SparkHelper_1.getPlayerID();
var playerData = SparkHelper_1.getPlayerData(playerID);
var event = SparkHelper_1.getEvent();
if (playerData == null) {
    throw "playerData == null";
}
if (playerData.startedMatch != null) {
    throw "playerData.startedMatch != null";
}
if (event.win == 1) {
    playerData.star += 1;
}
SparkHelper_1.save(playerData);
SparkHelper_1.setScriptData("playerData", playerData);
