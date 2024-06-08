//container to store all grids;
const gridContainer = document.querySelector('.grids');
//button object for customizing number of grids;
const setGridSizeButton = document.querySelector('.grid-size');
//button to reset the grid color;
const resetButton = document.querySelector('.reset');
//square has equal size, so gird is 500x500;
const sizeOfGridContainer = 500;
//The amount of squares to be appended in the grids container;
let numberOfGrids = 2;
//The total amount of equal squares in the grid container;
const squareOfNumberOfGrids = numberOfGrids**2;
//Maximum number of grid;
const maxGrid = 64;
//array of color
let colorList = ['black', 'white', 'blue', 'green', 'red', 'orange', 'violet', 'purple', 'orange'];


//set evente listner to active funtion when button is clicked;
setGridSizeButton.addEventListener('click', () => {
    //The custom amount of squares to be appended in the grids container;
    let customNumberOfGrids = parseInt(prompt('Enter a number from 1-64: '));
    if (customNumberOfGrids <= 64){
        const gridChildren = document.querySelectorAll('.grid-child');
        //The custom total amount of equal squares in the grid container;
        const squareOfCustomNumberOfGrids = customNumberOfGrids ** 2;
        //removes every grid in gridContainer and makes it empty;
        gridChildren.forEach((child) =>{
            gridContainer.removeChild(child);
        });
        //generates new grids in the grid container;
        generateGrid(squareOfCustomNumberOfGrids,customNumberOfGrids);
    }else{
        alert(`ERROR, Allowable number of grids is ${maxGrid}`);
    };
});

resetButton.addEventListener('click',() => {
    const gridChildren = document.querySelectorAll('.grid-child');
    //resets color for all grids in the container;
    gridChildren.forEach((child) =>{
        child.style.backgroundColor = 'white';
    });
});

function generateGrid(squareOfNumberOfGrids,numberOfGrids){
    //for every iteration between 0 and squareOfNumberOfGrids;
    for (let i = 0; i < (squareOfNumberOfGrids); i++){
        const gridChild = document.createElement('div');
        gridChild.className = 'grid-child';
        gridChild.style.width = `${((sizeOfGridContainer/numberOfGrids)-2)}px`
        gridChild.style.backgroundColor = 'white';
        gridContainer.appendChild(gridChild);
    };
    //add event listener to all squares in the grid container
    const gridChild = document.querySelectorAll('.grid-child');
    gridChild.forEach((grid)=>{
        grid.addEventListener('mouseover',() =>{
            grid.style.backgroundColor = colorList[Math.floor(Math.random()*9)];;
        });
    })
}

generateGrid(squareOfNumberOfGrids,numberOfGrids);




