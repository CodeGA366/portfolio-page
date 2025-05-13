import React, { useEffect, useState } from 'react';
import '../App.css';

const TicTacToe = () => {
    const [gameMode, setGameMode] = useState(null); // Track the selected game mode (PvP or PvC)
    const [currentPlayer, setCurrentPlayer] = useState('O'); // Track the current player
    const [spaces, setSpaces] = useState(Array(9).fill(null)); // Track the board state
    const [gameOver, setGameOver] = useState(false); // Track if the game has ended
    const [statusMessage, setStatusMessage] = useState('Tic Tac Toe'); // Track the game status message
    const [highlighted, setHighlighted] = useState(Array(9).fill(false)); // Track which boxes are highlighted

    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    const playerHasWon = (newSpaces) => {
        for (const condition of winningCombos) {
            let [a, b, c] = condition;
            if (newSpaces[a] && newSpaces[a] === newSpaces[b] && newSpaces[a] === newSpaces[c]) {
                return [a, b, c];
            }
        }
        return false;
    };

    const computerMove = (latestSpaces) => {
        if (gameOver) return; // Prevent moves if the game is over

        const availableSpaces = latestSpaces
            .map((space, index) => (space === null ? index : null))
            .filter(index => index !== null); // Get all available squares

        console.log('Computer available spaces:', availableSpaces);

        if (availableSpaces.length > 0) {
            const randomIndex = Math.floor(Math.random() * availableSpaces.length);
            const computerChoice = availableSpaces[randomIndex];

            console.log('Computer choice:', computerChoice);

            const newSpaces = [...latestSpaces]; // Copy the current state of the board
            newSpaces[computerChoice] = 'X'; // Computer always plays as 'X'

            console.log('Spaces after computer move:', newSpaces);

            const newHighlighted = [...highlighted];
            newHighlighted[computerChoice] = true; // Highlight the computer's chosen box
            setHighlighted(newHighlighted); // Persist all highlights

            setSpaces(newSpaces); // Update the board state with the computer's move

            const winningBlocks = playerHasWon(newSpaces);
            if (winningBlocks !== false) {
                setStatusMessage('Computer has won!');
                const newHighlighted = [...highlighted];
                winningBlocks.forEach(index => newHighlighted[index] = true); // Highlight the winning row
                setHighlighted(newHighlighted);
                setGameOver(true); // Set gameOver to true to stop further moves
                return;
            }

            setCurrentPlayer('O'); // Switch back to the user
        }
    };

    const boxClicked = (e) => {
        if (gameOver) return; // Prevent moves if the game is over

        const id = parseInt(e.target.id);
        if (!spaces[id]) {
            const newSpaces = [...spaces];
            newSpaces[id] = currentPlayer; // Update the board with the player's move

            console.log('Spaces after user move:', newSpaces);

            const newHighlighted = [...highlighted];
            newHighlighted[id] = true; // Highlight the clicked box
            setHighlighted(newHighlighted); // Persist all highlights

            setSpaces(newSpaces); // Update the board state

            const winningBlocks = playerHasWon(newSpaces);
            if (winningBlocks !== false) {
                setStatusMessage(`${currentPlayer} has won!`);
                const newHighlighted = [...highlighted];
                winningBlocks.forEach(index => newHighlighted[index] = true); // Highlight the winning row
                setHighlighted(newHighlighted);
                setGameOver(true); // Set gameOver to true to stop further moves
                return;
            }

            if (gameMode === 'PvC') {
                setTimeout(() => {
                    setSpaces((latestSpaces) => {
                        computerMove(latestSpaces); // Pass the latest state to the computerMove function
                        return latestSpaces;
                    });
                }, 500); // Delay the computer's move for better UX
            } else {
                setCurrentPlayer(currentPlayer === 'O' ? 'X' : 'O'); // Switch to the next player
            }
        }
    };

    const restartGame = () => {
        console.log('Game restarted');
        setGameMode(null); // Reset the game mode to show the selection screen
        setSpaces(Array(9).fill(null)); // Reset the board state
        setCurrentPlayer('O'); // Reset the current player to 'O'
        setGameOver(false); // Reset the gameOver state
        setStatusMessage('Tic Tac Toe'); // Reset the status message
        setHighlighted(Array(9).fill(false)); // Reset all highlights
    };

    const handleGameModeSelection = (mode) => {
        console.log('Game mode selected:', mode);
        setGameMode(mode); // Set the game mode without resetting the game state
    };

    return (
        <div className='Tictactoe'>
            {!gameMode ? (
                <div className="game-mode-selection">
                    <h1>Select Game Mode</h1>
                    <button onClick={() => handleGameModeSelection('PvP')}>Player vs Player</button>
                    <button onClick={() => handleGameModeSelection('PvC')}>Player vs Computer</button>
                </div>
            ) : (
                <>
                    <h1>{statusMessage}</h1>
                    <button id="restartButton" onClick={restartGame}>Restart</button>
                    <div id="ticTacToeBoard">
                        {spaces.map((space, index) => (
                            <div
                                key={index}
                                className="box"
                                id={index}
                                onClick={boxClicked}
                                style={{
                                    backgroundColor: highlighted[index] ? 'lightgreen' : '', // Highlight conditionally
                                }}
                            >
                                {space}
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default TicTacToe;