
newPixelGrid(16);

function randomColor() {
    return `rgba(${randomNum()}, ${randomNum()}, ${randomNum()})`
}

function randomNum() {
    return Math.floor(Math.random() * 256);
}

let button = document.querySelector('button');

button.addEventListener('click', (e) => {
    removeChildren();
    let newSize = parseInt(prompt("How many pixels do you want? (Up to 100)"));
    if (newSize <= 100 && Number.isInteger(newSize)) {
        newPixelGrid(newSize);
    }
    else if (newSize > 100) {
        sadFace(true);
    }
    else sadFace(false);
})

function removeChildren() {
    let pixels = document.querySelectorAll('#canvas div');
    let sadFaces = document.querySelectorAll('#canvas p');
    pixels.forEach(pixel => pixel.remove());
    sadFaces.forEach(sadFace => sadFace.remove());

}

function newPixelGrid(gridSize) {
    let canvas = document.querySelector('#canvas');

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            let div = document.createElement('div');
            div.style.backgroundColor = randomColor();
            div.style.width = 32 / gridSize + 'rem';
            div.style.height = 32 / gridSize + 'rem';
            canvas.append(div);
        }
    }
    let pixels = document.querySelectorAll('#canvas div');

    pixels.forEach((pixel) => {
        pixel.addEventListener('mouseover', (e) => {
            pixel.style.backgroundColor = randomColor();
        })
    })
}

function sadFace(error) {
    let canvas = document.querySelector('#canvas');
    let paragraph = document.createElement('p');

    if (error == true) {
        paragraph.textContent = "no over 100 >:(";
        canvas.append(paragraph);
    }
    else {
        paragraph.textContent = "it must be a number fren :(";
        canvas.append(paragraph);
    }
}