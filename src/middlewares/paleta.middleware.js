const mongoose = require('mongoose');

const validId = (req, res, next) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res
      .status(400)
      .send({ message: 'Id inválido, viu? Tente novamente!' });
  }
  next();
};

const validObjectBody = (req, res, next) => {
  const termo = req.body;

  if (!termo || !termo.descricao || !termo.logo || !termo.ano_de_criacao) {
    return res
      .status(400)
      .send({ message: 'Envie todos os campos do novo termo, por favor! >:(' });
  }
  next();
};

module.exports = {
  validId,
  validObjectBody,
};
