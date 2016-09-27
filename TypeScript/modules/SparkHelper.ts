
import {MatchFinishedMessage, StartedMatch, GameData, PlayerData, MatchInfo, TeamInfo, getRandomInt, StartedMatchState, MatchFinishReason, MatchStartedMessage} from "./Model";


export function getPlayerID(): string
{
//TypeScriptCode
	throw "Заглушка";
/*SparkCode
	return Spark.getPlayer().getPlayerId();
*/
}

export function getPlayerData(playerID: string): PlayerData
{
//TypeScriptCode
	throw "Заглушка";
/*SparkCode
	var playerDataList = Spark.runtimeCollection("playerData"); 
    return playerDataList.findOne({"playerID": playerID}); 
*/
}

export function getGameData(): GameData
{
//TypeScriptCode
	throw "Заглушка";
/*SparkCode
	var gameDataCollection = Spark.runtimeCollection("gameData");
	return gameDataCollection.findOne();
*/
}



export function save(playerData: PlayerData)
{
//TypeScriptCode
	throw "Заглушка";
/*SparkCode
	var playerDataList = Spark.runtimeCollection("playerData"); 
    playerDataList.update({"playerID": playerData.playerID}, {"$set": playerData}, true, false);
*/
}


export function getEvent<T>(): T
{
//TypeScriptCode
	throw "Заглушка";
/*SparkCode
	return Spark.getData(); 
*/
}

export function sendMessage<T>(data: T, playerID: string)
{
//TypeScriptCode
	throw "Заглушка";
/*SparkCode
	Spark.message().setMessageData(data).setPlayerIds(playerID).send();
*/
}

export function setScriptData<T>(variable: string, data: T)
{
//TypeScriptCode
	throw "Заглушка";
/*SparkCode
	Spark.setScriptData(variable, data);
*/
}

export function loadMatch(matchID: string): MatchInfo
{
//TypeScriptCode
	throw "Заглушка";
/*SparkCode
	var match = Spark.getMultiplayer().loadMatch(matchID);
	if(match == null)    
		return null;
	
	var participantList = [];
			
	for (var _i = 0, _a = match.getParticipants(); _i < _a.length; _i++) 
	{
		var participant = _a[_i];
		var player = participant.getPlayer();
		participantList[_i] = 
		{
//                name: player.
			playerID: player.getPlayerId(),
		}
	}
	
	var result = 
	{
		matchID: matchID,
		participantList: participantList,
	};
	return result;
*/
}

export function playerIsOnline(playerID: string): boolean
{
//TypeScriptCode
	throw "Заглушка";
/*SparkCode
	return Spark.loadPlayer(playerID).isOnline();
*/
}


export function playerSetAchievement(achievementID: string)
{
	//TypeScriptCode
		throw "Заглушка";
	/*SparkCode
		var player = Spark.getPlayer();
		player.addAchievement(achievementID);
	*/
}

export function saveStartedMatch(startedMatch: StartedMatch)
{
	var playerIDBlue = startedMatch.teamBlue.playerID;
	var playerIDRed = startedMatch.teamRed.playerID;
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

}

export function startMatch(playerData1: PlayerData, playerData2: PlayerData, matchID: string)
{
	var teamInfo1 : TeamInfo =
	{
		playerID: playerData1.playerID,
		displayName: playerData1.displayName,
		avatar: playerData1.avatar,
		race: playerData1.race,
		bot: playerData1.bot, 
	} 
	var teamInfo2 : TeamInfo =
	{
		playerID: playerData2.playerID,
		displayName: playerData2.displayName,
		avatar: playerData2.avatar,
		race: playerData2.race,
		bot: playerData2.bot, 
	} 
	
	var seed = getRandomInt(0, 10000);
	var blue = getRandomInt(0, 2);
	
	var startedMatch : StartedMatch = 
	{
		matchID: matchID,
		seed: seed,
		teamRed: blue == 1 ? teamInfo1 : teamInfo2,
		teamBlue: blue == 1 ? teamInfo2 : teamInfo1,
		state: StartedMatchState.InProgress,
		finishReason: MatchFinishReason.None,
	};
	
	if(playerData1.bot == false)
	{
		playerData1.startedMatch = startedMatch;
		save(playerData1);
		var message1 : MatchStartedMessage =
		{
			messageType: "MatchStartedMessage",
			playerData: playerData1,
		};
		sendMessage(message1, playerData1.playerID);
	}	
	
	if(playerData2.bot == false)
	{
		playerData2.startedMatch = startedMatch;
		save(playerData2);
		var message2 : MatchStartedMessage =
		{
			messageType: "MatchStartedMessage",
			playerData: playerData2,
		};
		sendMessage(message2, playerData2.playerID);
	}

}


export function sendLeaderboardValue(playerData: PlayerData)
{
	//TypeScriptCode
		throw "Заглушка";
	/*SparkCode
//		Spark.sendRequest({"@class": ".LogEventRequest", "eventKey": "setLeaderboardGroup", "honor": playerData.honor, "league": playerData.league, "division": playerData.division});
	*/
}

export function resetLeaderboardValue(playerData: PlayerData)
{
	//TypeScriptCode
		throw "Заглушка";
	/*SparkCode
		Spark.sendRequest({"@class": ".LogEventRequest", "eventKey": "setLeaderboardGroup", "honor": -1, "league": playerData.league, "division": playerData.division, "local": playerData.local});
	*/
}


