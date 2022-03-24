const pixelCount = document.querySelector('.pixelCount');
const button = document.querySelector('button');
const sketchBox = document.querySelector('.display');
const eraser = document.querySelector('.eraser');
const colorPicker = document.querySelector('#colorPicker');
const clearButton = document.querySelector('.clear');
const rainbowButton = document.querySelector('.rainbow');


// toggles the rainbowToggler to true/false and changes the colour of the button accordingly
let rainbowToggler = false
rainbowButton.addEventListener('click', function (e) {
    if (!rainbowToggler) {
        rainbowButton.style.backgroundColor = 'lightgrey';
    } else {
        rainbowButton.style.backgroundColor = '';
    }
    if (eraserToggler) {
        eraserToggler = false;
        eraser.style.backgroundColor = '';
    }
    rainbowToggler = !rainbowToggler
})

// takes the .value of the color selector input on our page and saves it to a variable to be used in other functions
let selectedColor = document.querySelector('#colorPicker').value
colorPicker.addEventListener('change', function () {
    selectedColor = document.querySelector('#colorPicker').value
})

// toggles the eraser to true/false and changes the colour of the button accordingly. Also turns off the rainbowButton if it's on
let eraserToggler = false
eraser.addEventListener('click', function (e) {
    if (!eraserToggler) {
        eraser.style.backgroundColor = 'lightgrey';
    } else {
        eraser.style.backgroundColor = '';
    }
    if (rainbowToggler) {
        rainbowToggler = false;
        rainbowButton.style.backgroundColor = '';
    }
    eraserToggler = !eraserToggler
})

// clears our sketchBox (sets the backgroundColor of all divs to white)
clearButton.addEventListener('click', function () {
    const pixels = document.querySelectorAll('.display > div')
    pixels.forEach(e => e.style.backgroundColor = 'white')
})



button.addEventListener('click', function (e) {
    const boxes = document.querySelectorAll('.display > div')
    boxes.forEach((div) => div.remove())
    let input = document.querySelector('#pixelCount').value
    sketchBox.style.gridTemplateRows = `repeat(${input}, 1fr)`
    sketchBox.style.gridTemplateColumns = `repeat(${input}, 1fr)`

    if (input > 64) { return "Error, too large" }
    for (let i = 0; i < input * input; i++) {
        let newBox = document.createElement('div');
        newBox.addEventListener('mouseover', changeColor)
        sketchBox.appendChild(newBox)
    };


    const divs = document.querySelectorAll('.display > div')
    //divs.forEach(e => e.addEventListener('mouseover', changeColor()))
})


function randomColorPicker() {
    return String(Math.floor(Math.random() * 256))
}





function changeColor() {
    if (!eraserToggler) {

        if (rainbowToggler) {
            randomColor = `rgb(${randomColorPicker()}, ${randomColorPicker()}, ${randomColorPicker()})`
            this.style.backgroundColor = randomColor
            console.log('function fire with rainbow button on')
        } else if (!rainbowToggler) {
            this.style.backgroundColor = selectedColor;
            console.log('function fired with eraser and rainbow off')
        }

    } else if (eraserToggler) {
        this.style.backgroundColor = 'white';
        console.log('function fired with eraser on')
    }
}


