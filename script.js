const squares = document.getElementsByClassName("grid-pos");
const form = document.getElementById("roundForm");

const GameBoard = (() => {
    const boardSize = 9;
    let board = new Array(boardSize).fill("");
    
    const getBoard = () => board;
    const addPos = (posId, player) => {
        if(!board[posId]) {
            board[posId] = player.getSymbol();
            player.addPositions(posId);
            return true;
        }else return false;

    }
    return {
        addPos,
        getBoard
    };
})();

const Player = () => {
    let playerName;
    let playerSymbol;
    let positions = new Array();

    const setPlayerName = (name) => playerName = name;
    const setPlayerSymbol = (symbol) => playerSymbol = symbol;

    const getName = () => playerName;
    const getSymbol = () => playerSymbol;
    const getPositions = () => positions;

    const addPositions = (num) => {
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
    return {
        setPlayerName,
        setPlayerSymbol,
        getName,
        getSymbol,
        getPositions,
        addPositions
    };
}

const displayController = (() => {

    const p1 = Player();
    const p2 = Player();
    let currentPlayer;
    let winningPositions = [
        ["0","1","2"],
        ["0","4","8"],
        ["0","3","6"],
        ["3","4","5"],
        ["6","7","8"],
        ["1","4","7"],
        ["2","4","7"],
        ["2","6","8"]
    ];

    const getCurrentPlayer = () => currentPlayer;

    const getFormData = (e) => {
        e.preventDefault();
        // const numRounds = document.getElementById("numRounds");
        const playerOne = document.getElementById("playerOne").value;
        const playerTwo = document.getElementById("playerTwo").value;
        for (square of squares) {
            square.addEventListener("click", getGridId)};
        
        p1.setPlayerName(playerOne);
        p2.setPlayerName(playerTwo);
        p1.setPlayerSymbol('x');
        p2.setPlayerSymbol('o');
        currentPlayer = p1;
    }

    const getGridId = (e) => {
        console.log(e.currentTarget.id);
        if(GameBoard.addPos(e.currentTarget.id.toString(),currentPlayer)){
            const newTile = document.getElementById(`${e.currentTarget.id}`);
            newTile.innerText = currentPlayer.getSymbol();
            checkWinner(currentPlayer);
            (currentPlayer == p1) ? currentPlayer = p2 : currentPlayer = p1;
        }else throw 'Tile Taken';

    }

    const checkWinner = (player) => {
        const playerPos = player.getPositions();
        let playerPosLen = playerPos.length;
        let winner = false;
        
        for(i in winningPositions) {
            let counter = 0;
            let j = 0;
            while(j < winningPositions[i].length && counter != 3) {
                for(let x = 0; x < playerPosLen; x++) {
                    if(playerPos[x] == winningPositions[i][j]) {
                        counter++;
                        break;
                    }
                }
                j++;

            }
            if(counter == 3) {
                console.log(`${player.getName()} wins!`)
                break;
            }
    }
    if(winner == false && !GameBoard.getBoard().includes("")) {
        console.log("it's a tie");
    }

    }

    return {
        getCurrentPlayer,
        getFormData,
        getGridId
    }

})();

form.onsubmit = displayController.getFormData;
























// const roundForm = document.getElementById("roundForm");

// const gameBoard = (() => {
//     const boardSize = 9;

//     const createBoard = () => {
//         const gridPositions = document.getElementsByClassName("grid-pos");
//         let board = new Array(boardSize).fill("");
        
//         for (let i=0; i < gridPositions.length; i++) {
//             gridPositions[i].innerHTML = board[i];
//             gridPositions[i].addEventListener("click", addPosition);           
//         };
//         return board;
//     };

//     let newBoard = createBoard();
//     const getBoard = () => newBoard;
//     const clearBoard = (board) => board = new Array (boardSize).fill("");
        
//     const addPosition = () => {
//         const positionId = e.originalTarget.id;
//         if (!newBoard[positionId]) {
//             newBoard[positionId] = displayController.getCurrPlayer.getSymbol;
//             displayController.getCurrPlayer.addPos(positionId);
//             displayController.getCurrPlayer.setCurrPlayer(false);   
//         }
//         // if (board[newPos])
//     }
//     return {getBoard, clearBoard, addPosition};
// })();

// const Player = (name, symbol) => {
//     const getName = () => name;
//     const getSymbol = () => symbol;
//     let currPlayer = false;
//     const setCurrPlayer = (bool) => currPlayer = bool;
//     const isCurrPlayer = () => currPlayer;
//     const positions = new Array();
//     const addPos = (num) => {
//         if (positions.length === 0 || num > positions[positions.length - 1]) {
//             positions.push(num);
//         } else if (num < positions[0]) {
//             positions.unshift(num);
//         } else {
//             for (let i = 0; i < positions.length - 1; i++) {
//             if (num > positions[i] && num < positions[i + 1]) {
//                 positions.splice(i + 1, 0, num);
//                 break;
//             }
//             }
//         }          
//     }
//     return {getName, getSymbol, addPos, isCurrPlayer, setCurrPlayer};
// }

// const displayController = (() => {
//     let currentPlayer;
//     const setCurrPlayer = (player) => {
//         currentPlayer = player;
//         player.setCurrPlayer(true);
//     }

//     const newGame = (rounds, p1, p2) => {
//         let round = 1;
//         playGame(round, rounds, p1, p2);
//     }

//     const displayBoard = () => {
//         const board = gameBoard.getBoard();

//     }

//     const playGame = (currentRound, numRounds, playerOne, playerTwo) => {
//         setCurrPlayer(playerOne);
//         while(currentRound < numRounds) {
            
//         }
//     }
//     return {getRound, incrementRound, newGame, getCurrPlayer};
// })();

// const play = (e) => {
//     e.preventDefault();
//     const numRounds = document.getElementById("numRounds").value;
//     const playerOne = document.getElementById("playerOne").value;
//     const playerTwo = document.getElementById("playerTwo").value;

//     const p1 = Player(playerOne,'x');
//     const p2 = Player(playerTwo,'o');
//     displayController.newGame(numRounds,p1, p2);
//     console.log(numRounds);
// }

// roundForm.onsubmit = play;