
// --------- ENUM --------------
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



// --------- INTERFACE --------------
export interface StartedMatch
{
	matchID: string,
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

export interface ParticipantInfo
{
	playerID: string,
}

export interface MatchInfo
{
	matchID: string,
	participantList: ParticipantInfo[], 
}










// --------- EVENT --------------
export interface TestFinishMatchEvent
{
	win: number
}
export interface TestStartMatchEvent
{
	opponentPlayerID: string,
}

export interface StartMatchEvent
{
	matchID: string,
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







// --------- MESSAGE --------------
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








// --------- FUNCTION --------------
export function getRandomInt(min: number, max:number): number
{
	return Math.floor(Math.random() * (max - min)) + min; 
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
