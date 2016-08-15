
import PatternFinder
import Control.Monad.State
import System.Directory
import Data.List



noDo :: (Monad m) => m ()
noDo = return ()


moduleInitFinder :: PatternFinder (String, String)
moduleInitFinder = do 
	findPattern "var"
	nextWord spaceChar 
	m <- nextWord variableChar
 	findPattern "require"
	findPattern "\""
	path <- nextWord pathChar 
	findPattern ";"
	return (m, path)
	

moduleUseStrictFinder :: PatternFinder ()
moduleUseStrictFinder = do 
	findPattern "\"use strict\";"
	noDo


moduleUsageFinder :: String -> PatternFinder ()
moduleUsageFinder n = do 
	findPattern n
	findPattern "."
	noDo
	
codeUsageFinder :: PatternFinder String
codeUsageFinder = do 
	findPattern "//TypeScriptCode"
	findPattern "/*SparkCode"
	code <- findPattern "*/"
	return code


parser :: [String] -> Bool -> Parser IO () 
parser moduleList isModule = do 
	replace moduleUseStrictFinder $ \_ -> ("", noDo)
	moduleNameList <- doWhile $ replace moduleInitFinder $ \(n, p) -> ("", return n)
	flip mapM_ moduleNameList $ \moduleName -> doWhile $ replace (moduleUsageFinder moduleName) $ \_ -> ("", noDo)  
	doWhile $ replace codeUsageFinder $ \code -> (code, noDo)

	if isModule then writeAtStart $ "var exports = {};\n" else noDo
	let usedModuleList = flip filter moduleList (\m -> or $ flip map moduleNameList (\m2 -> startWithSubstring m m2))    
 	flip mapM_ (reverse usedModuleList) $ \m -> writeAtStart $ "require(\"" ++ m ++ "\")\n"
	writeAtStart $ "\"use strict\";\n"

	return ()


removeExt :: String -> String -> String
removeExt e s = case runPatternFinder (findPattern e) s of 
	Nothing -> s
	Just (a, b, _) -> a ++ b


getModuleList path = do 
	c <- getDirectoryContents (path ++ "modules")
	let filteredList = flip filter c $ \f -> and [f /= ".", f /= "..", containSubstring ".ts" f, f /= "Spark.ts"]
  	return $ flip map filteredList (removeExt ".ts") 


getEventList path = do 
	c <- getDirectoryContents (path ++ "event")
	let filteredList = flip filter c $ \f -> and [f /= ".", f /= "..", containSubstring ".ts" f]  
	return $ flip map filteredList (removeExt ".ts") 



convertFile :: [String] -> Bool -> String -> String -> IO ()
convertFile moduleList isModule i o = do 
	putStr $ "Converting file:\n" 
	putStr $ "   input: " ++ i ++ "\n"
	putStr $ "   output: " ++ o ++ "\n"
	text <- readFile i
	text' <- applyParser text $ parser moduleList isModule
	writeFile o text'
	putStr $ "\n" 


pathTypeScript = "..\\TypeScript\\" 
pathJavaScript = "..\\JavaScript\\" 

main = do
	moduleList <- getModuleList pathTypeScript
	print moduleList
	eventList <- getEventList pathTypeScript
	print eventList

	flip mapM_ (filter (\m -> True) moduleList) $ \m -> convertFile moduleList True (pathTypeScript ++ "modules\\" ++ m ++ ".js") (pathJavaScript ++ "modules\\" ++ m ++ ".js") 
	flip mapM_ eventList $ \m -> convertFile moduleList False (pathTypeScript ++ "event\\" ++ m ++ ".js") (pathJavaScript ++ "event\\" ++ m ++ ".js") 
	putStr "OK\n"

--	getChar






