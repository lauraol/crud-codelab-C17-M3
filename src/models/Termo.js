const mongoose = require('mongoose');

const TermoSchema = new mongoose.Schema({
  termo: {
    type: String,
    require: true,
  },
  descricao: {
    type: String,
    require: true,
  },
  logo: {
    type: String,
    require: true,
  },
  ano_de_criacao: {
    type: Number,
    require: true,
  },
});

const Termo = mongoose.model('teacher-guides', TermoSchema);

module.exports = Termo;
