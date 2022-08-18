const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose
    .connect('mongodb://localhost:27017/guide-dev-teacher-db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB conectado! ;)'))
    .catch((error) => {
      console.log(
        `Erro ao conectar com o MongoDB veja aqui o que rolou: ${error}`,
      );
    });
};

module.exports = connectToDatabase;
