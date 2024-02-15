
const express = require('express');
import entregadorController from '../controllers/EntregadorController';

const router = express.Router();


router.get('/', entregadorController.index);
router.get('/:id', entregadorController.show);
router.post('/', entregadorController.store);
router.put('/:id', entregadorController.update);
router.delete('/:id', entregadorController.delete);



export default router;
//module.exports = router;





