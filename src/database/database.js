const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose
    .connect(
      'mongodb+srv://Laurou:Banqu1nhodeDados@cluster0.co1nezj.mongodb.net/?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    )
    .then(() => console.log('MongoDB conectado! ;)'))
    .catch((error) => {
      console.log(
        `Erro ao conectar com o MongoDB veja aqui o que rolou: ${error}`,
      );
    });
};

module.exports = connectToDatabase;
