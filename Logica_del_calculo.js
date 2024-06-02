document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calcularBtn').addEventListener('click', calcularNotas);
    document.getElementById('limpiarBtn').addEventListener('click', limpiarFormulario);    
});

function calcularPromedio(nota1, nota2, parcial) {
    return (parseFloat(nota1) + parseFloat(nota2) + parseFloat(parcial)) / 3;
}

function calcularNotas() {
    // Rellenar los campos vacíos con 0
    var inputs = document.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim() === '') {
            inputs[i].value = '0';
        }
    }

    // Obtener los valores de cada nota
    const nota11 = parseFloat(document.getElementById('nota1-1').value);
    const nota12 = parseFloat(document.getElementById('nota1-2').value);
    const parcial1 = parseFloat(document.getElementById('parcial1').value);

    const nota21 = parseFloat(document.getElementById('nota2-1').value);
    const nota22 = parseFloat(document.getElementById('nota2-2').value);
    const parcial2 = parseFloat(document.getElementById('parcial2').value);

    const nota31 = parseFloat(document.getElementById('nota3-1').value);
    const nota32 = parseFloat(document.getElementById('nota3-2').value);
    const parcial3 = parseFloat(document.getElementById('parcial3').value);

    // Calcular los promedios ponderados para cada cómputo
    let promedio1 = (nota11 * 0.3) + (nota12 * 0.3) + (parcial1 * 0.4);
    let promedio2 = (nota21 * 0.3) + (nota22 * 0.3) + (parcial2 * 0.4);
    let promedio3 = (nota31 * 0.3) + (nota32 * 0.3) + (parcial3 * 0.4);

    // Mostrar los promedios de cada cómputo con dos decimales
    document.getElementById('Compu1').textContent = promedio1.toFixed(2);
    document.getElementById('Compu2').textContent = promedio2.toFixed(2);
    document.getElementById('Compu3').textContent = promedio3.toFixed(2);

    // Calcular y mostrar la nota final ponderada con dos decimales
    let notaFinal = (promedio1 * 0.33) + (promedio2 * 0.33) + (promedio3 * 0.35);
    document.getElementById('nota-final').textContent = notaFinal.toFixed(2);
}

function limpiarFormulario() {
    document.querySelectorAll('input[type="number"]').forEach(function(input) {
        input.value = '';
    });
    document.getElementById('Compu1').textContent = '';
    document.getElementById('Compu2').textContent = '';
    document.getElementById('Compu3').textContent = '';
    document.getElementById('nota-final').textContent = '';
}
