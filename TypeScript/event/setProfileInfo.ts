
import {getPlayerID, getPlayerData, getEvent, save, setScriptData} from "../modules/SparkHelper";
import {SetProfileInfo} from "../modules/Model";



var playerID = getPlayerID();
var playerData = getPlayerData(playerID);
var event = getEvent<SetProfileInfo>();

if(playerData == null)
{
    throw "playerData == null";
}

playerData.displayName = event.displayName;
playerData.avatar = event.avatar;

save(playerData);
setScriptData("playerData", playerData);


