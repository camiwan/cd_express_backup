
const express = require('express');
import entregaController from '../controllers/EntregaController';

const router = express.Router();


router.get('/', entregaController.index);
router.get('/:id', entregaController.show);
router.post('/', entregaController.store);
router.put('/:id', entregaController.update);
router.delete('/:id', entregaController.delete);



export default router;
//module.exports = router;





