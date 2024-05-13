import { createContext, useState} from "react";
import { TURNS } from "../utils/constants";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [grid, setGrid] = useState(Array(9).fill(null)); 
    const [turn, setTurn] = useState(TURNS.X);
    const [winner, setWinner] = useState(null);
    const [game, setGame] = useState();

    return (
        <GameContext.Provider value={{grid, setGrid, turn, setTurn, winner, setWinner, game, setGame}}>
            {children}
        </GameContext.Provider>
    );
}