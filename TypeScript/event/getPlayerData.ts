import {getPlayerID, save, setScriptData} from "../modules/SparkHelper";
import {getDefaultPlayerData} from "../modules/Model";


var playerID = getPlayerID();
var playerData = getDefaultPlayerData(playerID);

if(playerData == null)
{
    playerData = getDefaultPlayerData(playerID);
    save(playerData);
}

setScriptData("playerData", playerData);