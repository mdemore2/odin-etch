const board = document.querySelector('.board');

function resize() {
    let size = parseInt(prompt('Please enter desired board size:'));
    if ((!Number.isInteger(size) || size < 0 || size > 100)){
        size = 16;
    }
    board.replaceChildren();
    buildBoard(size);
}

function buildBoard(size) {
    let row = document.createElement('div');
    row.classList.add('row');
    row = addPixels(row, size);

    for (let i = 0; i < size; i++){
        let newRow = row.cloneNode(true);
        board.appendChild(newRow);
        
    }

    let pixels = document.querySelectorAll('.pixel');
    pixels.forEach((pixel) => {
        pixel.addEventListener('mouseover', colorPixel);
    });
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

function colorPixel(e){
    e.currentTarget.style = "background-color:black";
}

buildBoard(16);

