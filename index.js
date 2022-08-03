const express = require('express');
const port = 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('olar pessoal!');
});

app.listen(port, () => {
  console.log(`Servidor rodando da porta http:localhost:${port}`);
});
