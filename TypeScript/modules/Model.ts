


const EuropeLocal = "europe";

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

export enum MatchFinishReason
{
	None = 0,
	Win = 1,
	Surrender = 2,
	Disconnect = 3,
	Cheater = 4,
}



// --------- INTERFACE --------------
export interface StartedMatch
{
	matchID: string,
	seed: number,
	teamRed: TeamInfo,
	teamBlue: TeamInfo,
	state: StartedMatchState,
	finishReason: MatchFinishReason,
//	changeWinnerRes1: number,
//	changeWinnerRes2: number,
//	changeWinnerHonor: number,
//	changeLoserRes1: number,
//	changeLoserRes2: number,
//	changeLoserHonor: number,
}

export interface TeamInfo
{
	playerID: string,
	displayName: string,
	avatar: number,
	race: number,
}


export interface PlayerData
{
	playerID: string,
	displayName: string,
	avatar: number,
	race: number,
	star: number,
//	honor: number,
//	league: number,
//	division: number,
//	local: string,
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

export interface GameData
{
	competitionEnd: number,
	seasonEnd: number,
}










// --------- TEST EVENT --------------
export interface TestFinishMatchEvent
{
	win: number
}
export interface TestStartMatchEvent
{
	opponentPlayerID: string,
}
export interface TestSetLeagueDivisionEvent
{
	league: number,
	division: number,
}



// --------- EVENT --------------
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
	reason: MatchFinishReason, 
}

export interface SetAchievementEvent
{
	achievementID: string,
}

export interface SetProfileInfo
{
	displayName: string,
	avatar: number,
	race: number,
}

export interface ApplyBotMatchResult
{
	win: number,
}







// --------- MESSAGE --------------
export interface MatchDataMessage
{
	messageType: string,
	data: string,
	senderPlayerID: string,
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
		displayName: "noname",
		avatar: 0,
		race: 0,
		star: 0,
//        honor: 100,
//		league: 1,
//		division: 3,
//		local: EuropeLocal,
		startedMatch: null
    };
}

export function setStartedMatchWinner(startedMatch: StartedMatch, winnerTeam: TeamType, finishReason: MatchFinishReason)
{
	startedMatch.state = winnerTeam == TeamType.Blue ? StartedMatchState.WinBlue : StartedMatchState.WinRed;
 	startedMatch.finishReason = finishReason;
//	startedMatch.changeWinnerRes1 = 10;
//	startedMatch.changeWinnerRes2 = 10;
//	startedMatch.changeWinnerHonor = 10;
//	startedMatch.changeLoserRes1 = -10;
//	startedMatch.changeLoserRes2 = -10;
//	startedMatch.changeLoserHonor = -10;
}

