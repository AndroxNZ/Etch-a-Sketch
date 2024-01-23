//The inital creation is quite messy and different than the remade board
let container = document.createElement('div');
container.style.cssText = 'display: flex; flex-wrap: wrap; align-items: center; align-content: center';

let grid = 16;
for (let i = 0; i < grid; i++) {
    let div = document.createElement('div');
    div.setAttribute('class', 'pixel');
    div.style.cssText = 'flex: 0 0 25%; height: 50px; text-align: center;padding-bottom: 25%'
    container.appendChild(div);
}
container.setAttribute('id', 'board');
document.body.appendChild(container);

let board = document.querySelector('#board');
let pixels = board.querySelectorAll('div');
pixels.forEach((pixel) => {
    pixel.addEventListener("mouseover", () => {
        pixel.classList.add('touched');
    });
});

let numberOfSides = Math.floor(Math.sqrt(grid));
console.log(numberOfSides);

const button = document.querySelector('button');
// Create new pixel board based on size referenced in the input box.
button.addEventListener('click', () => {
    grid = document.querySelector('.controls input').value;
    if (grid <= 100) {
        let squareSize = 960 / grid;
        let toRemove = document.querySelector('#board');
        toRemove.remove();
        let container = document.createElement('div');
        for (let i = 0; i < grid * grid; i++) {
            let div = document.createElement('div');
            div.setAttribute('class', 'pixel');
            div.style.setProperty('height', squareSize + "px");
            div.style.setProperty('width', squareSize + "px");
            container.appendChild(div);
        }
        // Add listener to each pixel so that they change colour when hovered.
        container.style.cssText = 'display: flex; flex-wrap: wrap; align-items: center; align-content: center';
        container.setAttribute('id', 'board');
        document.body.appendChild(container);
        let board = document.querySelector('#board');
        let pixels = board.querySelectorAll('div');
        pixels.forEach((pixel) => {
            pixel.addEventListener("mouseover", () => {
                pixel.classList.add('touched');
            });
        });
    }

});