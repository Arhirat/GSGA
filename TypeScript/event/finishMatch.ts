
import {saveStartedMatch, getPlayerID, getPlayerData, getEvent, save, sendMessage } from "../modules/SparkHelper";
import {setStartedMatchWinner, StartedMatch, StartedMatchState, FinishMatchEvent, TeamType, MatchFinishedMessage} from "../modules/Model";



var playerID = getPlayerID();
var playerData = getPlayerData(playerID);
var event = getEvent<FinishMatchEvent>(); 
var winnerTeam = event.winnerTeam;

if(playerData == null)
{
    throw "playerData == null";
}

if(playerData.startedMatch == null)
{
    throw "playerData.startedMatch == null";
}

if(playerData.startedMatch.state == StartedMatchState.WinBlue || playerData.startedMatch.state == StartedMatchState.WinRed)
{
	throw "# Match already finished";
}

var startedMatch = playerData.startedMatch;

setStartedMatchWinner(startedMatch, winnerTeam);
saveStartedMatch(startedMatch);
