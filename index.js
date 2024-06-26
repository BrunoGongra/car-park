import express from 'express';
import sequelize from './config/config.js';
import carRoutes from './routes/carRoutes.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

// Sincronizar o modelo com o banco de dados
sequelize.sync().then(() => {
    console.log('Database synchronized');
}).catch(error => {
    console.error('Error synchronizing database:', error);
});

// Usar as rotas de carros
app.use('/cars', carRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
