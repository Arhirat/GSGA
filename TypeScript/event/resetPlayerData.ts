import {getPlayerID, save } from "../modules/SparkHelper";
import {getDefaultPlayerData} from "../modules/Model";


var playerID = getPlayerID();
var playerData = getDefaultPlayerData(playerID);
save(playerData);


