
import {setScriptData, saveStartedMatch, getPlayerID, getPlayerData, getEvent, save, sendMessage } from "../modules/SparkHelper";
import {StartedMatch, StartedMatchState, FinishMatchEvent, TeamType, MatchFinishedMessage} from "../modules/Model";



var playerID = getPlayerID();
var playerData = getPlayerData(playerID);
var event = getEvent<FinishMatchEvent>(); 
var state = event.state;
var finishReason = event.reason;

if(playerData == null)
{
    throw "playerData == null";
}

if(playerData.startedMatch == null)
{
    throw "playerData.startedMatch == null";
}

if(state == StartedMatchState.InProgress)
	throw "state == StartedMatchState.InProgress";

if(playerData.startedMatch.state != StartedMatchState.InProgress)
{
	setScriptData("status", "match already finished"); 
}
else
{
	var startedMatch = playerData.startedMatch;

	startedMatch.state = state;
 	startedMatch.finishReason = finishReason;
	saveStartedMatch(startedMatch);

	setScriptData("status", "ok"); 
}