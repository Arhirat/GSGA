
import {getPlayerID, getPlayerData, getEvent, sendMessage } from "../modules/SparkHelper";
import {StartedMatchState, SendMatchDataEvent, MatchDataMessage} from "../modules/Model";



var playerID = getPlayerID();
var playerData = getPlayerData(playerID);
var event = getEvent<SendMatchDataEvent>(); 

if(playerData == null)
{
    throw "playerData == null";
}

if(playerData.startedMatch == null)
{
    throw "playerData.startedMatch == null";
}

if(playerData.startedMatch.state != StartedMatchState.WinBlue && playerData.startedMatch.state != StartedMatchState.WinRed)
{
	var message : MatchDataMessage =
 	{
		messageType: "MatchDataMessage", 
		data: event.data,
		senderPlayerID: playerID,
	};
	sendMessage(message, event.playerID);
}