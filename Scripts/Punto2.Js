// Datos del cliente
let productoComprado = prompt("Ingrese el producto comprado (carro, moto, bicicleta, patineta o scooter):").toLowerCase();

// Definir los porcentajes de descuento para cada tipo de producto
let descuentoCarroMoto = 0.15; // 15%
let descuentoBiciPatineta = 0.1; // 10%
let descuentoScooter = 0.05; // 5%
let descuentoPorcentaje = 0; // Porcentaje de descuento inicializado a 0

// Calcular el porcentaje de descuento según el producto comprado
switch (productoComprado) {
    case 'carro':
    case 'moto':
        descuentoPorcentaje = descuentoCarroMoto;
        break;
    case 'bicicleta':
    case 'patineta':
        descuentoPorcentaje = descuentoBiciPatineta;
        break;
    case 'scooter':
        descuentoPorcentaje = descuentoScooter;
        break;
    default:
        console.log("Producto no válido. No se aplicará descuento.");
}

// Mostrar resultados al usuario
if (descuentoPorcentaje > 0) {
    console.log(`Producto comprado: ${productoComprado}`);
    console.log(`Descuento aplicado: ${descuentoPorcentaje * 100}%`);
} else {
    console.log("No se aplicó ningún descuento.");
}