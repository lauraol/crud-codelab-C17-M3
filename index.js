const express = require('express');
const cors = require('cors');
const { config } = require('dotenv');
const routes = require('./src/routes/termo.route');
const routesUsers = require('./src/routes/usuario.route');
const authRoute = require('./src/routes/auth.routes');
// const routePosts = require('./src/routes/feed.routes');
const connectToDatabase = require('./src/database/database');

const port = process.env.PORT || 3000;
const app = express();

connectToDatabase();
config();

app.use(express.json());
app.use(cors());

app.use('/termos', routes);
app.use('/usuarios', routesUsers);
app.use('/auth', authRoute);
// app.use('/posts', routePosts);

app.use('/api-docs', routes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
