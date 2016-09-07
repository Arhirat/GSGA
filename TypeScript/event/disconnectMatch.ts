
import {setScriptData, getPlayerID, getPlayerData, getEvent, save, saveStartedMatch } from "../modules/SparkHelper";
import {StartedMatch, StartedMatchState, TeamType, setStartedMatchWinner, MatchFinishReason} from "../modules/Model";



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
	var winner = startedMatch.teamBlue.playerID == playerID ? TeamType.Red : TeamType.Blue; 
	setStartedMatchWinner(startedMatch, winner, MatchFinishReason.Disconnect);
	saveStartedMatch(startedMatch);
}

setScriptData("playerData", playerData);
