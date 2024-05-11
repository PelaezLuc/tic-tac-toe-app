import { useState } from "react";
import GameCell from "./GameCell";
import { TURNS, WINNER_COMBOS } from "../constants"; 

export default function GameGrid() {
    const [turn, setTurn] = useState(TURNS.X);
    const [board, setBorad] = useState(Array(9).fill(null));
    
    const updateBoard = () => {
      const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
      setTurn(newTurn);
    }

    return (
      <>
        <section className="game-grid">
          {board.map((_, index)=> (
            <GameCell key={index} value={index}/>
          ))}
        </section>

        <section className="turn">
          {turn === TURNS.X ? (
            <GameCell>
              {TURNS.X}
            </GameCell>
          ) : (
            <GameCell>
              {TURNS.O}
            </GameCell>
          )}
        </section>
      </>
    );
}