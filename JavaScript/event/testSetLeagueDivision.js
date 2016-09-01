"use strict";
require("SparkHelper")


var playerID = getPlayerID();
var playerData = getPlayerData(playerID);
var event = getEvent();
playerData.league = event.league;
playerData.division = event.division;
save(playerData);
setScriptData("playerData", playerData);
sendLeaderboardValue(playerData);
