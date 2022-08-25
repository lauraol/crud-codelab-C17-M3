const express = require('express');
const cors = require('cors');
const { config } = require('dotenv');
const routes = require('./routes/termo.route');
const routesUsers = require('./routes/usuario.route');
//const routeLogin = require('./routes/auth.routes');
const connectToDatabase = require('./database/database');

const port = process.env.PORT || 3000;
const app = express();

connectToDatabase();
config();

app.use(express.json());
app.use(cors());
app.use('/termos', routes);
app.use('/usuarios', routesUsers);
//app.use('/login', routeLogin);
app.use('/api-docs', routes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
