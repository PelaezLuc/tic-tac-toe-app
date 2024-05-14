import { useContext } from "react";
import GameCell from "./GameCell";
import { TURNS } from "../utils/constants";
import { useUpdateGrid } from "../hooks/useUpdateGrid";
import { GameContext } from "./GameProvider";
import { WinnerModal } from "./WinnerModal";

export default function GameGrid() { 
    const { grid, setGrid, turn, setTurn, winner, setWinner } = useContext(GameContext);
    const { updateGrid } = useUpdateGrid();

    const resetGame = () => {
      setGrid(Array(9).fill(null));
      setTurn(TURNS.X);
      setWinner(null);
    };

    return (
      <>
        <button onClick={resetGame}>New Game</button>
        <section className="game-grid">
          {grid.map((value, index)=> (
            <GameCell key={index} value={value} updateGrid={() => updateGrid(index, grid, setGrid, turn, setTurn)} />
          ))}
        </section>

        <section className="turn">
          {turn === TURNS.X? (
            <GameCell value={TURNS.X} updateGrid={() => updateGrid()} />
          ) : (
            <GameCell value={TURNS.O} updateGrid={() => updateGrid()} />
          )}
        </section>

        <WinnerModal resetGame={resetGame} winner={winner} />
      </>
    );
}