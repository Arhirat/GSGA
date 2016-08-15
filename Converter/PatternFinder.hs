
module PatternFinder (
	PatternFinder(runPatternFinder), 
	findPattern, 
	nextWord, 
	spaceChar, 
	pathChar, 
	variableChar, 
	Parser, 
	doWhile, 
	replace, 
	applyParser, 
	containSubstring, 
	startWithSubstring,
	writeAtStart,
 	) where 

import Control.Monad.State
import Data.Maybe

newtype PatternFinder a = PatternFinder {runPatternFinder :: String -> Maybe (String, String, a) }




compareString :: String -> String -> Maybe String  
compareString [] t = Just t
compareString _ [] = Nothing
compareString (h1:t1) (h2:t2) = if h1 == h2 then compareString t1 t2 else Nothing


containSubstring :: String -> String -> Bool
containSubstring p s = isJust $ findSubstring p s   

startWithSubstring :: String -> String -> Bool
startWithSubstring p s = isJust $ compareString p s  

findSubstring :: String -> String -> Maybe (String, String)
findSubstring p [] = Nothing
findSubstring p s = case compareString p s of 
	Just t -> Just ([], t)
 	Nothing -> case s of 
		[] -> Nothing 
		(h:t) -> case findSubstring p t of 
  			Nothing -> Nothing 
			Just (a, b) -> Just (h:a, b)
 

findPattern :: String -> PatternFinder String  
findPattern p = PatternFinder $ \s -> case findSubstring p s of 
	Nothing -> Nothing
  	Just (a, b) -> Just (a, b, a) 


type CharFilter = Char -> Bool

unionChar :: [CharFilter] -> CharFilter
unionChar list = fmap or $ sequence list
  
spaceChar :: CharFilter
spaceChar c = c == ' ' 

anyChar :: [Char] -> CharFilter 
anyChar = flip elem  

pathChar :: CharFilter 
pathChar = unionChar [variableChar, anyChar "./"] 

rangeChar :: Char -> Char -> CharFilter
rangeChar c1 c2 c = and [c >= c1, c <= c2]
 
numberChar :: CharFilter 
numberChar = rangeChar '0' '9' 

alphabetChar :: CharFilter 
alphabetChar = unionChar [rangeChar 'a' 'z', rangeChar 'A' 'Z'] 

variableChar :: CharFilter
variableChar = unionChar [alphabetChar, numberChar, anyChar "_"]


nextWord :: CharFilter -> PatternFinder String   
nextWord fun = PatternFinder $ \s -> if fun (head s)
	then case runPatternFinder (nextWord fun) (tail s) of
		Nothing -> undefined
		Just (_, b, c) -> Just ([], b, (head s): c)   
	else Just([], s, [])


instance Monad (PatternFinder) where 
	return x = PatternFinder $ \s -> Just ([], s, x)
	(>>=) ma amb = PatternFinder $ \s -> case runPatternFinder ma s of  
		Nothing -> Nothing 
		Just (q, w, a) -> case runPatternFinder (amb a) w of 
			Nothing -> Nothing
 			Just (e, r, b) -> Just (q, r, b)


type Parser m a = StateT String m a


applyParser :: (Monad m) => String -> Parser m a -> m String 
applyParser s p = execStateT p s 


doWhile :: (Monad m) => m (Maybe b) -> m [b]
doWhile m = do 
	r <- m
 	case r of 
		Nothing -> return []
		Just b -> do 
			t <- doWhile m
			return (b:t)


replace :: (Monad m) => (PatternFinder a) -> (a -> (String, Parser m b)) -> Parser m (Maybe b) 
replace pf fun = do 
	text <- get 
	case runPatternFinder pf text of 
 		Nothing -> return Nothing 
		Just (a, b, c) -> do 
			put (a ++ (fst $ fun c) ++ b)
			r <- snd $ fun c
			return $ Just r


writeAtStart :: (Monad m) => String -> Parser m () 
writeAtStart s = do 
	text <- get 
	put $ s ++ text

{-main = do 

	text <- readFile "c:\\Repo\\GalaxyAdmiralsGameSparks\\TypeScript\\event\\resetPlayerData.js"
	text' <- applyParser text parser
	writeFile "c:\\Repo\\GalaxyAdmiralsGameSparks\\TypeScript\\event\\resetPlayerData2.js" text'
-}










