function calcularImpuesto() {
    const salarioBruto = parseFloat(document.getElementById('salarioBruto').value) || 0;
    const subsidioLaboral = parseFloat(document.getElementById('subsidioLaboral').value) || 0;

    const ingresoGravable = salarioBruto - subsidioLaboral;

    // Aquí deberías implementar la lógica para calcular el impuesto sobre la renta
    // Puedes usar diferentes tasas de impuestos según rangos de ingresos

    // En este ejemplo, simplemente mostramos el ingreso gravable
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerText = `Ingreso Gravable: C$${ingresoGravable.toFixed(2)}`;
}
