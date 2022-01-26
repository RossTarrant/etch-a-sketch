function createGrid(squares){
    const content = document.querySelector('.content');
    const grid = document.createElement('div');
    grid.classList.add('grid');
    const boxSize = 640/squares;
    for(let i = 0; i <squares; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        for(let i = 0; i <squares; i++){
            const box = document.createElement('div');
            box.classList.add('box');
            box.style.width = boxSize+"px";
            box.style.height = boxSize+"px";
            box.addEventListener('mouseover', () =>{
                box.style.backgroundColor = "black";
            })
            row.appendChild(box);
        }
        grid.appendChild(row);
        content.appendChild(grid);    
    }
}
function resetGrid(){
    let gridSize = prompt("How many squares per side would you like? (Max 100)");
    const grid = document.querySelector('.grid');
    grid.remove();
    createGrid(gridSize);
}
createGrid(16);
const resetBtn = document.querySelector("button");
resetBtn.addEventListener("click", () => {
    resetGrid();
})