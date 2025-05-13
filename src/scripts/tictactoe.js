//set elements 
let playerText = document.getElementById('player-text');
let restartButton = document.getElementById('restart-button');
let ticTacToeBoard = document.getElementById('tic-tac-toe-board');

let winnerIndicator = getComputedStyle(document.body).getPropertyValue('--winner-blocks')

const O_TEXT = 'O';
const X_TEXT = 'X';
let currentPlayer = O_TEXT;
let spaces = Array(9).fill(null);

//start game
const startGame = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked));
}

//box clicked function 
function boxClicked(e) {
    const id = e.targer.id;
    if(!spaces[id]){
        spaces[id] = currentPlayer
        e.target.innerText = currentPlayer

        if(playerHasWon() !== false) {
            playerText.innerText = `${currentPlayer} has won!`
            let winning_blocks = playerHasWon()

            winning_blocks.map( box => boxes[box].style.backgroundColor = winnerIndicator)
            return
        }
        currentPlayer = currentPlayer === O_TEXT ? X_TEXT : O_TEXT
    }
}

//winning combinations
const winningCombos = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal from top left to bottom right
    [2, 4, 6]  // Diagonal from top right to bottom left
]

//player has won function

function playerHasWon() {
    for (const combo of winningCombos) {
        let [a, b, c] = condition
        if (spaces[a] && (spaces[a] === spaces[b] && spaces[a] === spaces[c])) {
            return [a, b, c]
        }
    }
    return false
}

restartButton.addEventListener('click', restartGame)

//restart game function
function restartGame() {
    spaces.fill(null)
    
    boxes.forEach( box => {
        box.innerText = ''
        box.style.backgroundColor = ''
    })
    playerText.innerText = 'Tic Tac Toe'

    currentPlayer = X_TEXT
}

startGame()