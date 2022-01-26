// Creates an initial grid and adds it to the DOM of the page
function createGrid(squares){
    const content = document.querySelector('.content');
    const grid = document.createElement('div');
    grid.classList.add('grid');

    // I have allocated 640 pixels in height/width for the entire grid. 
    // The formula below divides the available grid space by the amount of boxes along each axis.
    const boxSize = 640/squares;
    for(let i = 0; i <squares; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        for(let i = 0; i <squares; i++){
            const box = document.createElement('div');
            box.classList.add('box');
            box.style.width = boxSize+"px";
            box.style.height = boxSize+"px";
            // Adding the event listener to the box, colour will vary depending on state of rainbowToggled.
            box.addEventListener('mouseover', () =>{
                if (rainbowToggled === true){
                    box.style.backgroundColor = getRandomColour();
                }
                else{
                    box.style.backgroundColor = "black";
                }
            })
            row.appendChild(box);
        }
        // Appending the new divs to the DOM
        grid.appendChild(row);
        content.appendChild(grid);    
    }
}
// Removes current grid and replaces it with a size based on user input
function resetGrid(){
    let gridSize = prompt("How many squares per side would you like? (Max 100)");
    if (gridSize > 100){
        alert("You MUST enter a number less than 100!")
    }
    else{
        const grid = document.querySelector('.grid');
        grid.remove();
        createGrid(gridSize);    
    }
}
// Randomises R, G and B values and returns a CSS friendly RGB value
function getRandomColour(){
    let r = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let rgb = `rgb(${r}, ${g}, ${b})`;
    return rgb;
}
// Toggles on the rainbowToggled variable which starts generating random rgb colours when boxes are hovered over
function rainbow(){
    if (rainbowToggled === true){
        rainbowToggled = false;
        rainbowBtn.style.backgroundColor = "white";
    }
    else{
        rainbowToggled = true;
        rainbowBtn.style.backgroundColor = getRandomColour();
    }
}
// Creates an initial grid with a size of 16x16
createGrid(16);

// Turns off rainbow mode
let rainbowToggled = false;

// Adds an event listener to the reset button
const resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", () => {
    resetGrid();
})

// Adds an event listener to the rainbow button
const rainbowBtn = document.querySelector(".rainbow");
rainbowBtn.addEventListener("click", () => {
    rainbow();
})