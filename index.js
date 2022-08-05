const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/termo.route');

const port = 3000;
const app = express();

app.use(express.json());
app.use(cors());
app.use('/termos', routes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta http://localhost:${port}`);
});
