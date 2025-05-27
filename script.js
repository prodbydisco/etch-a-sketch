const mainContainer = document.querySelector('.grid');
const miniGrid = document.querySelector('.mini-grid')


function createGrid(numOfRows) {
    
    // Clear existing grid
    mainContainer.innerHTML = '';

    // Create row containers
    for (let i = 0; i < numOfRows; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        
        // Create squares within each row
        for (let j = 0; j < numOfRows; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            row.appendChild(square);
        }
        
        mainContainer.appendChild(row);
    }
}
createGrid(16);


function createNewGrid() {
    // ask user for desired amount of rows/columns
    let newNumRows = prompt('Enter number of squares per side (max 100):');
    newNumRows = parseInt(newNumRows);

    if (typeof newNumRows != 'number' || newNumRows < 1 || newNumRows > 100) {
        alert('Please enter a valid number between 1 and 100');
        return;
    } else {
        createGrid(newNumRows);
    }
    
}


// Create 4x4 mini grid squares for header button
for (let i = 0; i < 4; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    
    // Create squares within each row
    for (let j = 0; j < 4; j++) {
        const miniSquare = document.createElement('div');
        miniSquare.classList.add('mini-square');
        row.appendChild(miniSquare);
    }
    
    miniGrid.appendChild(row);
}

miniGrid.addEventListener('click', createNewGrid);