import express from 'express';

//Crear una instancia de Express
const app = express();

//Configurar el puerto en el que el servidor escuchará
const PORT = 3000;

//Ruta básica
app.get('/',(req, res) => {
        res.send('Hola mundo');
});

//Ruta GET con parámetro de ruta
//Solicitud: http:://localhost:3000/user/123
app.get('/user/:id/:dni', (req, res) => {
        const userId = req.params.id;
        const useDni = req.params.dni;
        console.log(`ID del usuario recibido: ${userId}`);
        console.log(`Dni: ${useDni}`);
        res.send(`Perfil del usuario con ID: ${userId}`);
})

//Ruta GET con parametro de consulta
//Solicitud: http://localhost:3000/profile?edad=30
app.get('/profile', (req, res) => {
        const edad = req.query.edad;
        console.log(`Edad recibida: ${edad}`);
        res.send(`Edad del perfil: ${edad}`);
})

//Iniciar el servidor
app.listen(PORT, () => {
          console.log(`Servidor corriendo en http://localhost:${PORT}`);
});