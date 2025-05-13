//imports 
import React, { useEffect } from 'react';
import '../App.css'; // Ensure this file contains styles for the game
import { initializeGame, handleKeyPress } from '../scripts/snake.js'; // Import the initializeGame and handleKeyPress functions

// Snake game component
const SnakeGame = () => {
    useEffect(() => {
        // Get the DOM elements
        const instructionText = document.getElementById('instruction-text');
        const board = document.getElementById('game-board');
        const score = document.getElementById('score');
        const highscore = document.getElementById('highscore');

        // Initialize the game with the DOM elements
        initializeGame({ instructionText, board, Score: score, Highscore: highscore });

        // Cleanup event listeners on component unmount
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, []); // Empty dependency array ensures this runs only once after the component mounts

    return (
        <section className="game-container">
            <div className="scores">
                <div className="score-container">
                    <h2>Score</h2>
                    <h1 id="score">000</h1>
                </div>
                <div className="highscore-container">
                    <h2>Highscore</h2>
                    <h1 id="highscore">000</h1>
                </div>
            </div>
            <div id="game-board" className="game-board">
                {/* The game board where the snake and food will be rendered */}
                <h1 id="instruction-text">Press Spacebar to start game</h1>
            </div>
            
        </section>
    );
};

// Export snake game component
export default SnakeGame;