import {getPlayerID, getPlayerData, getEvent, save } from "../modules/SparkHelper";
import {StartedMatch, StartedMatchState, getRandomInt, getDefaultPlayerData, TestStartMatchEvent} from "../modules/Model";



var playerID = getPlayerID();
var playerData = getPlayerData(playerID);
var event = getEvent<TestStartMatchEvent>(); 
var opponentPlayerID = event.opponentPlayerID;

if(playerData == null)
{
    throw "playerData == null";
}

if(playerData.startedMatch != null)
{
    throw "playerData.startedMatch != null";
}

var seed = getRandomInt(0, 10000);
var blue = getRandomInt(0, 2);

var startedMatch : StartedMatch = 
{
    seed: seed,
	playerIDRed: blue == 1 ? playerID : opponentPlayerID,
	playerIDBlue: blue == 1 ? opponentPlayerID : playerID,
	state: StartedMatchState.InProgress,
	changeWinnerRes1: 0,
	changeWinnerRes2: 0,
	changeWinnerHonor: 0,
	changeLoserRes1: 0,
	changeLoserRes2: 0,
	changeLoserHonor: 0,
};

playerData.startedMatch = startedMatch;

save(playerData);
