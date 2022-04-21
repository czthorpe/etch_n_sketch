
newPixelGrid(16);

function randomColor() {
    return `rgba(${randomNum()}, ${randomNum()}, ${randomNum()})`
}

function randomNum() {
    return Math.floor(Math.random() * 256);
}

let button = document.querySelector('button');

button.addEventListener('click', (e) => {
    removePixels();
    let newSize = parseInt(prompt("How many pixels do you want? (Up to 100)"));
    if (newSize <= 100 && Number.isInteger(newSize)) {
        newPixelGrid(newSize);
    }
    else {
        console.log("Invalid input. Don't do that");
    }
})

function removePixels() {
    let pixels = document.querySelectorAll('#canvas div');
    pixels.forEach(pixel => pixel.remove());
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