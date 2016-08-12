"use strict";
var exports = {};

(function (StartetMatchState) {
    StartetMatchState[StartetMatchState["InProgress"] = 1] = "InProgress";
    StartetMatchState[StartetMatchState["WinBlue"] = 2] = "WinBlue";
    StartetMatchState[StartetMatchState["WinRed"] = 3] = "WinRed";
})(exports.StartetMatchState || (exports.StartetMatchState = {}));
var StartetMatchState = exports.StartetMatchState;
function getDefaultPlayerData(playerID) {
    return {
        playerID: playerID,
        honor: 100,
        league: 1,
        division: 1,
        startedMatch: null
    };
}
exports.getDefaultPlayerData = getDefaultPlayerData;
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
exports.getRandomInt = getRandomInt;
/*


function load()
{
    var playerDataList = Spark.runtimeCollection("playerData");
    var playerID = Spark.getPlayer().getPlayerId();
    var playerData = playerDataList.findOne({"playerID": playerID});
    
    var result =
    {
        playerID: playerID,
        playerData: playerData,
    };
    
    return result;
}

function save(record)
{
    var playerDataList = Spark.runtimeCollection("playerData");
    playerDataList.update({"playerID": record.playerID}, {"$set": record.playerData}, true, false);
}
*/ 
