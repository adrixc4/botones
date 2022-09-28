const btnSumar = document.getElementById('btnSumar')
const btnRestar = document.getElementById('btnRestar')
let result = 0

btnSumar.addEventListener('click', sumar)
btnRestar.addEventListener('click', restar)

function sumar() {
    result = result + 1
    document.getElementById('numero').innerHTML=result
}

function restar() {
    result = result - 1
    document.getElementById('numero').innerHTML=result
}

// document.getElementById("#btnSumar1").addEventListener("click",sumar);
// document.getElementById("#btnRestar1").addEventListener("click",restar);
// let resultado = 0;

// function sumar(){
//     resultado= resultado+1;
//     document.getElementById('#contador').innerHTML=resultado;
// }

// function restar(){

// }