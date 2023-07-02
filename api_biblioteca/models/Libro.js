const mongoose = require("mongoose");

//Conexión de mongoose
mongoose.connect("mongodb://localhost:27017/biblioteca", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

//Definición del esquema y modelo de la tabla libros
const LibroSchema = new mongoose.Schema(
  {
    titulo: String,
    autor: String,
  },
  { collection: "libros" }
);

const Libro = mongoose.model("Libro", LibroSchema);

//Creación libro 1
/* const nuevoLibro = new Libro({
  titulo: "Libro 1",
  autor: "Autor 1",
});

const result = nuevoLibro
  .save()
  .then(() => {
    console.log("Libro guardado correctamente");
  })
  .catch((err) => {
    console.log(err);
  }); */

//Creación libro 2
/* const nuevoLibro = new Libro({
  titulo: "Libro 2",
  autor: "Autor 2",
});

const result = nuevoLibro
  .save()
  .then(() => {
    console.log("Libro guardado correctamente");
  })
  .catch((err) => {
    console.log(err);
  }); */

//Creación libro 3
/* const nuevoLibro = new Libro({
  titulo: "Libro 3",
  autor: "Autor 3",
});

const result = nuevoLibro
  .save()
  .then(() => {
    console.log("Libro guardado correctamente");
  })
  .catch((err) => {
    console.log(err);
  }); */

module.exports = Libro;
