const roundForm = document.getElementById("roundForm");

const gameBoard = (() => {
    const boardSize = 9;

    const createBoard = () => {
        const gridPositions = document.getElementsByClassName("grid-pos");
        let board = new Array(boardSize).fill("");
        
        for (let i=0; i < gridPositions.length; i++) {
            gridPositions[i].innerHTML = board[i];
            gridPositions[i].addEventListener("click", addPosition);           
        };
        return board;
    };

    let newBoard = createBoard();
    const getBoard = () => newBoard;
    const clearBoard = (board) => board = new Array (boardSize).fill("");
        
    const addPosition = () => {
        const positionId = e.originalTarget.id;
        if (!newBoard[positionId]) {
            newBoard[positionId] = displayController.getCurrPlayer.getSymbol;
            displayController.getCurrPlayer.addPos(positionId);
            displayController.getCurrPlayer.setCurrPlayer(false);   
        }
        // if (board[newPos])
    }
    return {getBoard, clearBoard, addPosition};
})();

const Player = (name, symbol) => {
    const getName = () => name;
    const getSymbol = () => symbol;
    let currPlayer = false;
    const setCurrPlayer = (bool) => currPlayer = bool;
    const isCurrPlayer = () => currPlayer;
    const positions = new Array();
    const addPos = (num) => {
        if (positions.length === 0 || num > positions[positions.length - 1]) {
            positions.push(num);
        } else if (num < positions[0]) {
            positions.unshift(num);
        } else {
            for (let i = 0; i < positions.length - 1; i++) {
            if (num > positions[i] && num < positions[i + 1]) {
                positions.splice(i + 1, 0, num);
                break;
            }
            }
        }          
    }
    return {getName, getSymbol, addPos, isCurrPlayer, setCurrPlayer};
}

const displayController = (() => {
    let currentPlayer;
    const setCurrPlayer = (player) => {
        currentPlayer = player;
        player.setCurrPlayer(true);
    }

    const newGame = (rounds, p1, p2) => {
        let round = 1;
        playGame(round, rounds, p1, p2);
    }

    const displayBoard = () => {
        const board = gameBoard.getBoard();

    }

    const playGame = (currentRound, numRounds, playerOne, playerTwo) => {
        setCurrPlayer(playerOne);
        while(currentRound < numRounds) {
            
        }
    }
    return {getRound, incrementRound, newGame, getCurrPlayer};
})();

const play = (e) => {
    e.preventDefault();
    const numRounds = document.getElementById("numRounds").value;
    const playerOne = document.getElementById("playerOne").value;
    const playerTwo = document.getElementById("playerTwo").value;

    const p1 = Player(playerOne,'x');
    const p2 = Player(playerTwo,'o');
    displayController.newGame(numRounds,p1, p2);
    console.log(numRounds);
}

roundForm.onsubmit = play;