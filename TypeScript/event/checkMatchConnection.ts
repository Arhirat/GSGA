
import {saveStartedMatch, playerIsOnline, getPlayerID, getPlayerData, getEvent, save, sendMessage } from "../modules/SparkHelper";
import {MatchFinishReason, StartedMatch, StartedMatchState, FinishMatchEvent, TeamType, MatchFinishedMessage} from "../modules/Model";



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

var isOnlineBlue = playerIsOnline(startedMatch.teamBlue.playerID); 
var isOnlineRed = playerIsOnline(startedMatch.teamRed.playerID); 


if(isOnlineBlue && !isOnlineRed)
{
	startedMatch.state = StartedMatchState.WinBlue;
 	startedMatch.finishReason = MatchFinishReason.Disconnect;
	saveStartedMatch(startedMatch);
}
else if(!isOnlineBlue && isOnlineRed)
{
	startedMatch.state = StartedMatchState.WinRed;
 	startedMatch.finishReason = MatchFinishReason.Disconnect;
	saveStartedMatch(startedMatch);
}
