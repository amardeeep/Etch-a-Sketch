const cont = document.querySelector('.container');
function createDivs(numberDivs){
    
    for(let i=0;i<numberDivs;i++){
        const divsColumn = document.createElement('div');
        for(let j=0;j<numberDivs;j++){
            
            const divsRow = document.createElement('div');
            divsRow.classList.add('hover');
            divsRow.classList.add('grid');
            divsRow.style.height='1em';
            divsRow.style.flex='1';
            divsRow.style.width='1em';
            divsRow.style.aspectRatio='1';
            divsRow.style.borderStyle='solid';
            divsRow.style.borderColor='black';
            divsColumn.appendChild(divsRow);
        }
        divsColumn.style.display='flex';
        divsColumn.style.flex='1';
        divsColumn.style.flexDirection='row';
        divsColumn.style.alignItems='centre';
        divsColumn.style.justifyContent='space-evenly';
        cont.appendChild(divsColumn);

    }
}
createDivs(16);

function hoverDivs(){
    const divs = document.querySelectorAll('.hover');
    divs.forEach((div)=>{
        div.addEventListener('mouseenter',()=>{
            div.classList.add('changeColor');
        });
    }); 
}
hoverDivs();

//provide function to clear

//provide function to eraser

//provide function to change grid dimensions button
function editGrid(){
    const newDimensionOfGrid=Number(prompt('Please enter the number of squares at a side-',16));
    const element=document.getElementById('cont');
    while(element.firstChild){
        element.removeChild(element.firstChild);
    }
    
    if(newDimensionOfGrid&&newDimensionOfGrid<100){
        createDivs(newDimensionOfGrid);
        hoverDivs();
    }
    else{
        createDivs(16);
        hoverDivs();
    }
    
}
const btnGrid= document.querySelector('.grid');
btnGrid.addEventListener('click',editGrid);

