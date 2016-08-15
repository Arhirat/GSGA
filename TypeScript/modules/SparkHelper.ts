
import {PlayerData, MatchInfo} from "./Model";


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










