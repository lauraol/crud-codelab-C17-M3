const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  nome: {
    type: String,
    require: true,
  },
  apelido: {
    type: String,
    require: true,
  },
  cpf: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  senha: {
    type: String,
    require: true,
  },
});

const Usuario = mongoose.model('teacher-guides-users', UsuarioSchema);

module.exports = Usuario;
