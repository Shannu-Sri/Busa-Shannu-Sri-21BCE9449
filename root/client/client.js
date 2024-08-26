const ws = new WebSocket('ws://localhost:3000');

ws.onopen = () => {
    console.log('Connected to server');
};

ws.onerror = (error) => {
    console.error('WebSocket error:', error);
};

ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.board) {
        updateBoard(data.board);
    }
    if (data.message) {
        handleServerMessage(data.message);
    }
};

function updateBoard(board) {
    const boardElement = document.getElementById('game-board');
    boardElement.innerHTML = ''; // Clear the board

    board.forEach((row, rowIndex) => {
        row.forEach((cell, cellIndex) => {
            const cellElement = document.createElement('div');
            cellElement.textContent = cell || '';
            cellElement.dataset.row = rowIndex;
            cellElement.dataset.cell = cellIndex;
            cellElement.addEventListener('click', handleCellClick);
            boardElement.appendChild(cellElement);
        });
    });
}

function handleCellClick(event) {
    const row = event.target.dataset.row;
    const cell = event.target.dataset.cell;
    console.log(Cell clicked: Row ${row}, Cell ${cell});
    // Add further logic to handle the cell click
}

function handleServerMessage(message) {
    console.log(Server: ${message});
    // Implement additional handling of server messages, e.g., game over, invalid move, etc.
}

document.getElementById('start-game').addEventListener('click', () => {
    ws.send(JSON.stringify({ type: 'startGame' }));
    console.log('Game started');
});

document.getElementById('end-turn').addEventListener('click', () => {
    ws.send(JSON.stringify({ type: 'endTurn' }));
    console.log('Turn ended');
});

function showHero3Moves() {
    document.getElementById('hero3-moves').style.display = 'block';
}

function sendMove(move) {
    ws.send(JSON.stringify({ type: 'makeMove', move: move }));
    console.log(Move sent: ${move});
}
