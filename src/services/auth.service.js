const Usuario = require('../models/Usuario');
const jwt = require('jsonwebtoken');

const loginService = (email) =>
  Usuario.findOne({ email: email }).select('+senha');

const generateToken = (userId) =>
  jwt.sign({ id: userId }, process.env.SECRET, { expiresIn: 86400 });

module.exports = {
  loginService,
  generateToken,
};
