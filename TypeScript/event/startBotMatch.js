"use strict";
var SparkHelper_1 = require("../modules/SparkHelper");
var Model_1 = require("../modules/Model");
var event = SparkHelper_1.getEvent();
var currentPlayerID = SparkHelper_1.getPlayerID();
var currentPlayerData = SparkHelper_1.getPlayerData(currentPlayerID);
if (currentPlayerData == null)
    throw "currentPlayerData == null";
if (currentPlayerData.startedMatch != null)
    throw "currentPlayerData.startedMatch != null";
var playerData1 = SparkHelper_1.getPlayerData(currentPlayerID);
var playerData2 = Model_1.getBotPlayerData(event.displayName, event.avatar, event.race);
SparkHelper_1.startMatch(playerData1, playerData2, "botMatch");
SparkHelper_1.setScriptData("status", "started by myself");
