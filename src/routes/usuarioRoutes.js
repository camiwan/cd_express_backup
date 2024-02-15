import { Router} from 'express';
import usuarioController from '../controllers/UsuarioController';

const router = new Router();

router.get('/', usuarioController.index);
router.post('/', usuarioController.store);
router.put('/:id', usuarioController.update);
router.get('/:id', usuarioController.show);
router.delete('/:id', usuarioController.delete);

export default router;
