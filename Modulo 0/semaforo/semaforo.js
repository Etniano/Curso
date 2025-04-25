const colorSemaforo = 'rojo';
const cochesPasando = false;

if (colorSemaforo === 'verde' && !cochesPasando) {
    console.log('El peatón puede cruzar.');
} else if (colorSemaforo === 'amarillo') {
    console.log('El peatón debe esperar, el semáforo está a punto de cambiar.');
} else if (colorSemaforo === 'rojo') {
    console.log('El peatón no debe cruzar.');
} else {
    console.log('Condición no válida.');
}
const mensaje = (colorSemaforo === 'verde' && !cochesPasando) 
    ? 'El peatón puede cruzar.' 
    : (colorSemaforo === 'rojo') 
    ? 'El peatón no debe cruzar.' 
    : 'El peatón debe esperar, el semáforo está a punto de cambiar.';

console.log(mensaje);
