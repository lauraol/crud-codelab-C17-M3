const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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
  foto: {
    type: String,
    require: true,
  },
});

UsuarioSchema.pre('save', async function (next) {
  this.senha = await bcrypt.hash(this.senha, 10);
  next();
});

const Usuario = mongoose.model('teacher-guides-users', UsuarioSchema);

module.exports = Usuario;
