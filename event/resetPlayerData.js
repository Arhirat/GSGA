require("SparkHelper")
require("Model")



var playerID = getPlayerID();
var playerData = getDefaultPlayerData(playerID);
save(playerData);
