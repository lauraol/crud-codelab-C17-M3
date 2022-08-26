require('dotenv').config();
const jwt = require('jsonwebtoken');
const { findByIdUsuarioService } = require('../services/usuario.service');

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
    const user = findByIdUsuarioService(decoded.id);

    if (err || !user || !user.id) {
      return res
        .status(401)
        .send({ message: 'Token inválido, tente novamente >:(' });
    }

    req.userId = user.id;

    return next();
  });
};
