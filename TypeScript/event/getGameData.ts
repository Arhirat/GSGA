
import {getGameData, setScriptData } from "../modules/SparkHelper";
import {GameData} from "../modules/Model";


//var gameData = getGameData(); 
var gameData : GameData = 
{
	version: 1,
};
setScriptData<GameData>("data", gameData);
