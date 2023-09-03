const board = document.querySelector('.board');


function buildBoard(size) {
    let row = document.createElement('div');
    row.classList.add('row');
    row = addPixels(row, size);

    for (let i = 0; i < size; i++){
        let newRow = row.cloneNode(true);
        board.appendChild(newRow);
        
    }
}

function addPixels(row, size){
    let pixel = document.createElement('div');
    pixel.classList.add('pixel');
    
    for (let i=0; i< size; i++){
        let newPix = pixel.cloneNode();
        row.appendChild(newPix);
    }
    return row;
}

buildBoard(10);