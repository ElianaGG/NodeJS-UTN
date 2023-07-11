const express = require("express");

const { auth } = require("express-oauth2-jwt-bearer");

// Configuracion Middleware con el Servidor de Autorización
const jwtCheck = auth({
  audience: 'https://localhost:3000/libros',
  issuerBaseURL: 'https://dev-sj4pcq3ziqmk83dx.us.auth0.com/',
  tokenSigningAlg: 'RS256'
});

const app = express();

app.use(express.json());

// Importamos el Router de Libros
const librosRouter = require("./routes/libros");

// Importamos el Middleware Error Handler
const errorHandler = require("./middlewares/errorHandler");

app.use("/libros", jwtCheck, librosRouter);
app.use(errorHandler);
app.listen(3000, () => {
  console.log("Servidor iniciado en el puerto 3000");
});
