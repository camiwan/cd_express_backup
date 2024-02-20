import { Router } from 'express';
import adminController from '../controllers/adminController';

const { loginRequired } = require('../middlewares/middleware');

// const { loginRequired } = require('../middlewares/loginRequired'); /// was fez esse

 const router = new Router();
// router.get('/admin/', adminController.index);

router.get('/', adminController.index);


export default router;
