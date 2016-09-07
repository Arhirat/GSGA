
import {setScriptData, getPlayerID, getPlayerData, getEvent, save, saveStartedMatch, sendLeaderboardValue} from "../modules/SparkHelper";
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
	throw "playerData.startedMatch.state == StartedMatchState.InProgress";
}

var win = (playerData.startedMatch.state == StartedMatchState.WinBlue && startedMatch.teamBlue.playerID == playerID) || 
	(playerData.startedMatch.state == StartedMatchState.WinRed && startedMatch.teamRed.playerID == playerID);

/*if(win)
{
	playerData.honor += startedMatch.changeWinnerHonor; 
}
else
{
	playerData.honor += startedMatch.changeLoserHonor; 
}*/

playerData.startedMatch = null;

save(playerData);
setScriptData("playerData", playerData);
sendLeaderboardValue(playerData);


