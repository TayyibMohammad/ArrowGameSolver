

window.addEventListener('keydown', (e) => {
    const allCells = document.querySelectorAll('.cell');

    indexCell = parseInt(currNodeElement.dataset.index);
    console.log('Current cell index:', indexCell);
    let first = null;

    if (e.key === 'ArrowUp') {
        currNodeElement.innerHTML = '&#8593;';
        // Check if head is at the top row
        if (indexCell + 20 >= 400) return; 
        
        // Body trails behind it (below it)
        first = allCells[indexCell + 20]; 
        indexCell = indexCell + 20; // Move head up
    }
    
    else if (e.key === 'ArrowDown') {
        currNodeElement.innerHTML = '&#8595;';
        // Check if head is at the bottom row
        if (indexCell - 20 < 0) return; 
        
        // Body trails behind it (above it)
        first = allCells[indexCell - 20]; 
        indexCell = indexCell - 20; // Move head down
    }
    
    else if (e.key === 'ArrowLeft') {
        currNodeElement.innerHTML = '&#8592;';
        // Check if head is on the leftmost column
        if (indexCell % 20 === 19) return; 
        
        // Body trails behind it to the RIGHT
        first = allCells[indexCell + 1]; 
        indexCell = indexCell + 1; // Move head left
    }
    
    else if (e.key === 'ArrowRight') {
        currNodeElement.innerHTML = '&#8594;';
        // Check if head is on the rightmost column
        if (indexCell % 20 === 0) return; 
        
        // Body trails behind it to the LEFT
        first = allCells[indexCell - 1]; 
        indexCell = indexCell - 1; // Move head right
    } else {
        return;
    }
     
    if (first) {
        console.log('First cell index:', first.dataset.index);
        first.classList.add('tail');
    }
    
    // Update the visual head element reference

    // currNodeElement = allCells[indexCell];
});
var grid = document.querySelector('.grid');

const ROWS = 20;
const COLS = 20;

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
    cell.addEventListener('click', () => {
        addArrow(cell, index);
    })
})

const addArrow = (cell, index) => {
    console.log('Clicked cell index:', cell.dataset.index);
    if(!cell.classList.contains('arrowHead')) {
        cell.classList.add('arrowHead');
        currNode = maxNode;
        cell.classList.add(currNode);
        currNodeElement = cell;
        maxNode ++;
    }else{
        currNodeElement = cell;
        currNode = parseInt(cell.classList[2]);
        console.log(currNode);
    }



}


