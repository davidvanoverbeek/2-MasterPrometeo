const mongoose = require("mongoose");
const { platform } = require("node:os");

const GENRES = [
    "Action",
    "Adventure",
    "RPG",
    "Shooter",
    "Strategy",
    "Sports",
    "Racings",
    "Indie",
    "Puzzle",
    "Horror",
    "Others"
];

const PLATFORMS = [
    "PC",
    "PS5",
    "PS4",
    "XboxSeries",
    "Switch",
    "Mobile"
];

const PEGI = [3, 7, 12, 16, 18]

const videogameSchema = new mongoose.Schema(
    {
        title: {type: String, required: true, trim: true},
        studio: {
            type: String,
            reuired: false,
            trim: true,
            default: "Unknown Studio"
            },
        releaseYear: {type: Number, min: 1970, max: 2100},
        genre: {type: String, enum: GENRES, default: "Other"},
        platform: {type: [String], required: true, enum: PLATFORMS},
        rating: {type: Number, min: 0, max: 10, default: 0},
        isDigital: {type: Boolean, default: true},
        inStock: {type: Number, min: 0, default: 0},
        cover: {type: String, default: "https://res.cloudinary.com/jz0ksn1g/image/upload/v1785347741/400x600_mwhpuf.png"},
        pegi: {type: Number, required: true, enum: PEGI}
    },{
        timestamps: true,
        versionKey: false
    },
);

const Videogame = mongoose.model("Videogame", videogameSchema);
module.exports = Videogame;