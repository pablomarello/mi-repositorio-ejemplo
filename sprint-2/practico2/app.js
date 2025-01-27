const mongoose = require('mongoose');

const url1 = 'mongodb+srv://Grupo-06:grupo06@cursadanodejs.ls9ii.mongodb.net/Node-js'

mongoose.connect(url1)
.then(() => console.log('Conexión exitosa a MongoDB'))
.catch(error => console.error('Error al conectar a MongoDB', error));

const superheroSchema = new mongoose.Schema({
  nombreSuperHeroe: { type: String, required: true },
  nombreReal: { type: String, required: true },
  edad: { type: Number, min: 0 },
  planetaOrigen: { type: String, default: 'Desconocido' },
  debilidad: String,
  poderes: [String],
  aliados: [String],
  enemigos: [String],
  createdAt: { type: Date, default: Date.now}
});

const SuperHero = mongoose.model('SuperHero', superheroSchema);

//Insertar superhéroe
async function insertSuperHero(){
  const hero = new SuperHero({
    nombreSuperHeroe: 'Spiderman',
    nombreReal: 'Peter Parker',
    edad: 25,
    planetaOrigen: 'Tierra',
    debilidad: 'Radioactiva',
    poderes: ['Trepar paredes', 'Sentido arácnido', 'Super fuerza', 'Agilidad'],
    aliados: ['Ironman'],
    enemigos: ['Duende verde']
  });
  await hero.save();
  console.log('Superhperoe insertado', hero);
}

insertSuperHero();

//Modificar superhéroe
async function updateSuperHero(nombreSuperHeroe){
  const result = await SuperHero.updateOne(
    { nombreSuperHeroe: nombreSuperHeroe },
    { $set: { edad: 26 } }
  );
  console.log('Resultado de la actualización:', result);
}

updateSuperHero('Spiderman');

//Borrar superhéroe
async function deleteSuperHero(nombreSuperHeroe){
  const result = await SuperHero.deleteOne({ nombreSuperHeroe: nombreSuperHeroe });
  consolelog('Superhéroe eliminado', result);
}

deleteSuperHero('Spiderman');


//Obtener todos los superheroes
async function findSuperHeroes(){
  const heroes = await SuperHero.find({ planetaOrigen: 'Tierra' });
  consolelog('Superhéroes encontrados:', heroes);
}

findSuperHeroes();

