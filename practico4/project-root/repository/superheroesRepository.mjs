import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import SuperherpesDataSource from './superheroesDataSource.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default class SuperheroesFileRepository extends SuperherpesDataSource {
    constructor() {
      super();
      this.filePath = path.join(__dirname, '../superheroes.json');
    }

    obtenerTodos(){
      const data = fs.readFileSync(this.filePath, 'utf-8');
      return JSON.parse(data); //convierte el archivo JSON en un array de objetos JS
    }
}