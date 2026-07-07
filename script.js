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
        
        first1.classList.add('tail');
        }
        if (first2) {
            
            first2.classList.remove('tail');
        }
        if (first3) {
            
            first3.classList.remove('tail');
        }
        if (first4) {
            
            first4.classList.remove('tail');
        }

        // Check if head is at the top row
    }
    
    
    else if (e.key === 'ArrowDown') {
        currNodeElement.innerHTML = '&#8595;';
        // Check if head is at the bottom row
        if (first1) {
            
            first1.classList.remove('tail');
        }
        if (first2) {
            
            first2.classList.add('tail');
        }
        if (first3) {
            
            first3.classList.remove('tail');
        }
        if (first4) {
            
            first4.classList.remove('tail');
        }
    }
    
    else if (e.key === 'ArrowLeft') {
        currNodeElement.innerHTML = '&#8592;';
        // Check if head is on the leftmost column
        if (first1) {
            
            first1.classList.remove('tail');
        }
        if (first2) {
            
            first2.classList.remove('tail');
        }
        if (first3) {
            
            first3.classList.add('tail');
        }
        if (first4) {
            
            first4.classList.remove('tail');
        }

        
    }
    
    else if (e.key === 'ArrowRight') {
        currNodeElement.innerHTML = '&#8594;';
        // Check if head is on the rightmost column
        if (first1) {
            
            first1.classList.remove('tail');
        }
        if (first2) {
            
            first2.classList.remove('tail');
        }
        if (first3) {
            
            first3.classList.remove('tail');
        }
        if (first4) {
            
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

                if ((first1 && first1.classList.contains('tail')) ||
                    (first2 && first2.classList.contains('tail')) ||
                    (first3 && first3.classList.contains('tail')) ||
                    (first4 && first4.classList.contains('tail'))) {    
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
                snakes.push({ index: indexCell, direction: dir , body: [ parseInt(first.dataset.index) ]});

            }
            else{
                snakes.push({ index: indexCell, direction: dir , body: []});
            }
            
        }
    })
    arrowController.abort(); // Cleans up everything instantly!
    console.log('Arrow heads locked. All click events destroyed.');
    addBodyFunctionality();
    console.log('Body functionality added. Click on cells to add tails.');
})



