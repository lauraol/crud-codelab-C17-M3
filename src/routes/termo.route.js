const router = require('express').Router();
const controllerTermos = require('../controllers/termo.controller');

router.get('/pega-todos-os-termos', controllerTermos.findAllTermosController);
router.get('/termo/:id', controllerTermos.findByIdTermosController);
router.post('/create', controllerTermos.createTermoController);
router.put('/update/:id', controllerTermos.editTermoController);
router.delete('/delete/:id', controllerTermos.deleteTermoController);

module.exports = router;
