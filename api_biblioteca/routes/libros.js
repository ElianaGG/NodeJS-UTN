const express = require("express");
const router = express.Router();
const { requiredScopes } = require("express-oauth2-jwt-bearer");
const Libro = require("../models/Libro");

// Ruta para obtener todos los libros
router.get("/", requiredScopes("read:libros"), async (req, res) => {
  try {
    const libros = await Libro.find();
    res.json(libros);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los libros" });
  }
});

//Ruta para obtener libro por ID
router.get("/:id", requiredScopes("read:libros"), async (req, res) => {
  try {
    const libro = await Libro.findById(req.params.id);
    res.json(libro);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener libro" });
  }
});

// Ruta para crear un nuevo Libro
router.post("/", requiredScopes("write:libros"), async (req, res) => {
  try {
    const nuevoLibro = new Libro(req.body);
    await nuevoLibro.save();
    res.json(nuevoLibro);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el Libro" });
  }
});

// Ruta para actualizar un Libro existente
router.put("/:id", requiredScopes("write:libros"), async (req, res) => {
  try {
    const updatedLibro = await Libro.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.json({
      message: "Libro actualizado correctamente",
      libro: updatedLibro,
    });
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el Libro" });
  }
});

// Ruta para eliminar un Libro
router.delete("/:id", requiredScopes("write:libros"), async (req, res) => {
  try {
    await Libro.findByIdAndDelete(req.params.id);
    res.json({ message: "Libro eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el Libro" });
  }
});

module.exports = router;
