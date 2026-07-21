const arrowController = new AbortController();

const snakes = [];


// to add arrow heads and first body segment to the grid
window.addEventListener('keydown', (e) => {
    const allCells = document.querySelectorAll('.cell');

    indexCell = parseInt(currNodeElement.dataset.index);
    console.log('Current cell index:', indexCell);
    let first1 = null;
    let first2 = null;
    let first3 = null;
    let first4 = null;

    if (indexCell + 20 >= 400) console.log('Hit bottom boundary');
    else{
        // Body trails behind it (below it)
        first1 = allCells[indexCell + 20]; 
        // indexCell = indexCell + 20; // Move head up

    }

    if (indexCell - 20 < 0) console.log('Hit top boundary');
    else {
        // Body trails behind it (above it)
        first2 = allCells[indexCell - 20]; 

        // indexCell = indexCell - 20; // Move head down

    }

    if (indexCell % 20 === 19) console.log('Hit right boundary');
    else{
        // Body trails behind it to the RIGHT
        first3  = allCells[indexCell + 1]; 
        // indexCell = indexCell + 1; // Move head left

    }
        

    if (indexCell % 20 === 0) console.log('Hit left boundary');
    else{
        // Body trails behind it to the LEFT
        first4 = allCells[indexCell - 1]; 
        // indexCell = indexCell - 1; // Move head right

    }

    if (e.key === 'ArrowUp') {
        currNodeElement.innerHTML = '&#8593;';

        if (first1) {
        first1.classList.add(indexCell);
        first1.classList.add('tail');
        }
        if (first2) {
            first2.classList.remove(indexCell);
            first2.classList.remove('tail');
        }
        if (first3) {
            first3.classList.remove(indexCell);
            first3.classList.remove('tail');
        }
        if (first4) {
            first4.classList.remove(indexCell);
            first4.classList.remove('tail');
        }

        // Check if head is at the top row
    }
    
    
    else if (e.key === 'ArrowDown') {
        currNodeElement.innerHTML = '&#8595;';
        // Check if head is at the bottom row
        if (first1) {
            first1.classList.remove(indexCell);
            first1.classList.remove('tail');
        }
        if (first2) {
            first2.classList.add(indexCell);
            first2.classList.add('tail');
        }
        if (first3) {
            first3.classList.remove(indexCell);
            first3.classList.remove('tail');
        }
        if (first4) {
            first4.classList.remove(indexCell);
            first4.classList.remove('tail');
        }
    }
    
    else if (e.key === 'ArrowLeft') {
        currNodeElement.innerHTML = '&#8592;';
        // Check if head is on the leftmost column
        if (first1) {
            first1.classList.remove(indexCell);
            first1.classList.remove('tail');
        }
        if (first2) {
            first2.classList.remove(indexCell);
            first2.classList.remove('tail');
        }
        if (first3) {
            first3.classList.add(indexCell);
            first3.classList.add('tail');
        }
        if (first4) {
            first4.classList.remove(indexCell);
            first4.classList.remove('tail');
        }

        
    }
    
    else if (e.key === 'ArrowRight') {
        currNodeElement.innerHTML = '&#8594;';
        // Check if head is on the rightmost column
        if (first1) {
            first1.classList.remove(indexCell);
            first1.classList.remove('tail');
        }
        if (first2) {
            first2.classList.remove(indexCell);
            first2.classList.remove('tail');
        }
        if (first3) {
            first3.classList.remove(indexCell);
            first3.classList.remove('tail');
        }
        if (first4) {
            first4.classList.add(indexCell);
            first4.classList.add('tail');
        }
        
    } else {
        return;
    }
    // Update the visual head element reference

    // currNodeElement = allCells[indexCell];
}, { signal: arrowController.signal });


