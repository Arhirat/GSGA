
import {PlayerData} from "./Model";


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