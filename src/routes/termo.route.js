const router = require('express').Router();
const controllerTermos = require('../controllers/termo.controller');
const {
  validId,
  validObjectBody,
} = require('../middlewares/paleta.middleware');

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
