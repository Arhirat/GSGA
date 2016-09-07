echo on
"c:\Program Files\nodejs\node.exe" "c:\Users\Shurik\AppData\Roaming\npm\node_modules\typescript\bin\tsc" ..\TypeScript\event\testStartMatch.ts
echo off
if NOT %errorlevel% == 0 (
	exit /b %errorlevel%
)
echo on
"c:\Program Files\nodejs\node.exe" "c:\Users\Shurik\AppData\Roaming\npm\node_modules\typescript\bin\tsc" ..\TypeScript\event\testSetLeagueDivision.ts
echo off
if NOT %errorlevel% == 0 (
	exit /b %errorlevel%
)
echo on
"c:\Program Files\nodejs\node.exe" "c:\Users\Shurik\AppData\Roaming\npm\node_modules\typescript\bin\tsc" ..\TypeScript\event\testFinishMatch.ts
echo off
if NOT %errorlevel% == 0 (
	exit /b %errorlevel%
)
echo on
"c:\Program Files\nodejs\node.exe" "c:\Users\Shurik\AppData\Roaming\npm\node_modules\typescript\bin\tsc" ..\TypeScript\event\startMatch.ts
echo off
if NOT %errorlevel% == 0 (
	exit /b %errorlevel%
)
echo on
"c:\Program Files\nodejs\node.exe" "c:\Users\Shurik\AppData\Roaming\npm\node_modules\typescript\bin\tsc" ..\TypeScript\event\setProfileInfo.ts
echo off
if NOT %errorlevel% == 0 (
	exit /b %errorlevel%
)
echo on
"c:\Program Files\nodejs\node.exe" "c:\Users\Shurik\AppData\Roaming\npm\node_modules\typescript\bin\tsc" ..\TypeScript\event\setAchievement.ts
echo off
if NOT %errorlevel% == 0 (
	exit /b %errorlevel%
)
echo on
"c:\Program Files\nodejs\node.exe" "c:\Users\Shurik\AppData\Roaming\npm\node_modules\typescript\bin\tsc" ..\TypeScript\event\sendMatchData.ts
echo off
if NOT %errorlevel% == 0 (
	exit /b %errorlevel%
)
echo on
"c:\Program Files\nodejs\node.exe" "c:\Users\Shurik\AppData\Roaming\npm\node_modules\typescript\bin\tsc" ..\TypeScript\event\resetPlayerData.ts
echo off
if NOT %errorlevel% == 0 (
	exit /b %errorlevel%
)
echo on
"c:\Program Files\nodejs\node.exe" "c:\Users\Shurik\AppData\Roaming\npm\node_modules\typescript\bin\tsc" ..\TypeScript\event\getPlayerData.ts
echo off
if NOT %errorlevel% == 0 (
	exit /b %errorlevel%
)
echo on
"c:\Program Files\nodejs\node.exe" "c:\Users\Shurik\AppData\Roaming\npm\node_modules\typescript\bin\tsc" ..\TypeScript\event\getGameData.ts
echo off
if NOT %errorlevel% == 0 (
	exit /b %errorlevel%
)
echo on
"c:\Program Files\nodejs\node.exe" "c:\Users\Shurik\AppData\Roaming\npm\node_modules\typescript\bin\tsc" ..\TypeScript\event\finishMatch.ts
echo off
if NOT %errorlevel% == 0 (
	exit /b %errorlevel%
)
echo on
"c:\Program Files\nodejs\node.exe" "c:\Users\Shurik\AppData\Roaming\npm\node_modules\typescript\bin\tsc" ..\TypeScript\event\disconnectMatch.ts
echo off
if NOT %errorlevel% == 0 (
	exit /b %errorlevel%
)
echo on
"c:\Program Files\nodejs\node.exe" "c:\Users\Shurik\AppData\Roaming\npm\node_modules\typescript\bin\tsc" ..\TypeScript\event\checkMatchConnection.ts
echo off
if NOT %errorlevel% == 0 (
	exit /b %errorlevel%
)
echo on
"c:\Program Files\nodejs\node.exe" "c:\Users\Shurik\AppData\Roaming\npm\node_modules\typescript\bin\tsc" ..\TypeScript\event\applyMatchResult.ts
echo off
if NOT %errorlevel% == 0 (
	exit /b %errorlevel%
)
Converter.exe
