const express = require("express");
const router = express.Router();

const {
    getAllConsoles, 
    getConsoleByID,
    getConsoleByBrand,
    getConsoleByType,
    getConsolesAfterYear, 
    createConsole, 
    deleteConsole, 
    updateConsole
} = require("../controllers/consoles.crontrollers");

router.get("/", getAllConsoles);
router.get("/id/:id", getConsoleByID);
router.get("/brand/:brand", getConsoleByBrand);
router.get("/type/:type", getConsoleByType);
router.get("/year/:year", getConsolesAfterYear);
router.post("/", createConsole);
router.delete("/:id", deleteConsole);
router.put("/:id", updateConsole);

module.exports = router;