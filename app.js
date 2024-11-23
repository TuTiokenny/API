// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const connectDB = require('./config/database');

// Inicialización de la aplicación
const app = express(); // Solo se declara una vez
const PORT = process.env.PORT || 3000;



// Middleware
app.use(bodyParser.json());

// Conexión a la base de datos
connectDB();

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

// Ruta GET para la raíz "/"
app.get('/', (req, res) => {
  res.send('¡Hola, mundo! La API está funcionando correctamente.');
});

// Inicio del servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:3000/ `);
});
