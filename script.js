const gameBoard = (function () {
    const board = [
            0, 0, 0,
            0, 0, 0,
            0, 0, 0
        ];
    return {board};
})(); 
const grids = document.querySelectorAll(".grid");
function createPlayer(name) {
    const user = name;
    const selection = function() {

    }
    return {user};
};

console.log(createPlayer("Smith"));

gameLoop = (function () {
    const playerTurn = (selection_x, selection_y) => [selection_x, selection_y];
    const computerTurn = (selection_x, selection_y) => [selection_x, selection_y];

    return {playerTurn, computerTurn};
})();

function getComputerMove() {
    let roll = 0;
    let val = -1;
    const count = 0;
    do {
        roll = Math.floor(Math.random() * 9);
        val = gameBoard.board[roll];
        if (count === 10) break;
    } while (val !== 0);
    if (gameBoard.board.includes(0) === false) {return -1};
    gameBoard.board[roll] = 2;
    grids[roll].textContent = "O";//mark box with user selection
    return roll;
}
const row1 = [0, 1, 2];
const row2 = [3, 4, 5];
const row3 = [6, 7, 8];
const col1 = [0, 3, 6];
const col2 = [1, 4, 7];
const col3 = [2, 5, 8];
const tl = [0, 4, 8];
const tr = [2, 4, 6];
function checkMove(lastUser) { //run this after making a move
    const board = gameBoard.board;
    checkLine(board[0], board[1], board[2]);
    if (board[0] === board[1] && board[0] === board[2] && board[0] !== 0 || 
        board[3] === board[4] && board[3] === board[5] && board[3] !== 0 || 
        board[6] === board[7] && board[6] === board[8] && board[6] !== 0 || 
        board[0] === board[3] && board[0] === board[6] && board[0] !== 0 ||
        board[1] === board[4] && board[1] === board[7] && board[1] !== 0 ||
        board[2] === board[5] && board[2] === board[8] && board[2] !== 0 || 
        board[0] === board[4] && board[0] === board[8] && board[0] !== 0 ||
        board[2] === board[4] && board[2] === board[6] && board[2] !== 0) {
            //declare winner
            console.log(`Winner is ${lastUser}`);
            //run winner code here

        }
}

function checkLine(line) {
    const board = gameBoard.board;
    if (board[0] !== 0 && board[0] === board[1] && board[0] === board[2]) {
        console.log("winner");
    }
}
function displayController(){
    //display board

}

const gridContainer = document.querySelector(".grid-container");
gridContainer.addEventListener("click", (event => {
    const grid = event.target;
    //set user selection
    if (grid.getAttribute("value") == "unmarked") {
        grid.textContent = "X";//mark box with user selection
        grid.setAttribute("value", "marked"); //avoid checking same box again
        gameBoard.board[grid.getAttribute("data-id")] = 1;
        checkLine(gameBoard.board[grid.getAttribute("data-id")]);
        checkMove("Player");
        if (getComputerMove() === -1) {
            //endgame
        }
        checkMove("Computer");
    }
}));

function pickFirstPlayer() {

}

function trackScore() {

}

function resetGame() {

}