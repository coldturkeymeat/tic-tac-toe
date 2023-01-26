const boardSize = 9;


const gameBoard = (() => {
    let board = new Array (boardSize);

    const clearBoard = () => board
    const addPosition = (board, newPos) {
        if (board[newPos])
    }
})

const Player = (name) => {
    const getName = () => name;
    return {getName};
}

const displayController = (() => {
    let round = 1;
    let firstPlayer

    const newGame = (rounds) => {
        round = 1;
        gameBoard.clearBoard();
    }
    const incrementRound = () => {
        (round < rounds) ? round++ : 0;
    }
    const getRound = () => round;
    const currentPlayer = ()
    return {getRound, incrementRound};
)}