require("dotenv").config();

const FormData = require("form-data");
const fs = require("fs");
const fetch = require("node-fetch");

const form = new FormData();
form.append("file", fs.createReadStream("../../../../../../Escritorio/WORK/Alejandro Ortega/img/Foto-Entrenador.jpg"));
form.append("upload_preset", "test_unsigned");

fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload`, {
  method: "POST",
  body: form,
})
  .then(res => res.json())
  .then(data => console.log("RESPUESTA:", data))
  .catch(err => console.error("ERROR:", err));