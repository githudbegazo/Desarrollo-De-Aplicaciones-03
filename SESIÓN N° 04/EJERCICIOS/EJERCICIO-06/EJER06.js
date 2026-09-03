// Función para registrar participantes
function registrarParticipante(nombre,edad,correo,tipo = "general"
) 
{
    // Validar el nombre
    if (nombre === "") {
        throw new Error("El nombre no puede estar vacío.");
    }
    // Validar la edad
    if (typeof edad !== "number" || isNaN(edad) || edad < 18) {
        throw new Error(
            "La edad debe ser numérica y mayor o igual a 18."
        );
    }
    // Validar el correo
    if (correo === "") {
        throw new Error("El correo no puede estar vacío.");
    }
    // Validar el tipo
    if (tipo !== "general" && tipo !== "estudiante") {
        throw new Error(
            "El tipo debe ser general o estudiante."
        );
    }
    // Asignar el costo
    let costo;
    if (tipo === "estudiante") {
        costo = 30;
    } else {
        costo = 50;
    }

    // Retornar los datos del participante
    return {
        nombre: nombre,edad: edad,correo: correo,tipo: tipo,costo: costo
    };
}

// 1. Crear el array de participantes
const participantes = [];

// 2. Registrar cinco participantes usando try...catch
try {
    participantes.push(
        registrarParticipante(
            "Carlos Pérez",25,
            "carlos@gmail.com",
            "general" ));
    participantes.push(
        registrarParticipante(
            "Ana Torres",20,
            "ana@gmail.com", "estudiante"  )
    );
    participantes.push(
        registrarParticipante(
            "Luis Flores", 30,
            "luis@gmail.com", "general" )
    );

    participantes.push(
        registrarParticipante(
            "María López",19,
            "maria@gmail.com", "estudiante")
    );

    participantes.push(
        registrarParticipante(
            "Pedro Ramos",  22,
            "pedro@gmail.com","estudiante"
        )
    );
} catch (error) {
    console.log("Error: " + error.message);
}

// 3. Mostrar únicamente los estudiantes usando filter()
const estudiantes = participantes.filter(
    participante => participante.tipo === "estudiante"
);

// 4. Obtener los nombres usando map()
const nombres = participantes.map(
    participante => participante.nombre
);

// 5. Calcular el total recaudado usando reduce()
const totalRecaudado = participantes.reduce(
    (suma, participante) => suma + participante.costo,
    0
);

// 6. Buscar un participante por correo usando find()
const participanteBuscado = participantes.find(
    participante => participante.correo === "maria@gmail.com"
);

// Mostrar todos los participantes
document.getElementById("todos").innerHTML =
    participantes.map(
        participante =>
            participante.nombre +
            " - " +
            participante.tipo +
            " - S/ " +
            participante.costo
    ).join("<br>");

// Mostrar únicamente los estudiantes
document.getElementById("estudiantes").innerHTML =
    estudiantes.map(
        estudiante =>
            estudiante.nombre +
            " - " +
            estudiante.correo
    ).join("<br>");

// Mostrar los nombres
document.getElementById("nombres").textContent =
    nombres.join(", ");

// Mostrar el total recaudado
document.getElementById("total").textContent =
    "S/ " + totalRecaudado;

// Mostrar el participante encontrado
if (participanteBuscado !== undefined) {
    document.getElementById("busqueda").textContent =
        participanteBuscado.nombre +
        " - " +
        participanteBuscado.correo;
} else {
    document.getElementById("busqueda").textContent =
        "No se encontró al participante.";
}

// Mostrar resultados en la consola
console.log("Todos los participantes:", participantes);
console.log("Estudiantes:", estudiantes);
console.log("Nombres:", nombres);
console.log("Total recaudado: S/ " + totalRecaudado);
console.log("Participante encontrado:", participanteBuscado);
