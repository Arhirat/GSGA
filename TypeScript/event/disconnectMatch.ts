
import {setScriptData, getPlayerID, getPlayerData, getEvent, save, saveStartedMatch } from "../modules/SparkHelper";
import {StartedMatch, StartedMatchState, TeamType, MatchFinishReason} from "../modules/Model";



var playerID = getPlayerID();
var playerData = getPlayerData(playerID);

if(playerData == null)
{
    throw "playerData == null";
}

if(playerData.startedMatch == null)
{
    throw "playerData.startedMatch == null";
}

var startedMatch = playerData.startedMatch;

if(playerData.startedMatch.state == StartedMatchState.InProgress)
{
	var state = startedMatch.teamBlue.playerID == playerID ? StartedMatchState.WinRed : StartedMatchState.WinBlue; 
	startedMatch.state = state;
 	startedMatch.finishReason = MatchFinishReason.Disconnect;
	saveStartedMatch(startedMatch);
}

setScriptData("playerData", playerData);