// helps in adding the rest of the body segments to the grid after arrow heads are locked
const addBodyFunctionality = (e) => {
    const allCells = document.querySelectorAll('.cell');

    
    allCells.forEach((cell, index) => {
        cell.addEventListener('click', (e) => {
            if (!cell.classList.contains('arrowHead')) {


                // checks for around the cell does it have tails (up, down, left, right) if it does then add tail to the clicked cell
                let indexCell = parseInt(cell.dataset.index);
                let first1 = null;
                let first2 = null;
                let first3 = null;
                let first4 = null;

                let head1 = null;
                let head2 = null;
                let head3 = null;
                let head4 = null;


                let count = 0;

                if (indexCell + 20 < 400) {
                    first1 = allCells[indexCell + 20];
                }

                if (indexCell - 20 >= 0) {
                    first2 = allCells[indexCell - 20];
                }

                if (indexCell % 20 !== 19) {
                    first3 = allCells[indexCell + 1];
                }

                if (indexCell % 20 !== 0) {
                    first4 = allCells[indexCell - 1];
                }

                if(first1 && first1.classList.contains('tail')) {
                    head1 = parseInt(first1.classList[1]);
                    const targetSnake = snakes.find(snake => snake.index === head1);
                    console.log('Adding tail to snake with head index:', head1);
                    targetSnake.body.push(indexCell);
                    cell.classList.add(head1);
                    cell.classList.add('tail');
                }

                else if(first2 && first2.classList.contains('tail')) {
                    head2 = parseInt(first2.classList[1]);
                    console.log('Adding tail to snake with head index:', head2);
                    const targetSnake = snakes.find(snake => snake.index === head2);
                    targetSnake.body.push(indexCell);
                    cell.classList.add(head2);
                    cell.classList.add('tail');
                }

                else if(first3 && first3.classList.contains('tail')) {
                    head3 = parseInt(first3.classList[1]);
                    console.log('Adding tail to snake with head index:', head3);
                    const targetSnake = snakes.find(snake => snake.index === head3);
                    targetSnake.body.push(indexCell);
                    cell.classList.add(head3);
                    cell.classList.add('tail');
                }

                else if(first4 && first4.classList.contains('tail')) {
                    head4 = parseInt(first4.classList[1]);
                    console.log('Adding tail to snake with head index:', head4);
                    const targetSnake = snakes.find(snake => snake.index === head4);
                    targetSnake.body.push(indexCell);
                    cell.classList.add(head4);
                    cell.classList.add('tail');
                }

                
            }
        })  
    })

}
var grid = document.querySelector('.grid');

const ROWS = 20;
const COLS = 20;

// makes the initial grid
const makeGrid = () => {
    grid.innerHTML = '';
    for (let i = 0; i < ROWS; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        grid.appendChild(row);
        for (let j = 0; j < COLS; j++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            cell.setAttribute('data-index', i * COLS + j);
            row.appendChild(cell);
        }
    }
}

makeGrid();

var currNode = 0;
var maxNode = 0;
var currNodeElement = null;

const gridCells = document.querySelectorAll('.cell');

gridCells.forEach((cell, index) => {
    cell.addEventListener('click', (e) => {
        addArrow(e, cell, index);
    }, { signal: arrowController.signal })
})

const addArrow = (e, cell, index) => {
    console.log('Clicked cell index:', cell.dataset.index);
    if(!cell.classList.contains('arrowHead') && !cell.classList.contains('tail')) {
        cell.classList.add('arrowHead');
        currNode = maxNode;
        cell.classList.add(currNode);
        cell.classList.add(index)
        currNodeElement = cell;
        maxNode ++;
    }else if(!cell.classList.contains('tail')){
        currNodeElement = cell;
        currNode = parseInt(cell.classList[2]);
        console.log(currNode);
    }



}



var btn = document.getElementById('lockButton');


