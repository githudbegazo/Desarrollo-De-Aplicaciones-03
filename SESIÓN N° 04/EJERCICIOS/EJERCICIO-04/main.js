const funciones = [
    {
        id: 1,
        pelicula: "Interstellar",
        sala: 1,
        precio: 18,
        disponibles: 12
    },
    {
        id: 2,
        pelicula: "Dune",
        sala: 2,
        precio: 20,
        disponibles: 5
    },
    {
        id: 3,
        pelicula: "Avengers",
        sala: 3,
        precio: 16,
        disponibles: 0
    },
    {
        id: 4,
        pelicula: "Inception",
        sala: 1,
        precio: 18,
        disponibles: 8
    }
];

function buscarFuncion(id) {
    const funcion = funciones.find(
        funcion => funcion.id === id
    );

    if (!funcion) {
        throw new Error("La función no existe");
    }

    return funcion;
}

function funcionesDisponibles() {
    return funciones.filter(
        funcion => funcion.disponibles > 0
    );
}

function comprarEntradas(id, cantidad) {

    const funcion = buscarFuncion(id);

    if (cantidad <= 0) {
        throw new Error(
            "La cantidad debe ser mayor que cero"
        );
    }

    if (cantidad > funcion.disponibles) {
        throw new Error(
            "No hay suficientes entradas disponibles"
        );
    }

    funcion.disponibles -= cantidad;

    return {
        pelicula: funcion.pelicula,
        cantidad: cantidad,
        total: funcion.precio * cantidad
    };
}

const btnDisponibles =
    document.getElementById("btnDisponibles");

const btnBuscar =
    document.getElementById("btnBuscar");

const btnComprar =
    document.getElementById("btnComprar");

const listaFunciones =
    document.getElementById("listaFunciones");

const resultadoBusqueda =
    document.getElementById("resultadoBusqueda");

const resultadoCompra =
    document.getElementById("resultadoCompra");


// MOSTRAR FUNCIONES DISPONIBLES

btnDisponibles.addEventListener("click", function () {

    listaFunciones.innerHTML = "";

    const disponibles = funcionesDisponibles();

    disponibles.forEach(funcion => {

        const elemento = document.createElement("p");

        elemento.textContent =
            `${funcion.id} - ${funcion.pelicula} | ` +
            `Sala ${funcion.sala} | ` +
            `S/ ${funcion.precio} | ` +
            `Disponibles: ${funcion.disponibles}`;

        listaFunciones.appendChild(elemento);
    });
});


// BUSCAR FUNCIÓN

btnBuscar.addEventListener("click", function () {

    const id = Number(
        document.getElementById("buscarId").value
    );

    try {

        const funcion = buscarFuncion(id);

        resultadoBusqueda.textContent =
            `${funcion.pelicula} | ` +
            `Sala ${funcion.sala} | ` +
            `Precio: S/ ${funcion.precio} | ` +
            `Disponibles: ${funcion.disponibles}`;

    } catch (error) {

        resultadoBusqueda.textContent =
            error.message;
    }
});


// COMPRAR ENTRADAS

btnComprar.addEventListener("click", function () {

    const id = Number(
        document.getElementById("funcionId").value
    );

    const cantidad = Number(
        document.getElementById("cantidad").value
    );

    try {

        const compra = comprarEntradas(
            id,
            cantidad
        );

        resultadoCompra.textContent =
            `Compra realizada: ` +
            `${compra.pelicula} | ` +
            `Entradas: ${compra.cantidad} | ` +
            `Total: S/ ${compra.total}`;

    } catch (error) {

        resultadoCompra.textContent =
            error.message;
    }
});