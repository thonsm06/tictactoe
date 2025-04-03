const gameBoard = (function () {
    const board = [
            0, 0, 0,
            0, 0, 0,
            0, 0, 0
        ];
    return {board};
})(); 
function resetBoard() {
    return[0,0,0,0,0,0,0,0,0];
}

const grids = document.querySelectorAll(".grid");
function createPlayer(name) {
    const user = name;
    const selection = function() {

    }
    return {user};
};


gameLoop = (function () {
    //track turns

    const playerTurn = (selection_x, selection_y) => [selection_x, selection_y];
    const computerTurn = (selection_x, selection_y) => [selection_x, selection_y];

    return {playerTurn, computerTurn};
})();


const row1 = [0, 1, 2];
const row2 = [3, 4, 5];
const row3 = [6, 7, 8];
const col1 = [0, 3, 6];
const col2 = [1, 4, 7];
const col3 = [2, 5, 8];
const tl = [0, 4, 8];
const tr = [2, 4, 6];

function getLinesToCheck(grid) {
    switch(grid) {
        case "0":
            return [row1, col1, tl];
        case "1":
            return [row1, col2];
        case "2":
            return [row1, tr, col3];
        case "3":
            return [row2, col1];
        case "4":
            return [row2, col2, tl, tr];
        case "5":
            return [row2, col3];
        case "6":
            return [row3, col1, tr];
        case "7":
            return [row3, col2];
        case "8":
            return [row3, col3, tl];
    }
}


// function checkMove(lastUser) { //run this after making a move
//     const board = gameBoard.board;
//     //checkLine(board[0], board[1], board[2]);
//     if (board[0] === board[1] && board[0] === board[2] && board[0] !== 0 || 
//         board[3] === board[4] && board[3] === board[5] && board[3] !== 0 || 
//         board[6] === board[7] && board[6] === board[8] && board[6] !== 0 || 
//         board[0] === board[3] && board[0] === board[6] && board[0] !== 0 ||
//         board[1] === board[4] && board[1] === board[7] && board[1] !== 0 ||
//         board[2] === board[5] && board[2] === board[8] && board[2] !== 0 || 
//         board[0] === board[4] && board[0] === board[8] && board[0] !== 0 ||
//         board[2] === board[4] && board[2] === board[6] && board[2] !== 0) {
//             //declare winner
//             console.log(`Winner is ${lastUser}`);
//             //run winner code here

//         }
// }

function checkLine(gridID) {
    const board = gameBoard.board;
    let lineArray = getLinesToCheck(gridID);
    for (let i = 0; i < lineArray.length; i++) {
        let line = lineArray[i];
        if (board[line[0]] !== 0 && board[line[0]] === board[line[1]] && board[line[0]] === board[line[2]]) {
            return 1;
        }
    }
    return 0; //if winning move wasn't found, return 0 to keep going
}

function displayController(){
    //display board

}

const gridContainer = document.querySelector(".grid-container");
gridContainer.addEventListener("click", (event => {
    const grid = event.target;
    const gridID = grid.getAttribute("data-id");
    //set user selection
    if (gameBoard.board[gridID] === 0) {
        gameBoard.board[gridID] = 1;
        grid.textContent = "X";
        if (checkLine(gridID)) {
            console.log("You Win!");
            restart();
        } else {
            if (gameBoard.board.includes(0)) {
                console.log("Computer Turn")
                getComputerMove();
                
            } else {
                console.log("End Round")
                
            }
        }
    }
}));

function getComputerMove() {
    let roll = 0;
    let val = -1;
    const count = 0;
    do {
        roll = Math.floor(Math.random() * 9);
        val = gameBoard.board[roll];
        if (count === 10) break;
    } while (val !== 0);
    //if (gameBoard.board.includes(0) === false) {return -1};
    gameBoard.board[roll] = 2;
    grids[roll].textContent = "O";//mark box with user selection
    if (checkLine(roll.toString())) {
        console.log("Computer Wins!");
    } else {
        if (gameBoard.board.includes(0)) {
            //player turn
            console.log("Your Turn");
        } else {
            console.log("End Round");
        }
    }
    return roll;
}
function pickFirstPlayer() {

}

function trackScore() {

}

function resetGame() {

}

function restart() {
    gameBoard.board = resetBoard();
    const grids = document.querySelectorAll(".grid");
    for (const grid of grids) {
        grid.textContent = "";
    }
}