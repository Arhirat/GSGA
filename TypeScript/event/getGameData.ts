
import {getGameData, setScriptData } from "../modules/SparkHelper";
import {GameData} from "../modules/Model";


var gameData = getGameData(); 
setScriptData<GameData>("data", gameData);
