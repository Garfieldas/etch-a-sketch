const slider = document.querySelector('#sizeSlider');
const sizeValue = document.querySelector('#sizeValue');
const board = document.querySelector('#grid');

let previousValue = slider.value;


let resize = () => {
    board.innerHTML = '';
    let size = slider.value;
    for (let i =0 ; i < size*size; i++){
        let div = document.createElement('div');
        div.setAttribute("class", "grid-element");
        board.appendChild(div);
    }

    board.setAttribute("style", `grid-template-columns: repeat(${size}, 1fr); grid-template-rows: repeat(${size}, 1fr)`);
    sizeValue.textContent = `${size} X ${size}`;
}

slider.addEventListener('input', resize);