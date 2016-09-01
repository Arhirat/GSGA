"use strict";
require("SparkHelper")
require("Model")



var playerID = getPlayerID();
var playerData = getPlayerData(playerID);
if (playerData == null) {
    playerData = getDefaultPlayerData(playerID);
    save(playerData);
    sendLeaderboardValue(playerData);
}
setScriptData("playerData", playerData);
