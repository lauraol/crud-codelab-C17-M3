const router = require('express').Router();
const controllerUsuario = require('../controllers/usuario.controller');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');
const { validId } = require('../middlewares/validacoes-gerais.middleware');
const { validObjectBody } = require('../middlewares/usuario.middleware');

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

router.get('/all-usuarios', controllerUsuario.findAllUsuariosController);

router.get(
  '/one-usuario/:id',
  validId,
  controllerUsuario.findByIdUsuarioController,
);

router.post(
  '/create-usuario',
  validObjectBody,
  controllerUsuario.createUsuarioController,
);

router.put(
  '/edit-usuario/:id',
  validId,
  validObjectBody,
  controllerUsuario.editUsuarioController,
);

router.delete(
  '/delete-usuario/:id',
  validId,
  controllerUsuario.deleteUsuarioController,
);

module.exports = router;
