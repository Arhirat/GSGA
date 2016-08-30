
import {playerSetAchievement, getEvent} from "../modules/SparkHelper";
import {SetAchievementEvent} from "../modules/Model";

var event = getEvent<SetAchievementEvent>(); 
playerSetAchievement(event.achievementID);
