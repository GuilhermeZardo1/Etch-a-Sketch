let numero=16;
let container = document.querySelector('.container');

function enviarNumero() {
    
    // Aqui, você pode realizar qualquer ação que desejar com o número inserido
    // Por exemplo, exibir o número em um alert:
    alert("O número digitado foi: " + numero);
    
}


function divGrid(numero){
    gridSize = numero * numero;
    for (let i = 0; i <= numero; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        for (let i = 0; i <= numero; i++) {
            let cell = document.createElement('div');
            cell.classList.add('column');
            
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
console.log('hello');

 