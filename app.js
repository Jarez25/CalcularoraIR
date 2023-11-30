function calcularImpuesto() {
    const salarioBruto = parseFloat(document.getElementById('salarioBruto').value) || 0;
    const subsidioLaboral = parseFloat(document.getElementById('subsidioLaboral').value) || 0;

    const ingresoGravable = salarioBruto - subsidioLaboral;

    // Lógica simplificada de tasas de impuestos (debes ajustar según las leyes fiscales de Nicaragua)
    let impuesto;
    if (ingresoGravable <= 10000) {
        impuesto = ingresoGravable * 0.1; // 10% de impuesto
    } else {
        impuesto = ingresoGravable * 0.15; // 15% de impuesto para ingresos superiores a 10000
    }

    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerText = `Impuesto sobre la Renta: $${impuesto.toFixed(2)}`;
}