// logic to add body functionality after arrow heads are locked
btn.addEventListener('click', () => {

    const allCells = document.querySelectorAll('.cell');

    allCells.forEach((cell) => {
        if(cell.classList.contains('arrowHead')) {
            const indexCell = parseInt(cell.dataset.index);
            const direction = cell.innerHTML? cell.innerHTML : '&#8593;'; // Default to up arrow if no direction is set
            

            // If it matches a key, use it; otherwise, default to 'right'
            const dir = direction === '↑' ? 'up' : 
            direction === '↓' ? 'down' : 
            direction === '←' ? 'left' : 
            'right';

var first = null;
console.log('Arrow head at index:', indexCell, 'with direction:', dir);

            if(dir === 'up' && indexCell + 20 < 400) {
                first = allCells[indexCell + 20];
            }

            else if(dir === 'down' && indexCell - 20 >= 0) {
                first = allCells[indexCell - 20];
            }

            else if(dir === 'left' && indexCell % 20 !== 19) {
                first = allCells[indexCell + 1];
            }   

            else if(dir === 'right' && indexCell % 20 !== 0) {
                first = allCells[indexCell - 1];
            }

            if(first) {
                snakes.push({index: indexCell, direction: dir , body: [ parseInt(first.dataset.index) ]});

            }
            else{
                snakes.push({index: indexCell, direction: dir , body: []});
            }
            
        }
    })
    arrowController.abort(); // Cleans up everything instantly!
    console.log('Arrow heads locked. All click events destroyed.');
    addBodyFunctionality();
    console.log('Body functionality added. Click on cells to add tails.');
})

const solveButton = document.getElementById('solveButton');

let matrix = Array(ROWS*COLS).fill(0).map(() => Array(ROWS*COLS).fill(0));

solveButton.addEventListener('click', () => {
    console.log('Solving the game...');
    
    // FIX: Reset the matrix cleanly on every solve attempt
    matrix = Array(ROWS * COLS).fill(0).map(() => Array(ROWS * COLS).fill(0));

    // Helper function: check our exact data state instead of fragile DOM classes
    const getSnakeAtCell = (cellIndex) => {
        return snakes.find(snake => snake.index === cellIndex || snake.body.includes(cellIndex));
    };

    snakes.forEach((snake) => {
        let indexCell = snake.index;
        let dir = snake.direction;
        console.log(indexCell, " ", dir);

        const checkAndAddDependency = (i) => {
            let targetSnake = getSnakeAtCell(i);
            
            // FIX: If we found a snake AND it's NOT ourself, we are blocked
            if (targetSnake && targetSnake.index !== indexCell) {
                let j = targetSnake.index;
                console.log(`Snake ${targetSnake.index} blocks Snake ${indexCell}`);
                matrix[j][indexCell] = 1;
            }
        };

        if (dir === 'up') {
            for (let i = indexCell - 20; i >= 0; i -= 20) {
                checkAndAddDependency(i);
            }
        } 
        else if (dir === 'down') {
            for (let i = indexCell + 20; i < 400; i += 20) {
                checkAndAddDependency(i);
            }
        } 
        else if (dir === 'left') {
            // FIX: Corrected loop bounds for left movement
            let leftBound = Math.floor(indexCell / 20) * 20;
            for (let i = indexCell - 1; i >= leftBound; i--) {
                checkAndAddDependency(i);
            }
        } 
        else if (dir === 'right') {
            // FIX: Corrected loop bounds for right movement
            let rightBound = Math.floor(indexCell / 20) * 20 + 19;
            for (let i = indexCell + 1; i <= rightBound; i++) {
                checkAndAddDependency(i);
            }
        }
    });

    const order = solve(matrix);
    console.log("Movement Order: ", order);
    freeSnakes(order);
});



