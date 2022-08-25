//const { config } = require('dotenv');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const { findByIdUsuarioService } = require('../services/usuario.service');

/*const validId = (req, res, next) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res
      .status(400)
      .send({ message: 'Id inválido, viu? Tente novamente!' });
  }
  next();
};*/

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).send({ message: 'Por favor, informe o token! >:(' });
  }

  const parts = authHeader.split(' ');

  if (parts.length !== 2) {
    return res.status(401).status({ message: 'Token inválido! >;(' });
  }

  const [scheme, token] = parts;

  if (!/^Bearer^/i.test(scheme)) {
    return res.status(401).send({
      message: 'O token não está formatado corretamente, por favor arrume!',
    });
  }

  jwt.verify(token, String(process.env.SECRET), async (err, decoded) => {
    const usuario = findByIdUsuarioService(decoded.id);

    if (err || !usuario || !usuario.id) {
      return res
        .status(401)
        .send({ message: 'Token inválido, tente novamente >:(' });
    }

    req.usuarioId = usuario.id;

    return next();
  });

  //validId();
};
