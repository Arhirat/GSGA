import {getPlayerID, getPlayerData, loadMatch, getEvent, save, sendMessage } from "../modules/SparkHelper";
import {MatchStartedMessage, StartedMatchState, StartedMatch, getRandomInt, StartMatchEvent} from "../modules/Model";


var event = getEvent<StartMatchEvent>(); 
var matchID = event.matchID;

var currentPlayerID = getPlayerID();
var currentPlayerData = getPlayerData(currentPlayerID);
if(currentPlayerData == null)
	throw "currentPlayerData == null";

if(currentPlayerData.startedMatch != null && currentPlayerData.startedMatch.matchID == matchID)
	throw "# Match already started";

if(currentPlayerData.startedMatch != null && currentPlayerData.startedMatch.matchID != matchID)
	throw "currentPlayerData.startedMatch != null && currentPlayerData.startedMatch.matchID != matchID";


var match = loadMatch(matchID);

var playerID1 = match.participantList[0].playerID;
var playerID2 = match.participantList[1].playerID;

var seed = getRandomInt(0, 10000);
var blue = getRandomInt(0, 2);

var startedMatch : StartedMatch = 
{
	matchID: matchID,
    seed: seed,
	playerIDRed: blue == 1 ? playerID1 : playerID2,
	playerIDBlue: blue == 1 ? playerID2 : playerID1,
	state: StartedMatchState.InProgress,
	changeWinnerRes1: 0,
	changeWinnerRes2: 0,
	changeWinnerHonor: 0,
	changeLoserRes1: 0,
	changeLoserRes2: 0,
	changeLoserHonor: 0,
};


for (let participant of match.participantList) 
{
	var playerData = getPlayerData(participant.playerID);
	playerData.startedMatch = startedMatch;
	save(playerData);
	
	var message : MatchStartedMessage =
	{
		messageType: "MatchStartedMessage",
		playerData: playerData,
	};
	sendMessage(message, participant.playerID);
}

