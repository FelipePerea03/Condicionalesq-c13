// Inicializar variables para contar personas con y sin hijos, y para el total de hijos
let personasConHijos = 0;
let personasSinHijos = 0;
let totalHijos = 0;

// Solicitar al usuario la cantidad de personas en el grupo
let cantidadPersonas = parseInt(prompt("Ingrese la cantidad de personas en el grupo:"));

// Iterar para cada persona
for (let i = 1; i <= cantidadPersonas; i++) {
    let numHijos = parseInt(prompt(`Ingrese el número de hijos de la persona ${i}:`));

    // Verificar si la persona tiene hijos o no
    if (numHijos > 0) {
        personasConHijos++;
        totalHijos += numHijos;
    } else {
        personasSinHijos++;
    }
}

// Calcular el promedio de hijos (si hay personas con hijos)
let promedioHijos = totalHijos / personasConHijos;

// Mostrar resultados
console.log(`Personas con hijos: ${personasConHijos}`);
console.log(`Personas sin hijos: ${personasSinHijos}`);

if (personasConHijos > 0) {
    console.log(`Promedio de hijos: ${promedioHijos.toFixed(2)}`);
} else {
    console.log("No hay personas con hijos para calcular el promedio.");
}