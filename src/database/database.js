const mongoose = require('mongoose');

const connectToDatabase = () => {
  console.log('Conectando com o banco de dados...');
  mongoose
    .connect(
      'mongodb+srv://Laurou:Banqu1nhodeDados@cluster0.co1nezj.mongodb.net/?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    )
    .then(() => console.log('MongoDB conectado, e bora! ;)'))
    .catch((error) => {
      console.log(`Erro ao conectar com o MongoDB: ${error}`);
    });
};

/*const connectToDatabase = () => {
  console.log('Conectando com o banco de dados...');
  mongoose
    .connect(String(process.env.URI_DATABASE), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB conectado, e bora! ;)'))
    .catch((error) => {
      console.log(`Erro ao conectar com o MongoDB: ${error}`);
    });
};*/

module.exports = connectToDatabase;
