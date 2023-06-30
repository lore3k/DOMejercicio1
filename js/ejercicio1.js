let numeroRandom;
let botonComenzarJuego = document.querySelector("#btnJuego");
botonComenzarJuego.addEventListener("click",comenzarJuego);

let formulario = document.querySelector('form');
    formulario.addEventListener('submit',leerDato);

function comenzarJuego(){
    numeroRandom = Math.floor( Math.random() * 10);
    console.log(numeroRandom);   
    let seccion = document.getElementById("seccionDisplay");
    seccion.className ='d-block';
}

function leerDato(e){
    e.preventDefault();

    let numeroElegido = document.querySelector('input').value;
    console.log(numeroElegido);

    if(numeroElegido>=0 && numeroElegido<10){
        if(numeroRandom < numeroElegido){
            alert("No adivinaste =( El número que elegiste es mayor al número mágico");
        }else{
            if(numeroRandom > numeroElegido){
                alert("No adivinaste =( El número que elegiste es menor al número mágico");
            }else{
                alert("FELICIDADES! Adivinaste el número mágico! =)");
            }
        }
    }else{
        alert("Debe ingresar un número entre del 0 al 9");
    }
    let formulario = document.getElementById('resetForm');
    formulario.reset();
    let seccion = document.getElementById("seccionDisplay");
    seccion.className = 'd-none';   
}