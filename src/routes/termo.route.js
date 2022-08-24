const router = require('express').Router();
const controllerTermos = require('../controllers/termo.controller');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');
const { validId } = require('../middlewares/validacoes-gerais.middleware');
const { validObjectBody } = require('../middlewares/termo.middleware');

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

router.get('/all-termos', controllerTermos.findAllTermosController);
router.get(
  '/one-termo/:id',
  validId,
  controllerTermos.findByIdTermosController,
);
router.post(
  '/create-termo',
  validObjectBody,
  controllerTermos.createTermoController,
);
router.put(
  '/update-termo/:id',
  validId,
  validObjectBody,
  controllerTermos.editTermoController,
);
router.delete(
  '/delete-termo/:id',
  validId,
  controllerTermos.deleteTermoController,
);

module.exports = router;
