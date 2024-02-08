//import { Router} from 'express';
const express = require('express');

import entregadorController from '../controllers/EntregadorController';
//const csrf = require('csurf');
const router = express.Router();

//const csrfProtecao = csrf({ cookie: true });

router.get('/', entregadorController.index);
router.get('/:id', entregadorController.show);
router.delete('/:id', entregadorController.delete);


router.post('/', entregadorController.store);



export default router;
//module.exports = router;





