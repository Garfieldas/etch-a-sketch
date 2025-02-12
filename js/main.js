const slider = document.querySelector('#sizeSlider');
const sizeValue = document.querySelector('#sizeValue');
const board = document.querySelector('#grid');
const colorPicker = document.querySelector('#colorPicker');
const clearBtn = document.querySelector('#clearBtn');


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
    

//Event Listeners

slider.addEventListener('input', resize);


board.addEventListener("click", (e) => {
    changeColor(e, getColor());
})

clearBtn.addEventListener("click", clearBoard);


window.addEventListener("load", resize);


