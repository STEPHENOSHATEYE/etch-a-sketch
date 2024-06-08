const gridContainer = document.querySelector('.grids');

//square has equal size, so gird is 500x500
const sizeOfGridContainer = 500;
//The amount of squares to be appended in the grids container
let numberOfGrids = 64;
//The total amount of equal squares in the grid container
const squareOfNumberOfGrids = numberOfGrids**2;

//for every iteration between 0 and squareOfNumberOfGrids, 
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
        grid.style.backgroundColor = 'blue';
    });
})




