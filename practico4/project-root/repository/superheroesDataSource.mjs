export default class SuperherpesDataSource {
  //Método abstracto para obtener todos los superhéroes
  obtenerTodos() {
    throw new Error('Este método debe de implementado por la subclase');
  }
}