import SuperheroesRepository from "../repository/superheroesRepository.mjs";

const repository = new SuperheroesRepository();

export function obtenerSuperheroePorId(id) {
  const superheroes = repository.obtenerTodos();
  return superheroes.find(hero => hero.id === id);
}

export function buscarSuperheroePorAtributo(atributo, valor) {
  const superheroes = repository.obtenerTodos();
  return superheroes.filter(hero => 
    String(hero[atributo]).toLocaleLowerCase().includes(valor.toLocaleLowerCase())
  );
}

export function obtenerSuperheroesMayoresDe30() {
  const superheroes = repository.obtenerTodos();
  return superheroes.filter(hero => 
    hero.edad > 30 && hero.planetaOrigen === "Tierra" && hero.poder.length > 2
  );
}