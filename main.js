function createDivs(numberDivs){
    const cont = document.querySelector('.container');
    for(let i=0;i<numberDivs;i++){
        const divsColumn = document.createElement('div');
        for(let j=0;j<numberDivs;j++){
            
            const divsRow = document.createElement('div');
            
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
