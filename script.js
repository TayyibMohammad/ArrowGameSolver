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
    if(!cell.classList.contains('arrowHead')) {
        cell.classList.add('arrowHead');
        cell.classList.add(currNode);
    }


}

window.addEventListener('keydown', (e) => {

    if(e.key === 'ArrowUp') {
        currNodeElement.innerHTML = 'U;';
    }
    if(e.key === 'ArrowDown') {
        currNodeElement.innerHTML = 'D;';
    }   

})

