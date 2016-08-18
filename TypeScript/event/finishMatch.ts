
import {setScriptData, saveStartedMatch, getPlayerID, getPlayerData, getEvent, save, sendMessage } from "../modules/SparkHelper";
import {setStartedMatchWinner, StartedMatch, StartedMatchState, FinishMatchEvent, TeamType, MatchFinishedMessage} from "../modules/Model";



var playerID = getPlayerID();
var playerData = getPlayerData(playerID);
var event = getEvent<FinishMatchEvent>(); 
var winnerTeam = event.winnerTeam;
var finishReason = event.reason;

if(playerData == null)
{
    throw "playerData == null";
}

if(playerData.startedMatch == null)
{
    throw "playerData.startedMatch == null";
}

if(winnerTeam != TeamType.Blue && winnerTeam != TeamType.Red)
	throw "winnerTeam != TeamType.Blue && winnerTeam != TeamType.Red";

if(playerData.startedMatch.state == StartedMatchState.WinBlue || playerData.startedMatch.state == StartedMatchState.WinRed)
{
	setScriptData("status", "match already finished"); 
}
else
{
	var startedMatch = playerData.startedMatch;

	setStartedMatchWinner(startedMatch, winnerTeam, finishReason);
	saveStartedMatch(startedMatch);

	setScriptData("status", "ok"); 
}