const freeSnakes = (order) => {
    let cells = document.querySelectorAll(".cell");
    const GRID_SIZE = 20; 
    
    // Switch to .forEach so we can use 'i' to stagger the start times
    order.forEach((index, i) => {
        let currSnake = snakes.find(snake => snake.index === index);
        if (!currSnake) return; // 'return' acts like 'continue' inside forEach
        
        let body = currSnake.body;
        let n = body.length;

        // Wrap the interval creation in a setTimeout to stagger the startup
        // Snake 0 starts at 0ms, Snake 1 starts at 2000ms, Snake 2 at 4000ms, etc.
        setTimeout(() => {
            
            const moveInterval = setInterval(() => {
                let currentRow = Math.floor(currSnake.index / GRID_SIZE);
                let currentCol = currSnake.index % GRID_SIZE;

                let isOutOfBounds = false;
                if (currSnake.direction === 'left' && currentCol === 0) isOutOfBounds = true;
                else if (currSnake.direction === 'right' && currentCol === GRID_SIZE - 1) isOutOfBounds = true;
                else if (currSnake.direction === 'up' && currentRow === 0) isOutOfBounds = true;
                else if (currSnake.direction === 'down' && currentRow === GRID_SIZE - 1) isOutOfBounds = true;

                if (isOutOfBounds) {
                    for (let i = 0; i < n; i++) {
                        if (cells[body[i]]) {
                            cells[body[i]].classList.remove('tail');
                        }
                    }
                    if (cells[currSnake.index]) {
                        cells[currSnake.index].classList.remove('arrowHead');
                        cells[currSnake.index].innerHTML = '';
                    }
                    
                    clearInterval(moveInterval); 
                    console.log("Solved!");
                    return;
                }

                // 1. Remove old visual tail class
                if (cells[body[n - 1]]) {
                    cells[body[n - 1]].classList.remove('tail');
                }

                // 2. Clear old head visual
                if (cells[currSnake.index]) {
                    cells[currSnake.index].classList.remove('arrowHead');
                    cells[currSnake.index].innerHTML = ''; 
                }

                // 3. Shift body array forward
                for (let i = n - 1; i > 0; i--) {
                    body[i] = body[i - 1];
                }
                
                // 4. Move body head to old position
                if (n > 0) {
                    body[0] = currSnake.index;
                }

                // 5. Update head index location
                if (currSnake.direction === 'left') currSnake.index--;
                else if (currSnake.direction === 'right') currSnake.index++;
                else if (currSnake.direction === 'down') currSnake.index += GRID_SIZE;
                else if (currSnake.direction === 'up') currSnake.index -= GRID_SIZE;

                // 6. Render new head visual updates
                let newHeadCell = cells[currSnake.index];
                if (newHeadCell) {
                    newHeadCell.classList.add('arrowHead');
                    if (currSnake.direction === 'left') newHeadCell.innerHTML = '←';
                    else if (currSnake.direction === 'right') newHeadCell.innerHTML = '→';
                    else if (currSnake.direction === 'down') newHeadCell.innerHTML = '↓';
                    else if (currSnake.direction === 'up') newHeadCell.innerHTML = '↑';
                }

                // 7. Re-render tail elements 
                for (let i = 0; i < n; i++) {
                    if (cells[body[i]]) {
                        cells[body[i]].classList.add('tail');
                    }
                }

            }, 300); // Speed of the snake moving

        }, i * 2000); // Delay between each snake starting (2 seconds)
    });
}


const cells = document.querySelectorAll('.cell')

function solve(graph) {
    const nodes = graph.length; 
    const inDegree = new Array(nodes).fill(0);
    const order = [];
    const queue = [];

    // 1. Create a Set of snake head indices for fast O(1) lookups
    const snakeHeads = new Set(snakes.map(snake => snake.index));

    // 2. Calculate in-degrees across all cells
    for (let i = 0; i < nodes; i++) {
        for (let j = 0; j < nodes; j++) {
            if (graph[j][i]) {
                inDegree[i]++;
            }
        }
    }

    // 3. Queue ONLY cells that are actual snake heads AND have 0 dependencies
    for (let i = 0; i < nodes; i++) {
        if (inDegree[i] === 0 && snakeHeads.has(i)) {
            queue.push(i);
        }
    }

    // 4. Process the queue
    while (queue.length > 0) {
        const u = queue.shift();
        order.push(u); // Guaranteed to be a snake head index

        // Decrease in-degree for dependent neighbors
        for (let v = 0; v < nodes; v++) {
            if (graph[u][v]) {
                inDegree[v]--;
                
                // CRITICAL FIX: Only propagate the queue if the next cell 
                // is a snake head that just had its last obstacle cleared.
                if (inDegree[v] === 0 && snakeHeads.has(v)) {
                    queue.push(v);
                }
            }
        }
    }

    // 5. Perfect Apples-to-Apples Cycle Check
    // Both sides of the equation now strictly count snake heads.
    // if (order.length !== snakes.length) {
    //     throw new Error("Grid contains a gridlock/cycle! Some snakes cannot move.");
    // }

    return order; // Returns an array containing ONLY snake head indices in movement order
}




