
const express = require('express');
import coletaController from '../controllers/ColetaController';

const router = express.Router();


router.get('/', coletaController.index);
router.get('/:id', coletaController.show);
router.post('/', coletaController.store);
router.put('/:id', coletaController.update);
router.delete('/:id', coletaController.delete);



export default router;
//module.exports = router;





