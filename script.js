const gameBoard = (function () {
    const createBoard = [
            0, 0, 0,
            0, 0, 0,
            0, 0, 0
        ];
    return {createBoard};
})(); 

console.log(gameBoard);

function createPlayer(name) {
    const user = name;
    return {user};
};

console.log(createPlayer("Smith"));

gameLoop = (function () {
    const playerTurn = (selection_x, selection_y) => [selection_x, selection_y];
    const computerTurn = (selection_x, selection_y) => [selection_x, selection_y];

    return {playerTurn, computerTurn};
})();

console.log(gameLoop.playerTurn(2, 0))