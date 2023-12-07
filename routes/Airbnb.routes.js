const express = require("express");
const router = express.Router();
const {
  crearAirbnb,
  obtenerTodosLosAirbnb,
  obtenerAirbnbPorId,
  actualizarAirbnb,
  eliminarAirbnb,
} = require("../controllers/AirbnbController");

// Ruta para crear un nuevo Airbnb
router.post("/", crearAirbnb);

// Ruta para obtener todos los Airbnbs
router.get("/", obtenerTodosLosAirbnb);

// Ruta para obtener un Airbnb por su ID
router.get("/:id", obtenerAirbnbPorId);

// Ruta para actualizar un Airbnb por su ID
router.put("/:id", actualizarAirbnb);

// Ruta para eliminar un Airbnb por su ID
router.delete("/:id", eliminarAirbnb);

module.exports = router;