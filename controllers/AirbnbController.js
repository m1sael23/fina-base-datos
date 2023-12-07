const Airbnb = require("../model/Airbnb");

// Operación CREATE - Crear un nuevo registro
const crearAirbnb = async (req, res) => {
  try {
    const { nombre, descripcion, precio } = req.body;
    const nuevoAirbnb = new Airbnb({ nombre, descripcion, precio });
    await nuevoAirbnb.save();
    res.status(201).json(nuevoAirbnb);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Operación READ - Obtener todos los registros
const obtenerTodosLosAirbnb = async (req, res) => {
  try {
    const airbnbs = await Airbnb.find();
    res.json(airbnbs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Operación READ - Obtener un registro por su ID
const obtenerAirbnbPorId = async (req, res) => {
  try {
    const airbnb = await Airbnb.findById(req.params.id);
    if (!airbnb) {
      return res.status(404).json({ mensaje: "Airbnb no encontrado" });
    }
    res.json(airbnb);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Operación UPDATE - Actualizar un registro por su ID
const actualizarAirbnb = async (req, res) => {
  try {
    const { nombre, descripción } = req.body;
    const airbnbActualizado = await Airbnb.findByIdAndUpdate(
      req.params.id,
      { nombre, descripción },
      { new: true }
    );
    if (!airbnbActualizado) {
      return res.status(404).json({ mensaje: "Airbnb no encontrado" });
    }
    res.json(airbnbActualizado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Operación DELETE - Eliminar un registro por su ID
const eliminarAirbnb = async (req, res) => {
  try {
    const airbnbEliminado = await Airbnb.findByIdAndDelete(req.params.id);
    if (!airbnbEliminado) {
      return res.status(404).json({ mensaje: "Airbnb no encontrado" });
    }
    res.json({ mensaje: "Airbnb eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  crearAirbnb,
  obtenerTodosLosAirbnb,
  obtenerAirbnbPorId,
  actualizarAirbnb,
  eliminarAirbnb,
};
