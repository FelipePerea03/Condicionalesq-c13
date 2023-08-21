// Pedir al usuario que ingrese un número entre 1 y 12
let numeroMes = parseInt(prompt("Ingrese un número entre 1 y 12:"));

// Verificar si el número de mes está dentro del rango válido
if (numeroMes >= 1 && numeroMes <= 12) {
    // Array con los nombres de los meses
    let nombresMeses = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    // Array con los signos del zodiaco
    let signosZodiaco = [
        "Capricornio - Acuario", "Acuario - Piscis", "Piscis - Aries",
        "Aries - Tauro", "Tauro - Géminis", "Géminis - Cáncer",
        "Cáncer - Leo", "Leo - Virgo", "Virgo - Libra",
        "Libra - Escorpio", "Escorpio - Sagitario", "Sagitario - Capricornio"
    ];

    // Obtener el nombre del mes y el signo del zodiaco correspondiente
    let nombreMes = nombresMeses[numeroMes - 1];
    let signoZodiaco = signosZodiaco[numeroMes - 1];

    // Mostrar resultados al usuario
    console.log(`${nombreMes}`);
    console.log(`${signoZodiaco}`);
} else {
    console.log("Número de mes inválido. Debe estar entre 1 y 12.");
}