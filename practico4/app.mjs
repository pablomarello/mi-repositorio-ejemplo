import expres from 'express';

const app = expres();
const PORT = 3000;

//ruta básica
app.get('/', (req, res) =>{
      res.send('Server funcionando');
});

//ruta para el home
//Solicitud: http://localhost:3000/
app.get('/', (req, res) =>{
      res.send('Página de inicio');
});

//ruta get para recibir datos simples
//Solicitud: http://localhost:3000/data
app.get('/data', (req, res) =>{
  res.send('Datos recibidos');
});


////////////////////////////////////////////////////////////////////////

//ACTIVIDAD 1: 
//ruta get con parametro de ruta
//Solicitud: http://localhost:3000/user/123
app.get('/user/:id', (req, res) =>{
      const userId = req.params.id;
      console.log(`ID del usuario recibido: ${userId}`);
      res.send(`Perfil del usuario con ID: ${userId}`);
});

/////////////////////////////////////////////////////////////////////////

//ACTIVIDAD 2:
//ruta get con parametro de consulta
//Solicitud: http://localhost:3000/profile?edad=30
app.get('/profile', (req, res) =>{
  const edad = req.query.edad;
  console.log(`Edad recibida: ${edad}`);
  res.send(`Edad del perfil: ${edad}`);
});

////////////////////////////////////////////////////////////////////////


//ruta get con multiples parametros
//Solicitud: http://localhost:3000/product/electronics/456
app.get('/product/:category/:id', (req, res) =>{
      const { category, id } = req.params;
      res.send(`Categoria: ${category}, ID del producto: ${id}`);
});

//ruta get con parametro de consulta
//Solicitud: http://localhost:3000/search?q=javascript
app.get('/search', (req, res) =>{
      const query = req.query.q;
      res.send(`Resultados de busqueda para: ${query}`);
});

//ruta get con multiples parametros de consulta
//Solicitud: http://localhost:3000/filter?type=book&minPrice=10&maxPrice=50
app.get('/filter', (req, res) =>{
  const { type, minPrice, maxPrice } = req.query;
  res.send(`Filtrar por tipo: ${type}, rango de precios: ${minPrice} - ${maxPrice}`);
});


app.listen(PORT, () =>{
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
});

