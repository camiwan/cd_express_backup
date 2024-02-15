import { Router} from 'express';
import empresaController from '../controllers/EmpresaController';

// const csrf = require('csurf');
const router = new Router();

// const csrfProtecao = csrf({cookie: true});

router.get('/', empresaController.index);
router.get('/:id', empresaController.show);
//router.post('/', empresaController.store);
//router.put('/:id', empresaController.update);
router.delete('/:id', empresaController.delete);

export default router;
