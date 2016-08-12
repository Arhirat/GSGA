
import PatternFinder
import Control.Monad.State
import System.Directory
import System.Process
import Data.List
import Control.Monad.Writer


getEventList path = do 
	c <- getDirectoryContents (pathTypeScript ++ "event")
	let filteredList = flip filter c $ \f -> and [f /= ".", f /= "..", containSubstring ".ts" f]  
	return filteredList  


write s = tell [s ++ "\n"] 


fileText :: [String] -> String
fileText eventList = concat $ execWriter $ do 
	flip mapM eventList $ \m -> do 
		write "echo on"
 		write $ "\"" ++ pathNode ++ "\" \"" ++ pathTsc ++ "\" " ++ pathTypeScript ++ "event\\" ++ m
		write "echo off"
		write $ "if NOT %errorlevel% == 0 ("
--		write $ "\techo Failure Reason Given is %errorlevel%"
   		write $ "\texit /b %errorlevel%"
		write $ ")"
	write "Converter.exe"


pathNode = "c:\\Program Files\\nodejs\\node.exe" 
pathTsc = "c:\\Users\\Shurik\\AppData\\Roaming\\npm\\node_modules\\typescript\\bin\\tsc" 
pathTypeScript = "..\\TypeScript\\" 


main = do
	eventList <- getEventList pathTypeScript
	print eventList

	let file = (pathTypeScript ++ "event\\") ++ head eventList
	writeFile "Assemble.cmd" $ fileText eventList






