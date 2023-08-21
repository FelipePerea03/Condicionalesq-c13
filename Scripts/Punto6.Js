// Inicializar contadores
let mayoresEdad = 0;
let menoresEdad = 0;

// Iterar para cada estudiante
for (let i = 1; i <= 10; i++) {
    let edadEstudiante = parseInt(prompt(`Ingrese la edad del estudiante ${i}:`));

    // Verificar si el estudiante es mayor de edad o menor de edad
    if (edadEstudiante >= 18) {
        mayoresEdad++;
    } else {
        menoresEdad++;
    }
}

// Mostrar resultados
console.log(`Cantidad de estudiantes mayores de edad: ${mayoresEdad}`);
console.log(`Cantidad de estudiantes menores de edad: ${menoresEdad}`);