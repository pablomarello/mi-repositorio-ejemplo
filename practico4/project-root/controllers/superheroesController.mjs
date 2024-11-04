import { 
  buscarSuperheroePorAtributo, 
  obtenerSuperheroePorId, 
  obtenerSuperheroesMayoresDe30 
} from "../services/superheroesService.mjs";
import { renderizarListaSuperheroes, renderizarSuperheroe } from "../views/responseView.mjs";

export function obtenerSuperheroesPorIdController(req, res) {
  const { id } = req.params;
  const superheroe = obtenerSuperheroePorId(parseInt(id));
  
  if (superheroe) {
    res.send(renderizarSuperheroe(superheroe));
  } else {
    res.status(404).json({ mensaje: 'Superheroe no encontrado' });
  }
}

export function buscarSuperheroesPorAtributoController(req, res) {
  const { atributo, valor } = req.params;
  const superheroes = buscarSuperheroePorAtributo(atributo, valor);
  
  if (superheroes.length > 0) {
    res.send(renderizarListaSuperheroes(superheroes));
  } else {
    res.status(404).json({ mensaje: 'Superheroes no encontrados' });
  }
}

export function obtenerSuperheroesMayoresDe30Controller(req, res) {
  const superheroes = obtenerSuperheroesMayoresDe30();
  
  if (superheroes.length > 0) {
    res.send(renderizarListaSuperheroes(superheroes));
  } else {
    res.status(404).json({ mensaje: 'Superheroes no encontrados' });
  }
}