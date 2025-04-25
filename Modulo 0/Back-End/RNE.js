//RETO 1: TIPOS DE DATOS SIMPLES
// 1. Crea una variable de tipo String y muestra el valor por Consola

let texto1 = "El valor"
console.log (texto1);
// 2. Crea una variable de tipo Number y muestra el valor por consola

let numero1 = (123456);
console.log (numero1);
// 3. Crea una variable de tipo Boolean y muestra el valor por consola

let boolean1 = true;
let boolean2 = false;
console.log (boolean1);
// 4. Crea una variable sin asignar tipo ni valor y muestra el resultado por consola

let comoquieras;
// RETO 2: TIPOS DE DATOS COMPUESTOS
//1. Genera un array con las variables del reto anterior y muestralo por consola

let arrString = ["Valor1", "Valor2", "valor3"];
let arrNumber = [ 10, 20, 30, 40, 50];
let arrbooleans = [true, false, false, true];
console.log (arrNumber);
console.log (arrString);
console.log (arrbooleans);

// 2. Genera un Vector (array de numeros) de 5 elementos y muestralo por consola
console.log (arrNumber);

//3. Genera una Variable que contenga un objeto JSON con los campos nombre, apellido1, apellido2 y edad y rellenalos con tus atos. Muestra el JSON por consola
let miObj1 = {nombre : "David",
    apellido1 : "Framit",
    apellido2 : "Fernandez",
    edad : "35" 
};
console.log (miObj1);

//4. Muestra por consola la posicion 2 del primer array
console.log (arrString[1]);
//5. Muestra por consola la primera y la última posición del vector (segundo array). La última posición debe calcularse utilizando "arr.legth -1" como valor de la posición.

//6. Imprime el siguiente texto utilizando los valores almacenados en tu objeto JSON: 
// "Mi nombre es{nombre}, mi primer apellido{apellido1}, mi segundo apellido{apellido2} y mi edad {edad}"
console.log ("mi nombre es " + miObj1.nombre + " ,mi primer apellido es " + miObj1.apellido1 + " ,mi segundo apellido es " + miObj1.apellido2 + " y mi edad " + miObj1.edad);