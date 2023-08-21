// Solicitar al usuario la cantidad de estudiantes
let cantidadEstudiantes = parseInt(prompt("Ingrese la cantidad de estudiantes:"));

// Inicializar variables para calcular el promedio de edades
let sumaEdadesMayores21 = 0;
let cantidadMayores21 = 0;
let sumaEdadesMenores21 = 0;
let cantidadMenores21 = 0;

// Iterar para cada estudiante
for (let i = 1; i <= cantidadEstudiantes; i++) {
    let codigoEstudiante = prompt(`Ingrese el código del estudiante ${i}:`);
    let edadEstudiante = parseInt(prompt(`Ingrese la edad del estudiante ${i}:`));

    // Verificar si el estudiante es mayor de 21 años
    if (edadEstudiante > 21) {
        sumaEdadesMayores21 += edadEstudiante;
        cantidadMayores21++;
    } else {
        sumaEdadesMenores21 += edadEstudiante;
        cantidadMenores21++;
    }
}

// Calcular promedios
let promedioMayores21 = sumaEdadesMayores21 / cantidadMayores21;
let promedioMenores21 = sumaEdadesMenores21 / cantidadMenores21;

// Mostrar resultados
console.log(`Promedio de edades de estudiantes mayores de 21 años: ${promedioMayores21.toFixed(2)}`);
console.log(`Promedio de edades de estudiantes menores o iguales a 21 años: ${promedioMenores21.toFixed(2)}`);