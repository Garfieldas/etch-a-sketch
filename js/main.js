const slider = document.querySelector('#sizeSlider');
const sizeValue = document.querySelector('#sizeValue');
const board = document.querySelector('#grid');
const colorPicker = document.querySelector('#colorPicker');
const clearBtn = document.querySelector('#clearBtn');
const rainbowBtn = document.querySelector('#rainbowBtn');


//Grid resizing

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

////-----------------Possible way------------------------------

// let changeColor = (e) => {
    
//     let item = e.target;
//     let color = getColor();
//     if(item.className != "grid"){
//     item.setAttribute("style", `background-color: ${color}`);
//     console.log(item);
//     }
//     else{
//         console.log('you clicked grid');
//     }
// }


// board.addEventListener("click", changeColor);
///----------------END------------------------------------------

//Grid coloring

let changeColor = (e, color) => {
    
    let item = e.target;
    if(item.className != "grid"){
    item.setAttribute("style", `background-color: ${color}`);
    console.log(item);
    }
    else{
        console.log('you clicked grid');
    }
}


let getColor = () => {
    let color = colorPicker.value;
    return color;
}

//Additional functions

let clearBoard = () => {
    let list = board.childNodes;

    list.forEach((item) => {
        item.setAttribute("style", "background-color: none");
    });

}

let generateColor = () =>{
    const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let randomColor = '';
    for (let i =0; i < 6; i++){
        randomColor += hexArray[Math.floor(Math.random() * 16)];
    }
    return `#${randomColor}`;
}
    

//Event Listeners

slider.addEventListener('input', resize);

rainbowBtn.addEventListener("click", () => {
    rainbowBtn.setAttribute("class", "active");
});

board.addEventListener("click", (e) => {
    if(rainbowBtn.classList.contains('active')){
        changeColor(e, generateColor());
    }
    else {
        changeColor(e, getColor());
    }
})


clearBtn.addEventListener("click", clearBoard);

window.addEventListener("load", resize);


