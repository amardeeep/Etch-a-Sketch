function createDivs(numberDivs){
    for(let i=0;i<numberDivs;i++){
    const cont = document.querySelector('.container');
    const divs = document.createElement('div');
    divs.textContent='Div '+ (i+1);
    divs.setAttribute('height','5em');
    divs.setAttribute('width', '5em');
    cont.appendChild(divs);
    }
}
createDivs(16);
