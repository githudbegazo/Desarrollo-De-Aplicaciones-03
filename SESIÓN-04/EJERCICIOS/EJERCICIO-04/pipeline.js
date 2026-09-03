// Función pipeline
function pipeline(transformaciones) {
    return function(valorInicial) {
        return transformaciones.reduce(
            (resultado, transformar) => transformar(resultado),
            valorInicial
        );
    };
}

// Transformaciones
const duplicar = n => n * 2;
const sumarDiez = n => n + 10;
const cuadrado = n => n ** 2;
const restarCinco = n => n - 5;

// Pipeline 1
const operacion1 = pipeline(
    duplicar,
    sumarDiez,
    cuadrado
);

console.log(operacion1(5)); // Resultado: 400

// Pipeline 2
const operacion2 = pipeline(
    cuadrado,
    duplicar,
    sumarDiez
);
console.log(operacion2(5)); // Resultado: 60
//Pipeline 3
const operacion3 = pipeline(
    sumarDiez,
    cuadrado,
    duplicar
);
console.log(operacion3(5)); // Resultado: 120
//Pipeline 4
const operacion4 = pipeline(
    restarCinco,
    duplicar,
    cuadrado
);
console.log(operacion4(5)); // Resultado: 400

transformaciones.reduce(
    (resultado, transformar) => transformar(resultado),
    valorInicial
);
