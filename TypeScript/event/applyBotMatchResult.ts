
import {setScriptData, getPlayerID, getPlayerData, getEvent, save} from "../modules/SparkHelper";
import {ApplyBotMatchResult} from "../modules/Model";



var playerID = getPlayerID();
var playerData = getPlayerData(playerID);
var event = getEvent<ApplyBotMatchResult>(); 

if(playerData == null)
{
    throw "playerData == null";
}

if(playerData.startedMatch != null)
{
    throw "playerData.startedMatch != null";
}

if(event.win == 1)
{
	playerData.star += 1; 
}

save(playerData);
setScriptData("playerData", playerData);


