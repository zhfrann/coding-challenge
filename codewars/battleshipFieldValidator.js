// Write a method that takes a field for well - known board game "Battleship" as an argument and returns true if
// it has a valid disposition of ships, false otherwise.Argument is guaranteed to be 10 * 10 two - dimension array.
// Elements in the array are numbers, 0 if the cell is free and 1 if occupied by ship.

// Battleship(also Battleships or Sea Battle) is a guessing game for two players.Each player has a 10x10 
// grid containing several "ships" and objective is to destroy enemy's forces by targetting individual cells 
// on his field. The ship occupies one or more cells in the grid. Size and number of ships may differ from 
// version to version. In this kata we will use Soviet/Russian version of the game.

// Before the game begins, players set up the board and place the ships accordingly to the following rules:
// - There must be single battleship (size of 4 cells), 2 cruisers (size 3), 3 destroyers (size 2)
//   and 4 submarines (size 1). Any additional ships are not allowed, as well as missing ships.
// - Each ship must be a straight line, except for submarines, which are just single cell.
// - The ship cannot overlap or be in contact with any other ship, neither by edge nor by corner.

function validateBattlefield(field) {
    const shipSizes = { 1: 0, 2: 0, 3: 0, 4: 0 };
    const visited = Array.from({ length: 10 }, () => Array(10).fill(false));

    function isValidCell(x, y) {
        return x >= 0 && x < 10 && y >= 0 && y < 10;
    }

    function dfs(x, y, cells = []) {
        if (!isValidCell(x, y) || visited[x][y] || field[x][y] === 0) return cells;

        visited[x][y] = true;
        cells.push([x, y]);

        for (const [dx, dy] of [[0, 1], [1, 0], [0, -1], [-1, 0]]) {
            dfs(x + dx, y + dy, cells);
        }
        return cells;
    }

    function isStraightLine(cells) {
        const xs = new Set(cells.map(([x]) => x));
        const ys = new Set(cells.map(([, y]) => y));
        return xs.size === 1 || ys.size === 1;
    }

    function isTouchingOtherShips(cells) {
        for (const [x, y] of cells) {
            for (const dx of [-1, 0, 1]) {
                for (const dy of [-1, 0, 1]) {
                    const nx = x + dx, ny = y + dy;
                    if (isValidCell(nx, ny) && field[nx][ny] === 1 && !cells.some(([cx, cy]) => cx === nx && cy === ny)) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (!visited[i][j] && field[i][j] === 1) {
                const shipCells = dfs(i, j);

                if (!isStraightLine(shipCells) || isTouchingOtherShips(shipCells)) {
                    return false;
                }

                const size = shipCells.length;
                if (size < 1 || size > 4) return false;
                shipSizes[size]++;
            }
        }
    }

    return (
        shipSizes[1] === 4 &&
        shipSizes[2] === 3 &&
        shipSizes[3] === 2 &&
        shipSizes[4] === 1
    );
}

console.log(validateBattlefield([
    [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]))
// Output : true