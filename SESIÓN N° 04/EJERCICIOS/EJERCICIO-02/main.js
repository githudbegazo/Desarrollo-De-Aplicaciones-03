const estudiantes = [
    { nombre: "Andrea", nota: 17 },
    { nombre: "Carlos", nota: 11 },
    { nombre: "Lucía", nota: 19 },
    { nombre: "Mateo", nota: 8 },
    { nombre: "Valeria", nota: 14 }
];

function analizarCalificaciones() {

    // 1. Obtener únicamente los nombres
    const nombres = estudiantes.map(
        estudiante => estudiante.nombre
    );

    // 2. Obtener estudiantes aprobados
    const aprobados = estudiantes.filter(
        estudiante => estudiante.nota >= 13
    );

    // 3. Buscar a Lucía
    const lucia = estudiantes.find(
        estudiante => estudiante.nombre === "Lucía"
    );

    // 4. Calcular promedio general
    const sumaNotas = estudiantes.reduce(
        (total, estudiante) => total + estudiante.nota,
        0
    );

    const promedio = sumaNotas / estudiantes.length;

    // 5. Determinar cuántos desaprobaron
    const desaprobados = estudiantes.filter(
        estudiante => estudiante.nota < 13
    );

    // 7. Crear array con propiedad estado
    const estudiantesEstado = estudiantes.map(
        estudiante => ({
            ...estudiante,
            estado: estudiante.nota >= 13
                ? "Aprobado"
                : "Desaprobado"
        })
    );

    console.log("Nombres:", nombres);
    console.log("Aprobados:", aprobados);
    console.log("Estudiante Lucía:", lucia);
    console.log("Promedio general:", promedio);
    console.log(
        "Cantidad de desaprobados:",
        desaprobados.length
    );
    console.log(
        "Estudiantes con estado:",
        estudiantesEstado
    );

    return {
        nombres,
        aprobados,
        lucia,
        promedio,
        desaprobados,
        estudiantesEstado
    };
}


// Mostrar los resultados en HTML

const boton = document.getElementById("btnAnalizar");
const resultados = document.getElementById("resultados");

boton.addEventListener("click", function () {

    const datos = analizarCalificaciones();

    resultados.innerHTML = `
        <h2>Resultados</h2>

        <h3>Nombres de estudiantes</h3>
        <p>${datos.nombres.join(", ")}</p>

        <h3>Estudiantes aprobados</h3>
        <p>
            ${datos.aprobados
                .map(estudiante =>
                    `${estudiante.nombre} (${estudiante.nota})`
                )
                .join(", ")}
        </p>

        <h3>Búsqueda de Lucía</h3>
        <p>
            Nombre: ${datos.lucia.nombre} <br>
            Nota: ${datos.lucia.nota}
        </p>

        <h3>Promedio general</h3>
        <p>${datos.promedio.toFixed(2)}</p>

        <h3>Cantidad de desaprobados</h3>
        <p>${datos.desaprobados.length}</p>

        <h3>Estado de los estudiantes</h3>

        ${datos.estudiantesEstado
            .map(estudiante => `
                <p>
                    ${estudiante.nombre}
                    - Nota: ${estudiante.nota}
                    - ${estudiante.estado}
                </p>
            `)
            .join("")}
    `;
});