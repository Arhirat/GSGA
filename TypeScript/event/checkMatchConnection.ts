
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

var isOnline1 = playerIsOnline(startedMatch.team1.playerID); 
var isOnline2 = playerIsOnline(startedMatch.team2.playerID); 


if(isOnline1 && !isOnline2)
{
	startedMatch.state = StartedMatchState.WinTeam1;
 	startedMatch.finishReason = MatchFinishReason.Disconnect;
	saveStartedMatch(startedMatch);
}
else if(!isOnline1 && isOnline2)
{
	startedMatch.state = StartedMatchState.WinTeam2;
 	startedMatch.finishReason = MatchFinishReason.Disconnect;
	saveStartedMatch(startedMatch);
}
