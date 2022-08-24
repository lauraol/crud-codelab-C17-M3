const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  nome: {
    type: String,
    require: true,
  },
  apelido: {
    type: String,
    require: true,
    unique: true,
  },
  cpf: {
    type: String,
    require: true,
    unique: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    lowercase: true,
  },
  senha: {
    type: String,
    require: true,
    select: false,
  },
});

const Usuario = mongoose.model('teacher-guides-users', UsuarioSchema);

module.exports = Usuario;
