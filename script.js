const container = document.createElement('div');

container.style.cssText = 'display: flex; flex-wrap: wrap; align-items: center; align-content: center';

for (let i = 0; i < 16; i++) {
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

const size = document.querySelector('.controls');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    
});