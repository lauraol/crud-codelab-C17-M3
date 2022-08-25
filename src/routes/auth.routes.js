const router = require('express').Router();
//const authController = require('../controllers/auth.controller');
const usuarioController = require('../controllers/usuario.controller');

router.post('/', usuarioController.createUsuarioController);
router.get('/', usuarioController.findAllUsuariosController);

module.exports = router;
