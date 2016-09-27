import {setScriptData, getPlayerID, getPlayerData, getEvent, startMatch } from "../modules/SparkHelper";
import {StartBotMatchEvent, getBotPlayerData} from "../modules/Model";

var event = getEvent<StartBotMatchEvent>(); 


var currentPlayerID = getPlayerID();
var currentPlayerData = getPlayerData(currentPlayerID);
if(currentPlayerData == null)
	throw "currentPlayerData == null";

if(currentPlayerData.startedMatch != null)
	throw "currentPlayerData.startedMatch != null";


var playerData1 = getPlayerData(currentPlayerID);
var playerData2 = getBotPlayerData(event.displayName, event.avatar, event.race);

startMatch(playerData1, playerData2, "botMatch");


setScriptData("status", "started by myself");
