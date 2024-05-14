import GameCell from '../components/GameCell';

export function WinnerModal ({ winner, resetGame }) {  
    if (winner === null) return null;
    const winnerText = winner === false ? 'Draw' : 'Winner';
  
    return (
        <section className="winner">
            <div className="text">
                <h2>{winnerText}</h2>
                
                <header className='win'>
                    {winner && <GameCell value={winner}/>}
                </header>   
                
                <footer>
                <button onClick={resetGame}>Play again</button>
                </footer>
            </div>
        </section> 
    )
}