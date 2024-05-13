import GameGrid from "./components/GameGrid";
import { GameProvider } from "./components/GameProvider";

export default function App() {
  return (
    <GameProvider>
      <main className="board">
        <h1>Tic Tac Toe</h1>
        <GameGrid />
      </main>
    </GameProvider>
  )
}


