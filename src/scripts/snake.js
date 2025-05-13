// Define game variables
let board, instructionText, Score, Highscore;
const gridSize = 20;
let snake = [{ x: 10, y: 10 }];
let direction = 'right';
let gameInterval;
let gamespeeddelay = 200;
let gameStarted = false;
let highscore = 0;

// Initialize the game with DOM elements
function initializeGame(elements) {
    board = elements.board;
    instructionText = elements.instructionText;
    Score = elements.Score;
    Highscore = elements.Highscore;

    if (!board || !instructionText || !Score || !Highscore) {
        console.error('Required DOM elements are missing.');
        return;
    }

    // Attach the keypress event listener
    document.addEventListener('keydown', handleKeyPress);
}

// Define the generateFood function
function generateFood() {
    const x = Math.floor(Math.random() * gridSize) + 1;
    const y = Math.floor(Math.random() * gridSize) + 1;
    return { x, y };
}

// Initialize the food variable
let food = generateFood();

// Draw the game board
function drawBoard() {
    board.innerHTML = '';
    drawSnake();
    drawFood();
    updateScore();
}

// Draw the snake
function drawSnake() {
    snake.forEach((segment) => {
        const snakeElement = document.createElement('div');
        snakeElement.className = 'snake';
        setPosition(snakeElement, segment);
        board.appendChild(snakeElement);
    });
}

// Create a snake/food cube/div
function createGameElement(tag, className) {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

// Set the position of the snake/food
function setPosition(element, position) {
    element.style.gridColumn = position.x;
    element.style.gridRow = position.y;
}

// Draw food
function drawFood() {
    if (gameStarted) {
        const foodElement = createGameElement('div', 'food');
        setPosition(foodElement, food);
        board.appendChild(foodElement);
    }
}

// Movement
function move() {
    const head = { ...snake[0] };
    switch (direction) {
        case 'up':
            head.y--;
            break;
        case 'down':
            head.y++;
            break;
        case 'left':
            head.x--;
            break;
        case 'right':
            head.x++;
            break;
    }

    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
        food = generateFood();
        increaseSpeed();
        clearInterval(gameInterval);
        gameInterval = setInterval(() => {
            move();
            checkcollision();
            drawBoard();
        }, gamespeeddelay);
    } else {
        snake.pop();
    }
}

// Start the game
function startGame() {
    if (!instructionText) {
        console.error('instructionText element is missing.');
        return;
    }

    gameStarted = true;
    instructionText.classList.add('hidden'); // Add the hidden class to fade out the text
    gameInterval = setInterval(() => {
        move();
        checkcollision();
        drawBoard();
    }, gamespeeddelay);
}

// Keypress events
function handleKeyPress(event) {
    if (
        (!gameStarted && event.code === 'Space') ||
        (!gameStarted && event.code === ' ')
    ) {
        startGame();
    } else {
        switch (event.code) {
            case 'ArrowUp':
                direction = 'up';
                break;
            case 'ArrowDown':
                direction = 'down';
                break;
            case 'ArrowLeft':
                direction = 'left';
                break;
            case 'ArrowRight':
                direction = 'right';
                break;
        }
    }
}

// Increase speed
function increaseSpeed() {
    if (gamespeeddelay > 150) {
        gamespeeddelay -= 5;
    } else if (gamespeeddelay > 100) {
        gamespeeddelay -= 3;
    } else if (gamespeeddelay > 50) {
        gamespeeddelay -= 2;
    } else if (gamespeeddelay > 25) {
        gamespeeddelay -= 1;
    }
}

// Check collision
function checkcollision() {
    const head = snake[0];
    if (head.x < 1 || head.x > gridSize || head.y < 1 || head.y > gridSize) {
        resetGame();
    }
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            resetGame();
        }
    }
}

// Reset game
function resetGame() {
    updateHighScore();
    stopGame();
    snake = [{ x: 10, y: 10 }];
    food = generateFood();
    direction = 'right';
    gamespeeddelay = 200;
    updateScore();

    // Ensure the instruction text is visible again
    if (instructionText) {
        instructionText.style.display = 'block';
    }
}

// Update score
function updateScore() {
    const currentScore = snake.length - 1;
    Score.textContent = currentScore.toString().padStart(3, '0');
}

// Stop game
function stopGame() {
    clearInterval(gameInterval);
    gameStarted = false;
    instructionText.style.display = 'block';
}

// Update high score
function updateHighScore() {
    const currentScore = snake.length - 1;
    if (currentScore > highscore) {
        highscore = currentScore;
        Highscore.textContent = highscore.toString().padStart(3, '0');
    }
    Highscore.style.display = 'block';
}

// Export the necessary functions
export { initializeGame, handleKeyPress };