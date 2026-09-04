function calcularEnvio(peso, tipo = "normal") {

    peso = Number(peso);

    if (Number.isNaN(peso) || peso <= 0) {
        throw new Error("El peso ingresado no es válido");
    }

    let costoBase;

    if (peso <= 2) {
        costoBase = 8;
    } else if (peso <= 5) {
        costoBase = 12;
    } else {
        costoBase = 18;
    }

    let costoFinal = costoBase;

    if (tipo === "express") {
        costoFinal = costoBase * 1.40;
    }

    return {
        peso: peso,
        tipo: tipo,
        costoBase: costoBase,
        costoFinal: costoFinal
    };
}


const btnCalcular = document.getElementById("btnCalcular");
const resultado = document.getElementById("resultado");

btnCalcular.addEventListener("click", function () {

    const peso = document.getElementById("peso").value;
    const tipo = document.getElementById("tipo").value;

    try {

        const envio = calcularEnvio(peso, tipo);

        resultado.innerHTML = `
            <p><strong>Peso:</strong> ${envio.peso} kg</p>
            <p><strong>Tipo:</strong> ${envio.tipo}</p>
            <p><strong>Costo base:</strong> S/ ${envio.costoBase.toFixed(2)}</p>
            <p><strong>Costo final:</strong> S/ ${envio.costoFinal.toFixed(2)}</p>
        `;

    } catch (error) {

        resultado.innerHTML = `
            <p class="error">${error.message}</p>
        `;
    }

});