"use strict";
require("SparkHelper")


var playerID = getPlayerID();
var playerData = getPlayerData(playerID);
if (playerData == null) {
    throw "playerData == null";
}
playerData.donateExpiredDateTime = addDtDay(getDtNow(), 30);
save(playerData);
setScriptData("playerData", playerData);
