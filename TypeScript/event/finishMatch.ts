
import {getPlayerID, getPlayerData, getEvent, save, sendMessage } from "../modules/SparkHelper";
import {StartedMatch, StartedMatchState, FinishMatchEvent, TeamType, MatchFinishedMessage} from "../modules/Model";



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

startedMatch.state = winnerTeam == TeamType.Blue ? StartedMatchState.WinBlue : StartedMatchState.WinRed; 
startedMatch.changeWinnerRes1 = 10;
startedMatch.changeWinnerRes2 = 10;
startedMatch.changeWinnerHonor = 10;
startedMatch.changeLoserRes1 = -10;
startedMatch.changeLoserRes2 = -10;
startedMatch.changeLoserHonor = -10;

var playerIDBlue = playerData.startedMatch.playerIDBlue;
var playerIDRed = playerData.startedMatch.playerIDRed;
var playerDataBlue = getPlayerData(playerIDBlue);
var playerDataRed= getPlayerData(playerIDRed);

playerDataBlue.startedMatch = startedMatch; 
playerDataRed.startedMatch = startedMatch; 

save(playerDataBlue);
save(playerDataRed);

var messageBlue : MatchFinishedMessage = 
{
	messageType: "MatchFinishedMessage",
	playerData: playerDataBlue,
};
sendMessage(messageBlue, playerIDBlue);

var messageRed: MatchFinishedMessage = 
{
	messageType: "MatchFinishedMessage",
	playerData: playerDataRed,
};
sendMessage(messageRed, playerIDRed);
