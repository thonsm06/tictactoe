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
    do {
        roll = Math.floor(Math.random() * 9);
        val = gameBoard.board[roll];
    } while (val !== 0);
    gameBoard.board[roll] = 1;
    grids[roll].textContent = "O";//mark box with user selection
    console.log(`Success! Computer selection is grid ${roll}`);
    return roll;
}

function checkMove(lastUser) { //run this after making a move
    const board = gameBoard.board;
    if (board[0] === board[1] && board[0] === board[2] || 
        board[3] === board[4] && board[3] === board[5] || 
        board[6] === board[7] && board[6] === board[8] || 
        board[0] === board[3] && board[0] === board[6] ||
        board[1] === board[4] && board[1] === board[7] ||
        board[2] === board[5] && board[2] === board[8] || 
        board[0] === board[4] && board[0] === board[8] ||
        board[2] === board[4] && board[2] === board[6]) {
            //declare winner
            console.log(`Winner is ${lastUser}`);
            //run winner code here

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
        console.log(gameBoard);
        checkMove("Player");
        getComputerMove();
    }
}));

function pickFirstPlayer() {

}

function trackScore() {

}

function resetGame() {
    
}