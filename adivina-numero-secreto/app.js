const readlineSync = require('readline-sync')
const { generarNumeroAleatorio, verificarAdivinanza } = require('./adivinanza')

const obtenerNumeroUsuario = () => {
    return Number(readlineSync.question('Ingresar un número: '))
}

const juegoAdivinanza = () => {
    console.log('¡Bienvenido a Adivina el número secreto!');
    console.log('Intenta adivinar el número del 1 al 100');

    const numeroSecreto = generarNumeroAleatorio();
    let numeroAdivinado = 0;

    while(numeroAdivinado !== numeroSecreto) {
        numeroAdivinado = obtenerNumeroUsuario();
        verificarAdivinanza(numeroSecreto, numeroAdivinado);
    } 
    console.log('Felicitaciones! ¡Adivinaste el número secreto!');
}

juegoAdivinanza();