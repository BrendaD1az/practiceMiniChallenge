let paises = ["Argentina", "Uruguay", "Brasil", "Chile", "Paraguay", "Bolivia","Venezuela"];
const nombre = "Dona Clark";
function listarPaises(array){
    console.log("Listado de Paises contenidos en el array: ");
    console.table(paises);
}
function cambiarNombre(){
    const tuNombre = ["Jorgelina Sigal"];
    try{
        const tuNombre = nombre;
    }
    catch(err){
        console.error("Se ha producido un error al intentar cambiar el valor de la constante");
    }
    finally{
        console.log("El nombre de la constante tuNombre es:", tuNombre);
    }
}
//////

const nombreCompleto ='Joe Michigan';
if (nombreCompleto !== '' && grupo === 'admin'){
console.log("Bienvenidx", nombre)
} else{
    console.error("user dont admin")
}
