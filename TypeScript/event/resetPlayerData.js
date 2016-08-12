"use strict";
var SparkHelper_1 = require("../modules/SparkHelper");
var Model_1 = require("../modules/Model");
var playerID = SparkHelper_1.getPlayerID();
var playerData = Model_1.getDefaultPlayerData(playerID);
SparkHelper_1.save(playerData);
