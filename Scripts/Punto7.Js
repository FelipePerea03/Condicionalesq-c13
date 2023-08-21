// Inicializar variables para acumular valores
let subtotal = 0;

// Iterar para cada producto
for (let i = 1; i <= 5; i++) {
    let nombreProducto = prompt(`Ingrese el nombre del producto ${i}:`);
    let precioProducto = parseFloat(prompt(`Ingrese el precio del producto ${i}:`));

    // Acumular el precio al subtotal
    subtotal += precioProducto;
}

// Calcular el IVA y el total
let iva = subtotal * 0.19;
let total = subtotal + iva;

// Mostrar resultados
console.log(`Subtotal (sin IVA): $${subtotal.toFixed(2)}`);
console.log(`IVA (19%): $${iva.toFixed(2)}`);
console.log(`Total a pagar: $${total.toFixed(2)}`);