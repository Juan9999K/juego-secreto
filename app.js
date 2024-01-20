let numeroSecreto = 0
let intentos = 0;
let listaNumerosSorteados=[];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHtml= document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `¡Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}!`);
        setTimeout(reiniciarJuego, 2000); // Espera 2 segundos antes de reiniciar (puedes ajustar el tiempo)
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        
        intentos++;
        limpiarCaja();
    }
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random() * numeroMaximo) + 1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    // Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se asignaron todos los números posibles');
    } else {
        // Si el número generado está en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado); // Agregar el número a la lista
            numeroSecreto = numeroGenerado; // Asignar el número generado a numeroSecreto
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    intentos = 1;
    numeroSecreto = generarNumeroSecreto(); // Mover esta línea después de reiniciar intentos
}

function reiniciarJuego() {
    // Limpiar caja
    limpiarCaja();
    // Iniciar mensajes de intervalo de números
    condicionesIniciales();
    // Deshabilitar el botón de nuevo juego hasta que se acierte de nuevo
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

condicionesIniciales();
