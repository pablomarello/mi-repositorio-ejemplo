import express from 'express';
import { 
  buscarSuperheroesPorAtributoController, 
  obtenerSuperheroesMayoresDe30Controller, 
  obtenerSuperheroesPorIdController 
} from './controllers/superheroesController.mjs';

const app = express();
const PORT = 3005;

// Rutas
app.get('/superheroes/id/:id', obtenerSuperheroesPorIdController);
app.get('/superheroes/atributo/:atributo/:valor', buscarSuperheroesPorAtributoController);
app.get('/superheroes/edad/mayorA30', obtenerSuperheroesMayoresDe30Controller);


// Levantar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
})