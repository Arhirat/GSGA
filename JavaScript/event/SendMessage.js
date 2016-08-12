// ====================================================================================================
//
// Cloud Code for SendMessage, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================

var playerData = Spark.runtimeCollection("playerData"); 
var currentPlayerID = Spark.getPlayer().getPlayerId(); 
var currentPlayer = playerData.findOne({"playerID": currentPlayerID}); 


var gold = Spark.getData().gold; // we get the xp input from Unity
var text = Spark.getData().text; // we get the xp input from Unity
var secondPlayerID = Spark.getData().playerID; // we get the xp input from Unity
var secondPlayer = playerData.findOne({"playerID": secondPlayerID}); 

currentPlayer.playerGold = currentPlayer.playerGold - gold;
secondPlayer.playerGold = secondPlayer.playerGold + gold;

playerData.update({
        "playerID": currentPlayerID
    }, //Looks for a doc with the id of the current player
    {
        "$set": currentPlayer
    }, // Uses the $set mongo modifier to set old player data to the current player data
    true, // Create the document if it does not exist (upsert)
    false);
    
playerData.update({
        "playerID": secondPlayerID
    }, //Looks for a doc with the id of the current player
    {
        "$set": secondPlayer
    }, // Uses the $set mongo modifier to set old player data to the current player data
    true, // Create the document if it does not exist (upsert)
    false);
    
Spark.message().setMessageData({
    "type": 1,
    "text": text,
    "sender": currentPlayerID}).setPlayerIds(secondPlayerID).send();