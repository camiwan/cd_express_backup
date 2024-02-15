
const express = require('express');
import coletaEntregadorController from '../controllers/ColetaEntregadorController';

const router = express.Router();


router.get('/', coletaEntregadorController.index);
router.get('/:id', coletaEntregadorController.show);
// router.post('/', entregadorController.store);
// router.put('/:id', entregadorController.update);
// router.delete('/:id', entregadorController.delete);



export default router;
//module.exports = router;





