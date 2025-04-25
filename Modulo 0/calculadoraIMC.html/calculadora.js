function calcularIMC() {
    var peso = prompt("Introduce tu peso en kg:");
    var altura = prompt("Introduce tu altura en metros:");
    if (peso && altura) {
        var imc = peso / (altura * altura);
        alert("Tu IMC es: " + imc);
    } else {
        alert("Por favor, introduce los valores correctos.");
    }
}