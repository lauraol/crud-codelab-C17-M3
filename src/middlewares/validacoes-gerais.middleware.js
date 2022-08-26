//const { config } = require('dotenv');
require('dotenv').config();
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

module.exports = {
  validId,
};
