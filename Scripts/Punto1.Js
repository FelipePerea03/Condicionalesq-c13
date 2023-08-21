// Pedir al usuario que introduzca el número del mes
let numeroMes = parseInt(prompt("Introduce el número del mes (1 al 12):"));

// Verificar si el número de mes es válido
if (numeroMes >= 1 && numeroMes <= 12) {
    // Array con la cantidad de días en cada mes (considerando solo enero a diciembre)
    let diasPorMes = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    // Obtener la cantidad de días del mes ingresado
    let dias = diasPorMes[numeroMes];
    
    // Mostrar el resultado al usuario
    if (dias) {
        console.log(`El mes ${numeroMes} tiene ${dias} días.`);
    } else {
        console.log("El mes introducido no es válido.");
    }
} else {
    console.log("Número de mes inválido. Debe estar entre 1 y 12.");
}