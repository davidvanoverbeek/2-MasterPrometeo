require("dotenv").config();
const mongoose = require("mongoose");
const connect = require("../config/db");
const Console = require("../api/models/console.model");

const consoles = [
    {
        name: "PlayStation 5",
        brand: "Sony",
        releaseYear: 2020,
        type: "Home",
        mediaFormat: "Mixed",
        storage: 825,
    },
    {
        name: "Xbox Series X",
        brand: "Microsoft",
        releaseYear: 2020,
        type: "Home",
        mediaFormat: "Mixed",
        storage: 1000,
    },
    {
        name: "Nintendo Switch",
        brand: "Nintendo",
        releaseYear: 2017,
        type: "Hybrid",
        mediaFormat: "Mixed",
        storage: 32,
    },
    {
        name: "Nintendo Switch 2",
        brand: "Nintendo",
        releaseYear: 2025,
        type: "Hybrid",
        mediaFormat: "Mixed",
        storage: 256,
    },
    {
        name: "Steam Deck",
        brand: "Valve",
        releaseYear: 2022,
        type: "Portable",
        mediaFormat: "Digital",
        storage: 512,
    },
];

const seedConsoles = async () => {
    try {
        // Nos conectamos con Mongo Atlas
        await connect();
        // Borramos todas las consolas de la DB para no tener redundancia de datos ni repeticiones
        await Console.deleteMany();
        // Insertamos todas las consolas
        await Console.insertMany(consoles);
        console.log("Consolas insertadas");
    } catch (error) {
        console.error("Error al insertar las consolas", error.message);
    }finally {
        // Como hemos terminado de trabajar y no queremos mantener la permanencia de la conexion, cerramos la conexion con la DB
        await mongoose.disconnect();
    }
};

// Ejecutamos la función
seedConsoles();