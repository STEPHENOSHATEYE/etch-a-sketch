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
let colorList = [
                "#4C9C8D",
                "#A84FBF",
                "#E6D26F",
                "#5AD3D1",
                "#FF6B53",
                "#9370DB",
                "#7FE817",
                "#D6B5FF",
                "#584D39",
                "#FF9E6A",
                "#4C9C8D",
                "#A84FBF",
                "#E6D26F",
                "#5AD3D1",
                "#FF6B53",
                "#9370DB",
                "#7FE817",
                "#D6B5FF",
                "#584D39",
                "#F7D081",
                "#8ECCCC",
                "#D98CE0",
                "#B0E57C",
                "#8FD6E1",
                "#E78A61",
                "#D6B5FF",
                "#C2F642",
                "#957DAD",
                "#FFC32B"
];


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
        //the width of each grid is substrated by 2, to make it fit in the container because of its border size of 1px
        gridChild.style.width = `${((sizeOfGridContainer/numberOfGrids)-2)}px`
        gridChild.style.backgroundColor = 'white';
        gridContainer.appendChild(gridChild);
    };
    //add event listener to all squares in the grid container
    const gridChild = document.querySelectorAll('.grid-child');
    gridChild.forEach((grid)=>{
        grid.addEventListener('mouseover',() =>{
            grid.style.backgroundColor = colorList[Math.floor(Math.random()*(colorList.length))];;
        });
    })
}
//generates a default number of grid when page loads
generateGrid(squareOfNumberOfGrids,numberOfGrids);