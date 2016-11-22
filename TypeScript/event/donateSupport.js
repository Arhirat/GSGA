"use strict";
var SparkHelper_1 = require("../modules/SparkHelper");
var playerID = SparkHelper_1.getPlayerID();
var playerData = SparkHelper_1.getPlayerData(playerID);
if (playerData == null) {
    throw "playerData == null";
}
playerData.donateExpiredDateTime = SparkHelper_1.addDtDay(SparkHelper_1.getDtNow(), 30);
SparkHelper_1.save(playerData);
SparkHelper_1.setScriptData("playerData", playerData);
