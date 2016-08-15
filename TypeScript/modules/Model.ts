
export enum StartedMatchState
{
	InProgress = 1,
	WinBlue = 2,
	WinRed = 3,
}

export enum TeamType
{
	Blue = 1,
	Red = 2,
}


export interface StartedMatch
{
	seed: number,
	playerIDRed: string,
	playerIDBlue: string,
	state: StartedMatchState,
	changeWinnerRes1: number,
	changeWinnerRes2: number,
	changeWinnerHonor: number,
	changeLoserRes1: number,
	changeLoserRes2: number,
	changeLoserHonor: number,
}


export interface PlayerData
{
	playerID: string,
	honor: number,
	league: number,
	division: number,
	startedMatch: StartedMatch
}

export function getDefaultPlayerData(playerID: string): PlayerData 
{
    return {
		playerID: playerID,
        honor: 100,
		league: 1,
		division: 1,
		startedMatch: null
    };
}





export interface TestFinishMatchEvent
{
	win: number
}
export interface TestStartMatchEvent
{
	opponentPlayerID: string,
}

export interface SendMatchDataEvent
{
	playerID: string,
	data: string,
}

export interface FinishMatchEvent
{
	winnerTeam: TeamType,
}



export interface MatchDataMessage
{
	messageType: string,
	data: string,
}

export interface MatchStartedMessage
{
	messageType: string,
	playerData: PlayerData,
}

export interface MatchFinishedMessage
{
	messageType: string,
	playerData: PlayerData,
}


export function getRandomInt(min: number, max:number): number
{
	return Math.floor(Math.random() * (max - min)) + min; 
}

/*


function load()
{
    var playerDataList = Spark.runtimeCollection("playerData");
    var playerID = Spark.getPlayer().getPlayerId();
    var playerData = playerDataList.findOne({"playerID": playerID}); 
    
    var result =  
    {
        playerID: playerID,
        playerData: playerData,
    };
    
    return result;
}

function save(record)
{
    var playerDataList = Spark.runtimeCollection("playerData");
    playerDataList.update({"playerID": record.playerID}, {"$set": record.playerData}, true, false);
}
*/