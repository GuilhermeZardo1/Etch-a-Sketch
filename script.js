let numero=16;
let container = document.querySelector('.container');


function enviarNumero() {

    var value = document.getElementById("selection").value;
    numero=value;
    container.innerHTML = "";
    divGrid(numero);
    
}


function divGrid(numero){
    gridSize = numero * numero;
    for (let i = 0; i <= numero; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        for (let i = 0; i <= numero; i++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            
            cell.addEventListener('mouseenter', function(e){
                e.target.style.backgroundColor = "black";
        })
            row.appendChild(cell);  
        }
        container.appendChild(row);
    }
}
document.addEventListener("DOMContentLoaded", function() {
    divGrid(numero);
});


 