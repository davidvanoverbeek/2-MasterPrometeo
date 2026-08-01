const mongoose = require("mongoose");

// Definimos unos enum para no ponerlos directamente dentro del esquema y mejorar la legibilidad
const BRANDS = [
    "Sony",
    "Microsoft",
    "Nintendo",
    "Valve",
    "Other"
];

const CONSOLE_TYPES = [
    "Home",
    "Portable",
    "Hybrid"
];

const MEDIA_FORMATS = [
    "Digital",
    "Disc",
    "Cartridge",
    "Mixed"
];


// Definimos el esquema de la console y le activamos lo s timestamps y le desactivamos la clave de version
const consoleSchema = new mongoose.Schema(
    {
        name: {type: String, rrequired: true, unique: true, trim: true},
        brand: {type: String, required: true, enum: BRANDS},
        releaseYear: {type: Number, min: 1990, max: 2100},
        type: {type: String, enum: CONSOLE_TYPES, default: "Home"},
        mediaFormat: {tpye: String, enum: MEDIA_FORMATS, default: "Mixed"},
        image: {type: String, default: "https://res.cloudinary.com/jz0ksn1g/image/upload/v1785542098/600x400_wtp7v9.png"},
        storage: {type: Number, min: 0, default: 500},
    },
    {
        timestamps: true,
        versionKey: false
    },
);

const Console = mongoose.model("Console", consoleSchema);

module.exports = Console;