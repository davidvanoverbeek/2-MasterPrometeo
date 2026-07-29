const fs = require("fs");

// Creamos un fichero con tareas que se sobreescribe
const nuevaTarea = 'Estudiar lenguaje de marcas\n';

fs.writeFile("tareas.txt", nuevaTarea, (error) => {
    if(error) {
        console.log("Error creando tareas: ", error.message);
        return;
    }

    console.log("Archivo de tareas creado correctamente.")
});


// Añadimos nuevas tareas al fichero
const nuevaTarea = 'Estudiar lenguaje de marcas\n';

fs.appendFile("tareas.txt", nuevaTarea, (error) => {
    if(error) {
        console.log("Error creando tareas: ", error.message);
        return;
    }

    console.log("Archivo de tareas creado correctamente.")
});


// Accedemos y leemos el fichero
fs.readFile("./tareas.txt", "utf-8", (error, data) => {
    if(error) {
        console.log("Error leyendo el fichero", error.message);
        return;
    }

    console.log("Lista de tareas:");
    console.log(data);
});




