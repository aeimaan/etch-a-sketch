const gridContainer = document.querySelector('#grid-container');
const btnReset = document.querySelector('#reset-button');
const btnClear = document.querySelector('#clear-button');

window.addEventListener("load", setDefaultGrid);
btnReset.addEventListener("click", changeSize);
btnClear.addEventListener("click", resetGrid)

function setDefaultGrid(){
    setGridSize(16);
    fillGrid(16);
}

function setGridSize(num){
    gridContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
}

function fillGrid(num){
    for(let i=0; i<num*num; i++){
        const gridElement= document.createElement("div");
        gridElement.classList = "grid-element";
        gridElement.addEventListener("mouseover", changeColor);
        gridContainer.appendChild(gridElement);
    }
}

function changeColor(e){
    const num1 = Math.floor(Math.random()*256);
    const num2 = Math.floor(Math.random()*256);
    const num3 = Math.floor(Math.random()*256);
    e.target.style.backgroundColor = 'black';
    //e.target.style.borderColor = 'yellow';
    e.target.style.backgroundColor = `rgb(${num1}, ${num2}, ${num3})`;
}

function changeSize(){
    let newSize = prompt('Enter new size');

    if (newSize !== null){
        newSize = parseInt(newSize);
        if (newSize< 1 || newSize>64 || Number.isNaN(newSize)){
            alert('Enter a number from 1-64 range');
            changeSize();
        }
        else{
            clearGrid();
            setGridSize(newSize);
           fillGrid(newSize);
        }
    }
}

function clearGrid(){
    const gridArray = Array.from(gridContainer.childNodes);
    gridArray.forEach((element) => {
        gridContainer.removeChild(element);
    });   
}
function resetGrid(){
    const gridArray = Array.from(gridContainer.childNodes);
    gridArray.forEach((element) => {
        element.style.backgroundColor = 'white';
        element.style.borderColor = 'black';
    }); 
}