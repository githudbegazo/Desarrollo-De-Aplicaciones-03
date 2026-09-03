function crearGeneradorCodigo(prefijo) {
    let contador = 0;

    return function () {
        contador++;
        return `${prefijo}-${contador}`;
    };
}

const generarAlumno = crearGeneradorCodigo("ALU");
const generarDocente = crearGeneradorCodigo("DOC");

const btnAlumno = document.getElementById("btnAlumno");
const btnDocente = document.getElementById("btnDocente");
const resultados = document.getElementById("resultados");

btnAlumno.addEventListener("click", function () {

    const codigo = generarAlumno();

    const elemento = document.createElement("p");

    elemento.textContent = codigo;

    resultados.appendChild(elemento);
});

btnDocente.addEventListener("click", function () {

    const codigo = generarDocente();

    const elemento = document.createElement("p");

    elemento.textContent = codigo;

    resultados.appendChild(elemento);
});