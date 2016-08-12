require("SparkHelper")
require("Model")



var playerID = getPlayerID();
var playerData = getPlayerData(playerID);
var event = getEvent();
var opponentPlayerID = event.opponentPlayerID;
if (playerData == null) {
    throw "playerData == null";
}
if (playerData.startedMatch != null) {
    throw "playerData.startedMatch != null";
}
var seed = getRandomInt(0, 10000);
var blue = getRandomInt(0, 2);
var startedMatch = {
    seed: seed,
    playerIDRed: blue == 1 ? playerID : opponentPlayerID,
    playerIDBlue: blue == 1 ? opponentPlayerID : playerID,
    state: StartetMatchState.InProgress
};
playerData.startedMatch = startedMatch;
save(playerData);
