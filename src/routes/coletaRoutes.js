
const express = require('express');
import coletaController from '../controllers/ColetaController';
import loginRequired from '../middlewares/loginRequired';
const router = express.Router();


router.get('/', loginRequired, coletaController.index);
router.get('/:id', coletaController.show);
router.post('/', coletaController.store);
router.put('/:id', coletaController.update);
router.delete('/:id', coletaController.delete);



export default router;
//module.exports = router;





