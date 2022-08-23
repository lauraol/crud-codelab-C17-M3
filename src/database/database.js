const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose
    .connect(process.env.URI_DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB conectado, e bora! ;)'))
    .catch((error) => {
      console.log(
        `Erro ao conectar com o MongoDB veja aqui o que rolou: ${error}`,
      );
    });
};

module.exports = connectToDatabase;
