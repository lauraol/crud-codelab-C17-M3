const router = require('express').Router();
const controllerTermos = require('../controllers/termo.controller');

router.get('/all-termos', controllerTermos.findAllTermosController);
router.get('/one-termo/:id', controllerTermos.findByIdTermosController);
router.post('/create-termo', controllerTermos.createTermoController);
router.put('/update-termo/:id', controllerTermos.editTermoController);
router.delete('/delete-termo/:id', controllerTermos.deleteTermoController);

module.exports = router;
