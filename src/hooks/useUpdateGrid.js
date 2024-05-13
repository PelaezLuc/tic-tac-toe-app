import { useContext } from 'react';
import { GameContext } from '../components/GameProvider';
import { TURNS, WINNER_COMBOS } from "../utils/constants";
import confetti from 'canvas-confetti';
  
export const useUpdateGrid = () => {
    const { grid, setGrid, turn, setTurn, winner, setWinner } = useContext(GameContext);
    const updateGrid = (index) => {
        if(grid[index] || winner) return;        
        
        const newGrid = [...grid];
        newGrid[index] = turn;
        setGrid(newGrid);
        
        const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
        setTurn(newTurn);
        
        const newWinner = checkWinner(newGrid);
        
        if(newWinner === '❌') {
            confetti();
            setWinner(newWinner);
        }
        else if (newWinner === '🔘') {
            confetti();
            setWinner(newWinner);
        } 
    };
    return { updateGrid }; 
}

function checkWinner(newGrid) {
    let comboX = [];
    let comboO = [];
    for (let i = 0; i < newGrid.length; i++) {
        if(newGrid[i] === '❌') {
            comboX.push(i);
        }
        else if(newGrid[i] === '🔘'){
            comboO.push(i);
        }
    }
    if (WINNER_COMBOS.some(combo => combo.every(value => comboX.includes(value)))) {
        console.log('Gana cruz');
        return '❌';
    } 
    else if (WINNER_COMBOS.some(combo => combo.every(value => comboO.includes(value)))) {
        console.log('Gana cara');
        return '🔘';
    }
    else {
        return null;
    }
}



