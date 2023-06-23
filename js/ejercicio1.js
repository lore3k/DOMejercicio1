let botonComenzarJuego = document.querySelector("#btnJuego");

botonComenzarJuego.addEventListener("click",comenzarJuego);

function comenzarJuego(){
    var numeroRandom = Math.floor( Math.random() * 10);
    console.log(numeroRandom);
    let numeroElegido = parseInt(prompt("Elige un número del 0 al 9: "));
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
}