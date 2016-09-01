import {getPlayerID, getPlayerData, save, setScriptData, sendLeaderboardValue} from "../modules/SparkHelper";
import {getDefaultPlayerData} from "../modules/Model";


var playerID = getPlayerID();
var playerData = getPlayerData(playerID);

if(playerData == null)
{
    playerData = getDefaultPlayerData(playerID);
    save(playerData);
	sendLeaderboardValue(playerData);
}

setScriptData("playerData", playerData);