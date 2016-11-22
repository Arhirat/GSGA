
const EuropeLocal = "europe";

// --------- ENUM --------------
export enum StartedMatchState
{
	InProgress = 1,
	WinTeam1 = 2,
	WinTeam2 = 3,
	Draw = 4,
}

export enum TeamType
{
	Team1 = 1,
	Team2 = 2,
}

export enum MatchFinishReason
{
	None = 0,
	Win = 1,
	Surrender = 2,
	Disconnect = 3,
	Cheater = 4,
	TimeOver = 5,
}



// --------- INTERFACE --------------
export interface StartedMatch
{
	matchID: string,
	seed: number,
	team1: TeamInfo,
	team2: TeamInfo,
	state: StartedMatchState,
	finishReason: MatchFinishReason,
}

export interface TeamInfo
{
	playerID: string,
	displayName: string,
	avatar: number,
	race: number,
	bot: boolean,
	donate: boolean,
}


export interface PlayerData
{
	playerID: string,
	displayName: string,
	avatar: number,
	race: number,
	star: number,
	bot: boolean,
	startedMatch: StartedMatch,
	donateExpiredDateTime: number
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

export interface StartBotMatchEvent
{
	race: number,
	avatar: number,
	displayName: string,
}

export interface SendMatchDataEvent
{
	playerID: string,
	data: string,
}

export interface FinishMatchEvent
{
	state: StartedMatchState,
	reason: MatchFinishReason, 
}

export interface SetAchievementEvent
{
	achievementID: string,
}

export interface DonateEvent
{
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
		bot: false,
		startedMatch: null,
		donateExpiredDateTime: 0,
    };
}

export function getBotPlayerData(displayName: string, avatar: number, race: number): PlayerData 
{
    return {
		playerID: "bot",
		displayName: displayName,
		avatar: avatar,
		race: race,
		star: 0,
		bot: true, 
		startedMatch: null,
		donateExpiredDateTime: 0,
    };
}









