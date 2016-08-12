
module PatternFinder (
	PatternFinder(runPatternFinder), 
	findString, 
	findSpace, 
	findWord, 
	isPath, 
	isAvailable, 
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
 

findString :: String -> PatternFinder String  
findString p = PatternFinder $ \s -> case findSubstring p s of 
	Nothing -> Nothing
  	Just (a, b) -> Just (a, b, a) 


findSpace :: PatternFinder ()  
findSpace = PatternFinder $ \s -> if head s == ' ' 
	then case runPatternFinder findSpace (tail s) of 
		Nothing -> undefined
		Just (_, b, _) -> Just ([], b, ())
	else Just ([], s, ())

isPath :: Char -> Bool 
isPath c = or [isAvailable c, c == '.', c == '/', c == '_'] 

isAvailable :: Char -> Bool 
isAvailable c = or [and [c >= 'a', c <= 'z'], and [c >= 'A', c <= 'Z'], and [c >= '0', c <= '9'], c == '_'] 


findWord :: (Char -> Bool) -> PatternFinder String   
findWord fun = PatternFinder $ \s -> if fun (head s)
	then case runPatternFinder (findWord fun) (tail s) of
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










