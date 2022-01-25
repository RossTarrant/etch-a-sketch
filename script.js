function initalise(){
    const content = document.querySelector('.content');
    for(let i = 0; i <16; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        for(let i = 0; i <16; i++){
            const box = document.createElement('div');
            box.classList.add('box');
            box.addEventListener('mouseover', () =>{
                box.style.backgroundColor = "black";
            })
            row.appendChild(box);
        }
        content.appendChild(row);
    }
}
initalise()