
import {setScriptData, getPlayerID, getPlayerData, getEvent, save, saveStartedMatch, sendLeaderboardValue} from "../modules/SparkHelper";
import {TestSetLeagueDivisionEvent} from "../modules/Model";



var playerID = getPlayerID();
var playerData = getPlayerData(playerID);
var event = getEvent<TestSetLeagueDivisionEvent>();  

playerData.league = event.league;
playerData.division = event.division;

save(playerData);
setScriptData("playerData", playerData);
sendLeaderboardValue(playerData);


