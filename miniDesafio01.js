const paises = ["Argentina", "Uruguay", "Brasil", "Chile", "Paraguay", "Bolivia", "Venezuela"];
const nombre = "Donna Clark"; 

function listarPaises(Array) {
    console.log("Listado de países contenidos en el array:");
    console.table(Array);
}

function cambiarNombre() {
    const tuNombre = "Pepe Argento"; // o Jhon Doe

    try {
        tuNombre = nombre;
    } catch (err) {
        console.error("Se ha producido un error al intentar cambiar el valor de una constante:", err);
    } finally {
        console.log("El nombre de la constante tuNombre es:", tuNombre);
    }
}

listarPaises(paises);
cambiarNombre();
